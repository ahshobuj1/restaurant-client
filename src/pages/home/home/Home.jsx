import BistroCover from '../bistroCover/BistroCover';
import CallUs from '../callUs/CallUs';
import HeaderBanner from '../headerBanner/HeaderBanner';
import OnlineOrder from '../onlineOrder/OnlineOrder';
import PopularItems from '../popularItems/PopularItems';
import RecommendsItem from '../recommends/RecommendsItem';
import Featured from '../featured/Featured';
import Testimonials from '../testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <HeaderBanner />
      <OnlineOrder />
      <BistroCover />
      <PopularItems />
      <CallUs />
      <RecommendsItem />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
