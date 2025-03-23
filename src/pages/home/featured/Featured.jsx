// import img from '../../../assets/home/featured.jpg';

import SectionTitle from '../../shared/sectionTitle/SectionTitle';

const Featured = () => {
  return (
    <section className="bg-[url(/featured.jpg)] bg-cover bg-fixed">
      <div className="pb-32 pt-20 px-32 bg-[#5d4f2181] ">
        <SectionTitle
          heading={'our featured menu'}
          subHeading={'check it out'}
        />

        <div className="flex justify-center items-center gap-16">
          <img
            src="/public/featured.jpg"
            alt="featured image"
            className="h-96 rounded-lg"
          />

          <div className="text-white space-y-2">
            <p>March 20, 2023</p>
            <h2 className="text-2xl">WHERE CAN I GET SOME?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="uppercase btn btn-outline border-0 border-b-3 border-white">
              read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
