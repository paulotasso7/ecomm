import React from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Details from "./components/Details";
import Default from "./components/Default";
import NavBar from "./components/NavBar";

const App: React.FC = (): JSX.Element => {
  return (
    <div data-testid="App">
      <ProductList />
      <Cart />
      <Details />
      <Default />
      <NavBar />
    </div>
  );
};

export default App;
