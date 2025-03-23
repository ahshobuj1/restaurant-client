import SectionCover from '../../shared/sectionCover/SectionCover';
import img from '../../../assets/home/chef-service.jpg';

const BistroCover = () => {
  return (
    <>
      <SectionCover
        img={img}
        heading={'bistro-boss'}
        desc={
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ut eligendi temporibus, amet ducimus beatae dicta accusantium, id quia tempora voluptatum nam doloribus reiciendis, dolorum voluptatibus labore tempore fuga cupiditate iure harum ex pariatur iste? Cupiditate eum voluptatibus mollitia vitae?'
        }
      />
    </>
  );
};

export default BistroCover;
