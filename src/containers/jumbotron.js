import React from 'react'
import jumboData from '../fixtures/jumbo.json'
import { Jumbotron } from '../components'

export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item, index) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt}></Jumbotron.Image>
            {index === 0 ? (
              <Jumbotron.Video
                src={item.src}
                autoPlay
                loop
                playsInline
              ></Jumbotron.Video>
            ) : (
              ''
            )}
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  )
}
