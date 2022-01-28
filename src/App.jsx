import Intro from "./components/introduction/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/Productlist";
import Contact from "./components/contact/Contact";
const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
