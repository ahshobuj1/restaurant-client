import useMenu from '../../../hooks/useMenu';
import MenuSection from '../../shared/menuSection/MenuSection';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import MenuHeader from '../menuHeader/MenuHeader';
import {Helmet} from 'react-helmet-async';

const Menu = () => {
  const [menu] = useMenu();

  const offeredItem = menu.filter((item) => item.category === 'offered');
  const saladItem = menu.filter((item) => item.category === 'salad');
  const dessertItem = menu.filter((item) => item.category === 'dessert');
  const soupItem = menu.filter((item) => item.category === 'soup');
  const pizzaItem = menu.filter((item) => item.category === 'pizza');

  return (
    <section>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>

      <MenuHeader item={offeredItem} />

      <MenuSection
        item={dessertItem}
        img={dessertImg}
        heading={'dessert'}
        desc={
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa beatae dolores unde sit voluptates consequatur.'
        }
        buttonText={'order your favorite food'}
      />

      <MenuSection
        item={pizzaItem}
        img={pizzaImg}
        heading={'pizza'}
        desc={
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa beatae dolores unde sit voluptates consequatur.'
        }
        buttonText={'order your favorite food'}
      />

      <MenuSection
        item={saladItem}
        img={saladImg}
        buttonText={'order your favorite food'}
        heading={'salads'}
        desc={
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa beatae dolores unde sit voluptates consequatur.'
        }
      />

      <MenuSection
        item={soupItem}
        img={soupImg}
        buttonText={'order your favorite food'}
        heading={'soups'}
        desc={
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa beatae dolores unde sit voluptates consequatur.'
        }
      />
    </section>
  );
};

export default Menu;
