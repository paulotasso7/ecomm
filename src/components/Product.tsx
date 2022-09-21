import React from "react";

interface ProductProps {}

interface ProductState {}

class Product extends React.Component<ProductProps, ProductState> {
  state: any = { state: null };
  render() {
    return (
      <div>
        <h3>Product</h3>
      </div>
    );
  }
}

export default Product;
