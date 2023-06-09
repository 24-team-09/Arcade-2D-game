import { Sprite } from '@/components/organisms/game/game-view/models/Sprite'
import { SpriteModel } from '@/components/organisms/game/game-view/game-view.types'

export class Coin extends Sprite {
  shouldDraw = true
  compeleAnimation = false
  constructor(props: SpriteModel) {
    super(props)
  }

  switchSprite(name: string) {
    const animation = this.animations?.[name]
    if (this.image === animation?.image) return

    this.currentFrame = 0

    if (animation?.image) {
      this.image = animation.image
      this.frameRate = animation.frameRate || 1
      this.frameBuffer = animation.frameBuffer || 2
    }
    setTimeout(() => {
      this.compeleAnimation = true
    }, 100)
  }

  getCoin(callback: () => void) {
    const getCoin = 'getCoin'
    this.switchSprite(getCoin)

    if (this.compeleAnimation) {
      callback()
      this.shouldDraw = false
    }
  }

  draw() {
    if (this.shouldDraw && !this.compeleAnimation) {
      super.draw()
    }
  }
}
