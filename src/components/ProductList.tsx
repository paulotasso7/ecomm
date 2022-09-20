import React from "react";
import Product from "./Product";

interface ProductListProps {}

interface ProductListState {}

class ProductList extends React.Component<ProductListProps, ProductListState> {
  state: any = { state: null };
  render() {
    return (
      <div>
        <Product />
      </div>
    );
  }
}

export default ProductList;
