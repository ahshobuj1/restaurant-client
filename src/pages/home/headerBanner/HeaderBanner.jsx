import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';

import img1 from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.png';
import img4 from '../../../assets/home/04.jpg';
import img5 from '../../../assets/home/05.png';
import img6 from '../../../assets/home/06.png';

const HeaderBanner = () => {
  return (
    <Carousel className="text-center">
      <div>
        <img src={img1} alt="banner images" className="max-h-[650px]" />
      </div>
      <div>
        <img src={img2} alt="banner images" className="max-h-[650px]" />
      </div>
      <div>
        <img src={img3} alt="banner images" className="max-h-[650px]" />
      </div>
      <div>
        <img src={img4} alt="banner images" className="max-h-[650px]" />
      </div>
      <div>
        <img src={img5} alt="banner images" className="max-h-[650px]" />
      </div>
      <div>
        <img src={img6} alt="banner images" className="max-h-[650px]" />
      </div>
    </Carousel>
  );
};

export default HeaderBanner;
