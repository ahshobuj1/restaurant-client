const ItemCard = ({item}) => {
  const {image, name, price, recipe} = item;

  console.log('[itemCard]', item);
  return (
    <div className="space-x-1 flex justify-between items-center gap-5">
      <img
        src={image}
        className="h-24 w-24 rounded-full rounded-tl-none"
        alt="item image"
      />
      <div>
        <h3 className="uppercase text-2xl">{name}-----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">{price}$</p>
    </div>
  );
};

export default ItemCard;
