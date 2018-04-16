import React from "react";
import { render } from "react-dom";
import Modal from "./Modal";
import data from "./data/users.json";


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  backgroundColor: "red",
  width: "100%",
  height: "500px",
  padding: "50px",
  margin: "50px"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.users,
    };
  }

// ComponentDidMount(){
//   this.setState({
//     data:,
//   });
//   console.log(typeof this.state.data.messages);
// }

  render() {

    // const content = Object.keys(this.state.data.users).map(key => {
    //   // console.log(this.state.data.users[key]);
    //   return <Modal key={key} Value={this.state.data.users[key]} />
    // });

    const content = Object.entries(this.state.data).map(([key, value]) => {
      // console.log(key, value);
      return (
        <Modal Key={key} Value={value} />
      );
    })


    return (
      <div className="body">
        <h1 className="header">User Availability Application</h1>
        {content}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
