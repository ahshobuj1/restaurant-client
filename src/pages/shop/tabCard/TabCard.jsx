import ProductCard from '../../shared/productCard/ProductCard';

const TabCard = ({items}) => {
  return (
    <div className="grid md:grid-cols-3 gap-10">
      {items.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default TabCard;
