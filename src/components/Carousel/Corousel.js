import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Anuncio1 from '../../Assets/anuncio1.jpg'
import Anuncio2 from '../../Assets/Anuncio2.jpg'
import Anuncio3 from '../../Assets/Anuncio3.jpg'
import Anuncio4 from '../../Assets/Anuncio4.jpg'
import Anuncio5 from '../../Assets/Anuncio5.jpg'

const CarouselPrincipal = ({ autoPlay, infiniteLoop, interval }) => {
  return(
    <Carousel
      autoPlay={ autoPlay }
      infiniteLoop={ infiniteLoop }
      interval={ interval }
      showArrows={ true } 
      showThumbs={ false }
    >
      <div>
        <img src={ Anuncio1 } alt="Imgen de prueba" />
      </div>
      <div>
        <img src={ Anuncio2 } alt="Imgen de prueba" />
      </div>
      <div>
        <img src={ Anuncio3 } alt="Imgen de prueba" />
      </div>
      <div>
        <img src={ Anuncio4 } alt="Imgen de prueba" />
      </div>
      <div>
        <img src={ Anuncio5 } alt="Imgen de prueba" />
      </div>
    </Carousel>
  )
}

export default CarouselPrincipal
