import React, { useState, useContext, createContext } from 'react'
import ReactDOM from 'react-dom'
import { Container, Button, Overlay, Inner, Close } from './styles/player'

export const PlayerContext = createContext()

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false)

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  )
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext)

  return showPlayer
    ? ReactDOM.createPortal(
        // <--- what is this
        <Overlay {...restProps}>
          <Inner>
            <video id='netflix-player' controls>
              <source src={src} type='video/mp4' />
            </video>
            <Close onClick={() => setShowPlayer(false)} />
          </Inner>
        </Overlay>,
        document.body
      )
    : null
}

Player.Button = function PlayerVideo({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext)

  return (
    <Button onClick={() => setShowPlayer((prevState) => !prevState)}>
      Play
    </Button>
  )
}
