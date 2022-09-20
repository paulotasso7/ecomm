import React from "react";

interface DefaultProps {}

interface DefaultState {}

class Default extends React.Component<DefaultProps, DefaultState> {
  state: any = { state: null };
  render() {
    return <div>page not found</div>;
  }
}

export default Default;
