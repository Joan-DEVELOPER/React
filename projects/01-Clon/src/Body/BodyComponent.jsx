import ProductCard from "./Product/ProductCard";

function BodyComponent() {
  const productNames = [
    "Product 1",
    "Product 2",
    "Product 3",
    "Product 4",
    "Product 5",
    "Product 6",
    "Product 7",
    "Product 8",
    "Product 9",
    "Product 10",
  ];

  const productImages = [
    "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4526398/pexels-photo-4526398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2148216/pexels-photo-2148216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/337287/pexels-photo-337287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/38568/macbook-apple-imac-computer-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const productPrices = [
    "€29.99",
    "€49.99",
    "€19.99",
    "€89.99",
    "€129.99",
    "€9.99",
    "€79.99",
    "€59.99",
    "€299.99",
    "€1499.99",
  ];

  return (
    <div>
      {/* Utilitzar .map per a bucles (estandard i recomanada) */}
      {productNames.map((name, index) => (
        <ProductCard
          key={index}
          productName={name}
          productImage={productImages[index]}
          productPrice={productPrices[index]}
        />
      ))}
    </div>
  );
}

export default BodyComponent;
