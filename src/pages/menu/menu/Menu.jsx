import useMenu from '../../../hooks/useMenu';
import MenuSection from '../../shared/menuSection/MenuSection';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import MenuHeader from '../menuHeader/MenuHeader';

const Menu = () => {
  const [menu] = useMenu();

  const offeredItem = menu.filter((item) => item.category === 'offered');
  const saladItem = menu.filter((item) => item.category === 'salad');
  const dessertItem = menu.filter((item) => item.category === 'dessert');
  const soupItem = menu.filter((item) => item.category === 'soup');
  const pizzaItem = menu.filter((item) => item.category === 'pizza');

  return (
    <section>
      <MenuHeader item={offeredItem} />

      <MenuSection
        item={dessertItem}
        img={dessertImg}
        heading={'Dessert'}
        desc={
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa beatae dolores unde sit voluptates consequatur.'
        }
        buttonText={'order your favorite food'}
      />

      <MenuSection
        item={pizzaItem}
        img={pizzaImg}
        heading={'Pizza'}
        desc={
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa beatae dolores unde sit voluptates consequatur.'
        }
        buttonText={'order your favorite food'}
      />

      <MenuSection
        item={saladItem}
        img={saladImg}
        buttonText={'order your favorite food'}
        heading={'Salads'}
        desc={
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa beatae dolores unde sit voluptates consequatur.'
        }
      />

      <MenuSection
        item={soupItem}
        img={soupImg}
        buttonText={'order your favorite food'}
        heading={'Soups'}
        desc={
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa beatae dolores unde sit voluptates consequatur.'
        }
      />
    </section>
  );
};

export default Menu;
