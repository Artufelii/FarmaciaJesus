import React from "react"
import { Link } from "react-router-dom"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import './Products.css'

const Products = ({ productos }) => {

  const responsive = {
    desktop: {
          breakpoint: { max: 3000, min: 1024  },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        
    },
    tablet: {
          breakpoint: { max: 1024, min: 464  },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        
    },
    mobile: {
          breakpoint: { max: 464, min: 0  },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        
    }
  }


  return(
    <Carousel 
      responsive={ responsive } 
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
    >
      { productos.map((item) => (
         <div className="carousel__item" key={item._id}>
           <img src={ item.image } alt={ item.name }  />
           <h3>{ item.substancia } {item.presentacion}</h3>
           <h4>{ new Intl.NumberFormat('es-MX', {
                style: "currency", 
                currency: "MXN"
              }).format(parseFloat(item.precio)) }
           </h4>
           <button><Link to = { `/catalogo/${item._id}` }>Más Información</Link></button>
         </div>
      ))}
    </Carousel>
  )
}

export default Products
