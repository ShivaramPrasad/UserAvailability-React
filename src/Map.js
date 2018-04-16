import React from "react";
import Modal from "./Modal";
import users from "./users.css";



class Map extends React.Component{

render(){
  
  let Availablity = this.props.Availablity;
  let styles = this.props.style;


  return(
    <div style={styles} className="today">
    <div className="circle_txt">{'>'}{Availablity}h</div>
    </div>
  );
}

}

export default Map;