import React from 'react';
import ItemCard from '../itemCard/ItemCard';
import PrimaryButton from '../primaryButton/PrimaryButton';
import SectionTitle from '../sectionTitle/SectionTitle';
import PageCover from '../pageCover/PageCover';

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
        <PrimaryButton desc={buttonText} />
      </div>
    </div>
  );
};

export default MenuSection;
