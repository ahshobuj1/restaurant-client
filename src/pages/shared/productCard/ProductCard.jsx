const ProductCard = ({item}) => {
  const {image, name, recipe} = item;

  return (
    <div className="bg-[#F3F3F3s] max-w-[420px] max-h-[540px] border-1 border-amber-100">
      <img src={image} alt="image" className="h-72" />
      <div className="text-center py-8 ">
        <h2 className="capitalize text-xl font-semibold">{name}</h2>
        <p>{recipe}</p>
        <button className="uppercase btn btn-outline border-0 border-b-3 px-5 border-yellow-500 rounded-b-lg mt-6 hover:bg-black hover:text-white duration-500 ">
          add to card
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
