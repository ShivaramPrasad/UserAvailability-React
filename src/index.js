import React from "react";
import { render } from "react-dom";
import Modal from "./Modal";
import data from "./data/users.json";


class App extends React.Component {

  constructor(props) {
    super(props);

    //collected the data from the json file.. in this state..
    this.state = {
      data: data.users,
    };
  }


  render() {

    const content = Object.entries(this.state.data).map(([key, value]) => {
      // console.log(key, value);
      return (
        //Modal component passing some properties here...
        <Modal Key={key} Value={value} />
      );
    })


    return (
      <div>
        <h1 className="header">User Availability Application</h1>
      <div className="body">
        {content}
      </div>
      </div>
    );
  }
}



render(<App />, document.getElementById("root"));
