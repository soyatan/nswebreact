import "./productList.css";
import Product from "./../product/Product";
import { products } from "./../../data";
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & Inspire - Its DO</h1>
        <p className="pl-desc">
          DO is a very creative port that yu should ve been waiting all around.
          Very beautiful applications from all around the world.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product img={item.img} key={item.id} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
