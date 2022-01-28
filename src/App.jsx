import Intro from "./components/introduction/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/Productlist";
const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
    </div>
  );
};

export default App;
