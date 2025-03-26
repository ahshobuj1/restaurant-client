import React from 'react';
import ItemCard from '../itemCard/ItemCard';
import PrimaryButton from '../primaryButton/PrimaryButton';
import SectionTitle from '../sectionTitle/SectionTitle';
import PageCover from '../pageCover/PageCover';
import {Link} from 'react-router';

const MenuSection = ({img, item, buttonText, heading, desc}) => {
  return (
    <div>
      <div className="mb-20">
        <PageCover heading={heading} desc={desc} img={img} />
      </div>

      <div className="grid md:grid-cols-2 justify-between items-center gap-10 ">
        {item.map((data) => (
          <ItemCard item={data} />
        ))}
      </div>

      <div className="text-center my-10">
        <Link to={`/shop/${heading}`}>
          <PrimaryButton desc={buttonText} />
        </Link>
      </div>
    </div>
  );
};

export default MenuSection;
