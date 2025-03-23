import {useEffect, useState} from 'react';
import ItemCard from '../../shared/itemCard/ItemCard';
import SectionTitle from '../../shared/sectionTitle/SectionTitle';

const PopularItems = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('public/menu.json')
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === 'popular');
        setMenu(popularItem);
      });
  }, []);

  console.log(menu);

  return (
    <section className="py-5 px-2 md:px-0 md:pb-20">
      <SectionTitle heading={'from our menu'} subHeading={'check it out'} />

      <div className="grid md:grid-cols-2 justify-between items-center gap-10 ">
        {menu.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularItems;
