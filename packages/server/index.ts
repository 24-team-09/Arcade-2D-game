import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import fs from 'fs'
import { createServer as createViteServer } from 'vite'
import type { ViteDevServer } from 'vite'
import express from 'express'
import { createClientAndConnect } from './db'

dotenv.config()

const isDev = process.env.NODE_ENV === 'development'
const app = express()
const port = Number(process.env.SERVER_PORT) || 3001

async function startServer() {
  app.use(cors())
  createClientAndConnect()
  app.get('/api', (_, res) => {
    res.json('👋 Howdy from the server :)')
  })

  let vite: ViteDevServer
  const distPath = path.dirname(require.resolve('client/dist/index.html'))
  const ssrClientPath = require.resolve('client/dist-ssr/client.cjs')
  const srcPath = path.dirname(require.resolve('client/ssr.tsx'))

  if (isDev) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: srcPath,
      appType: 'custom',
    })
    app.use(vite.middlewares)
  } else {
    app.use('/assets', express.static(path.resolve(distPath, 'assets')))
    app.use('/sw.js', express.static(require.resolve('client/sw.js')))
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl

    try {
      let template: string
      let render: (url: string) => Promise<[string, string]>

      if (isDev) {
        template = fs.readFileSync(path.resolve(srcPath, 'index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx')))
          .render
      } else {
        template = fs.readFileSync(
          path.resolve(distPath, 'index.html'),
          'utf-8'
        )
        render = (await import(ssrClientPath)).render
      }

      try {
        const [appHtml, css] = await render(url)

        const html = template
          .replace('<!--ssr-body-->', appHtml)
          .replace(`<!--ssr-styles-->`, css)

        res.setHeader('Content-Type', 'text/html')
        res.status(200).end(html)
      } catch (e) {
        if (e instanceof Response && e.status >= 300 && e.status <= 399) {
          return res.redirect(e.status, e.headers.get('Location') as string)
        }
        throw e
      }
      next()
    } catch (error) {
      if (isDev) {
        vite.ssrFixStacktrace(error as Error)
      }
      next(error)
    }
  })
}

startServer().then(() => {
  app.listen(port, () => {
    let message = `  ➜ Server is listening on port: ${port} http://localhost:${port}`
    message += isDev ? ' --development mode' : ' --production mode'
    console.log(message)
  })
})
