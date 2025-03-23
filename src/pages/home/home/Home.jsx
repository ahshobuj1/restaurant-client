import BistroCover from '../bistroCover/BistroCover';
import HeaderBanner from '../headerBanner/HeaderBanner';
import OnlineOrder from '../onlineOrder/OnlineOrder';
import PopularItems from '../popularItems/PopularItems';

const Home = () => {
  return (
    <div>
      <HeaderBanner />
      <OnlineOrder />
      <BistroCover />
      <PopularItems />
    </div>
  );
};

export default Home;
