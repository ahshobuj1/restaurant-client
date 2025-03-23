const SectionCover = ({img, heading, desc}) => {
  return (
    <div className="relative">
      <img src={img} alt="section image" />
      <div className="absolute w-full h-full top-0 flex justify-center items-center p-28">
        <div className="bg-white py-20 px-24">
          <h2 className="text-3xl font-semibold text-center uppercase pb-2">
            {heading}
          </h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionCover;
