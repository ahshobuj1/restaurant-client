const PageCover = ({img, heading, desc}) => {
  return (
    // <div className="relative">
    //   <img src={img} alt="section image" />
    //   <div className="absolute w-full h-full top-0 flex justify-center items-center p-28">
    //     <div className="bg-black opacity-60 py-20 px-10 max-h-96 w-lg text-white text-center">
    //       <h2 className="text-3xl font-semibold text-center uppercase pb-2">
    //         {heading}
    //       </h2>
    //       <p>{desc}</p>
    //     </div>
    //   </div>
    // </div>

    <div
      className="bg-cover h-[600px]"
      style={{
        backgroundImage: `url(${img})`,
      }}>
      <div className="w-full h-full flex justify-center items-center text-center text-white">
        <div className="w-[700px] px-20 py-12 bg-black opacity-60 text-center ">
          <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
          <p className="mb-5">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default PageCover;
