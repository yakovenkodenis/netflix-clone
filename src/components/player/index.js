import React, { useState, useContext } from 'react';
import { createPortal } from 'react-dom';

import { PlayerContext } from '../../context/player';

import { Container, Button, Overlay, Inner, Close } from './styles/player';

export default function Player({ children, ...restProps }) {
    const [showPlayer, setShowPlayer] = useState(false);
    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <Container {...restProps}>{children}</Container>
        </PlayerContext.Provider>
    );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);
    return showPlayer
        ? createPortal(
              <Overlay onClick={() => setShowPlayer(false)} {...restProps}>
                  <Inner>
                      <video id="netflix-palyer" controls>
                          <source src={src} type="video/mp4" />
                      </video>
                      <Close />
                  </Inner>
              </Overlay>,
              document.body
          )
        : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
    const { setShowPlayer } = useContext(PlayerContext);
    return (
        <Button
            onClick={() => setShowPlayer((prevShowPlayer) => !prevShowPlayer)}
            {...restProps}
        >
            Play
        </Button>
    );
};
