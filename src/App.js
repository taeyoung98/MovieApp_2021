import React from "react";

class App extends React.Component {
  state = { // future state is not required. 
    isLoading: true, // just plan
    movies: []
  };
  componentDidMount(){
    setTimeout(()=>{ // js. not react
      this.setState({isLoading: false});
    }, 6000);
  }
  render(){
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>;
  }
}

export default App;
