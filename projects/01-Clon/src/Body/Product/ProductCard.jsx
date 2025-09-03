import productStyle from "./Product.module.scss";

function ProductCard({ productName, productImage, productPrice }) {
  return (
    <div className={productStyle.card}>
      <div className="imgBlock">
        <img
          src={productImage}
          alt={productName}
          className={productStyle.image}
        />
      </div>

      <h2 className="product-name">{productName}</h2>
      <p className="product-price">{productPrice}</p>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
