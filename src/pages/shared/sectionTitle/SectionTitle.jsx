import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="text-center max-w-96 mx-auto my-10">
      <p className="pb-2 text-[#D99904]">---{subHeading}---</p>
      <h3 className="uppercase py-3 text-4xl	border-y-3 border-gray-300">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
