import React from "react";

interface Props {}

interface State {}

class Product extends React.Component<Props, State> {
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
