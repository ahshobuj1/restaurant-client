import ItemCard from '../../shared/itemCard/ItemCard';
import SectionTitle from '../../shared/sectionTitle/SectionTitle';
import PrimaryButton from '../../shared/primaryButton/PrimaryButton';
import useMenu from '../../../hooks/useMenu';

const PopularItems = () => {
  const [menu] = useMenu();
  const popularItem = menu.filter((item) => item.category === 'popular');

  return (
    <section className="py-5 px-2 md:px-0 md:mb-20">
      <SectionTitle heading={'from our menu'} subHeading={'check it out'} />

      <div className="grid md:grid-cols-2 justify-between items-center gap-10 ">
        {popularItem.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>

      <div className="text-center mt-10">
        <PrimaryButton desc="view full menu" />
      </div>
    </section>
  );
};

export default PopularItems;
