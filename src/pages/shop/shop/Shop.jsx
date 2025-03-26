import {Helmet} from 'react-helmet-async';
import PageCover from '../../shared/pageCover/PageCover';
import shopImg from '../../../assets/shop/banner2.jpg';

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {useState} from 'react';
import useMenu from '../../../hooks/useMenu';
import TabCard from '../tabCard/TabCard';
import {useParams} from 'react-router';

const Shop = () => {
  const {category} = useParams();
  const categories = ['salads', 'pizza', 'soups', 'dessert', 'drinks'];
  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu] = useMenu();

  const drinksItem = menu.filter((item) => item.category === 'drinks');
  const saladItem = menu.filter((item) => item.category === 'salad');
  const dessertItem = menu.filter((item) => item.category === 'dessert');
  const soupItem = menu.filter((item) => item.category === 'soup');
  const pizzaItem = menu.filter((item) => item.category === 'pizza');

  return (
    <section>
      <Helmet>
        <title>Bistro | Shop</title>
      </Helmet>

      <PageCover
        heading={'Our shop'}
        desc="would you like to try a dish"
        img={shopImg}
      />

      <div className="my-10">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList style={{textAlign: 'center', marginBottom: '30px'}}>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERT</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>
            <TabCard items={saladItem} />
          </TabPanel>
          <TabPanel>
            <TabCard items={pizzaItem} />
          </TabPanel>
          <TabPanel>
            <TabCard items={soupItem} />
          </TabPanel>
          <TabPanel>
            <TabCard items={dessertItem} />
          </TabPanel>
          <TabPanel>
            <TabCard items={drinksItem} />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Shop;
