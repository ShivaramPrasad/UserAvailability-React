import React from "react";
import users from "./users.css";

class Average extends React.Component{

  render(){

    let avail = this.props.avail;
    let lastupdated_day = this.props.lastupdated_day;
    let hours = this.props.hours;
    // console.log(hours);
    let array = [];
    array.push(avail);

    const addition = array.map((v,k) => {
      if(lastupdated_day ===4){
      let add = v[k] + v[k + 1]+ 0 + 0 + v[k + 4]+ v[k + 5]+ v[k + 6];
      return parseInt(add/7);
      }
      if (lastupdated_day === 5) {
        let add = v[k] + 0 + 0 + v[k + 3] + v[k + 4] + v[k + 5] + v[k + 6];
        return parseInt(add / 7);
      }
      if (lastupdated_day === 6) {
        let add = 0 + 0 + v[k + 2] + v[k + 3] + v[k + 4] + v[k + 5] + v[k + 6];
        return parseInt(add / 7);
      }
      if (lastupdated_day === 7) {
        let add = 0 + v[k + 1] + v[k + 2] + v[k + 3] + v[k + 4] + v[k + 5] + 0;
        return parseInt(add / 7);
      }
      if (lastupdated_day === 1) {
        let add = v[k] + v[k + 1] + v[k + 2] + v[k + 3] + v[k + 4] + 0 + 0;
        return parseInt(add / 7);
      }
      if (lastupdated_day === 2) {
        let add = v[k] + v[k + 1] + v[k + 2] + v[k + 3] + 0 + 0 + v[k + 6];
        return parseInt(add / 7);
      }
      if (lastupdated_day === 3) {
        let add = v[k] + v[k + 1] + v[k + 2] + 0 + 0 + v[k + 5] + v[k + 6];
        return parseInt(add / 7);
      }     
    });

    return(
      <div style={this.props.hours[addition]} className="avg_value">
        <div className="avg_txt">{'<'}{addition}h</div>
      </div>

    );
  }


}

export default Average;
