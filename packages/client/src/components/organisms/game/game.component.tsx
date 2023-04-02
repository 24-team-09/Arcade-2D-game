import { useState } from 'react'

import { MainView, Wrapper } from './game.styles'
import { GameView } from './game-view'
import { StartView } from '@/components/organisms/game/start-view'
import { EndView } from './end-view'
import { InformationView } from '@/components/organisms/game/information-view'

export const GameComponent = () => {
  const [isShowInformation, setIsShowInformation] = useState(false)
  const [isGameStarted, setIsGameStarted] = useState(true)
  const [isGameEnded, setIsGameEnded] = useState(false)

  return (
    <Wrapper>
      <MainView>
        <GameView isStartedGame={isGameStarted} isEndedGame={isGameEnded} />
        {!isGameStarted && !isGameEnded && (
          <StartView
            onClickStartGame={() => setIsGameStarted(true)}
            onClickInformation={() => setIsShowInformation(true)}
          />
        )}
        {isShowInformation && (
          <InformationView
            onCloseInformation={() => setIsShowInformation(false)}
          />
        )}
        {!isGameEnded && (
            <EndView
              onClickStartGame={() => setIsGameEnded(true)}
              score={1034}
            />
          )
        }
      </MainView>
    </Wrapper>
  )
}
