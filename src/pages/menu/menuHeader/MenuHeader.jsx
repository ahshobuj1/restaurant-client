import {Link} from 'react-router';
import menuImg from '../../../assets/menu/banner3.jpg';
import ItemCard from '../../shared/itemCard/ItemCard';
import PageCover from '../../shared/pageCover/PageCover';
import PrimaryButton from '../../shared/primaryButton/PrimaryButton';
import SectionTitle from '../../shared/sectionTitle/SectionTitle';

const MenuHeader = ({item}) => {
  return (
    <>
      <div className="mb-20">
        <PageCover
          heading={'our menu'}
          desc={'would you like to try a dish!'}
          img={menuImg}
        />
      </div>

      <SectionTitle subHeading={"don't miss"} heading={"today's offer"} />

      <div className="grid md:grid-cols-2 justify-between items-center gap-10 ">
        {item.map((data) => (
          <ItemCard item={data} />
        ))}
      </div>

      <div className="text-center my-10">
        <Link to={`/shop/drinks`}>
          <PrimaryButton desc="order your favorite food" />
        </Link>
      </div>
    </>
  );
};

export default MenuHeader;
