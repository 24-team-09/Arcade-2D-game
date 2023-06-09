import { useCallback, useEffect, useRef, useState } from 'react'

import { FullScreenBtn, MainView, Wrapper } from './game.styles'
import { GameView } from '@/components/organisms/game/game-view'
import { StartView } from '@/components/organisms/game/start-view'
import { EndView } from '@/components/organisms/game/end-view'
import { InformationView } from '@/components/organisms/game/information-view'
import { GameInformation } from '@/components/organisms/game/game-information'
import {
  HEIGHT_VIEW,
  WIDTH_VIEW,
} from '@/components/organisms/game/game.constants'
import fullScreenIcon from '@/assets/icons/fullscreen.svg'

export const GameComponent = () => {
  const [isShowInformation, setIsShowInformation] = useState(false)
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [isGameEnded, setIsGameEnded] = useState(false)
  const [isGameFullScreen, setIsGameFullScreen] = useState(false)
  const [outcome, setOutcome] = useState('')

  const mainViewRef = useRef(null)

  const handlerClickStartGame = useCallback(
    () => setIsGameStarted(prev => !prev),
    []
  )

  const handlerClickRestartGame = useCallback(
    () => setIsGameEnded(prev => !prev),
    []
  )

  const handlerClickShowInformation = useCallback(
    () => setIsShowInformation(prev => !prev),
    []
  )

  const handlerGameOver = useCallback((outcome: string) => {
    setIsGameEnded(true)
    setOutcome(outcome)
  }, [])

  const handlerClickFullscreen = useCallback(
    () => setIsGameFullScreen(prev => !prev),
    []
  )

  useEffect(() => {
    if (isGameFullScreen) {
      document.documentElement.requestFullscreen().then()
    } else {
      if (document.fullscreenElement !== null) document.exitFullscreen().then()
    }
  }, [isGameFullScreen])

  useEffect(() => {
    const gameBlock = mainViewRef.current! as HTMLDivElement

    const onFullscreenChange = (event: Event) => {
      if (document.fullscreenElement) {
        setTimeout(() => {
          const target = event.target! as HTMLDivElement
          const scaleX = target.clientWidth / (WIDTH_VIEW + 8)
          const scaleY = target.clientHeight / (HEIGHT_VIEW + 8)
          gameBlock.style.transform = `scale(${scaleX},${scaleY})`
        }, 1)
      } else {
        gameBlock.style.transform = `none`
        setIsGameFullScreen(false)
      }
    }

    addEventListener('fullscreenchange', event => onFullscreenChange(event))

    return () => removeEventListener('fullscreenchange', onFullscreenChange)
  }, [])

  return (
    <Wrapper fullScreen={isGameFullScreen}>
      <MainView ref={mainViewRef}>
        <FullScreenBtn onClick={handlerClickFullscreen}>
          <img src={fullScreenIcon} alt="На весь экран" />
        </FullScreenBtn>
        <GameView
          isStartedGame={isGameStarted}
          isEndedGame={isGameEnded}
          onGameOver={handlerGameOver}
        />
        {isGameStarted && !isGameEnded && <GameInformation />}
        {!isGameStarted && !isGameEnded && (
          <StartView
            onClickStartGame={handlerClickStartGame}
            onClickInformation={handlerClickShowInformation}
          />
        )}
        {isShowInformation && (
          <InformationView onCloseInformation={handlerClickShowInformation} />
        )}
        {isGameEnded && (
          <EndView
            outcome={outcome}
            onClickStartGame={handlerClickRestartGame}
          />
        )}
      </MainView>
    </Wrapper>
  )
}
