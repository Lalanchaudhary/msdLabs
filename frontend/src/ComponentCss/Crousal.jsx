import Carousel from 'react-bootstrap/Carousel';
import crousal1 from '../Assets/new1.jpg'
import crousal2 from '../Assets/new2.jpg'
import crousal3 from '../Assets/new3.jpg'
function Crousal() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={crousal1} width="100%" alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={crousal2} width="100%"   alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={crousal3} width="100%"  alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Crousal;