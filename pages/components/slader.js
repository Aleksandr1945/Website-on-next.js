import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Документация слайдера https://reactjsexample.com/lightweight-and-fully-customizable-carousel-component-for-react/


export default function Slader ({image1, image2, image3, image4}) {

  
return (
    <>
    <Carousel 
    showStatus={false} infiniteLoop={true} width='90%' thumbWidth='120px'
    useKeyboardArrows={true} dynamicHeight={true} >
      <div >
          <img alt='img1' src={image1} />   
      </div>
      <div>
          <img src={image2} />
      </div>
      <div>
          <img src={image3} />
      </div>
      <div>
          <img src={image4}  />
      </div>
  </Carousel>
  
    </>
  )

}
