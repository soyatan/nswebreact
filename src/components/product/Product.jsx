import "./product.css";

const Product = ({ img, link }) => {
  console.log(img);
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="blank " rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};
export default Product;
