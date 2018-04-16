import React from "react";
// import PropTypes from 'prop-types';
import moment from "moment";
import Map from "./Map";
import users from "./users.css";
import Average from "./Average";

const white = {
  borderRadius: '50%',
  width: '60px',
  height: '60px',
  backgroundColor: 'white',
};

const green = {
  borderRadius: '50%',
  width: '60px',
  height: '60px',
  backgroundColor: 'green',
};
const lightGreen = {
  borderRadius: '50%',
  width: '60px',
  height: '60px',
  backgroundColor: 'lightgreen',
};
const yellow = {
  borderRadius: '50%',
  width: '60px',
  height: '60px',
  backgroundColor: 'yellow',
};
const orange = {
  borderRadius: '50%',
  width: '60px',
  height: '60px',
  backgroundColor: 'orange',
};
const red = {
  borderRadius: '50%',
  width: '60px',
  height: '60px',
  backgroundColor: 'red',
};

const black = {
  borderRadius: '50%',
  width: '60px',
  height: '60px',
  backgroundColor: 'black',
};

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      now: Date.now(),
      hours: [white, green, lightGreen, yellow, orange, red, black],
    };
  }

  render() {
    // const value = Object.keys(this.props.Value).map( V => {
    //   console.log(V.name);
    //   return <div>{V}</div>
    // });
    // const value = Object.entries(this.props.Key).map( value => {
    //   return (
    //     <div>{value.toString()}</div>
    //   );
    // })
    const {now} = this.state;
    let Key = this.props.Key;
    let name = this.props.Value.name;

    var timeStamp = this.props.Value.lastUpdated;
    var lastupdated_day = moment(timeStamp).get('day');
    
  
   
    
    var current_day = moment(now).format('dddd');
    //format("dddd, MMMM Do YYYY, h:mm:ss a");
  
    const get_day = dayNum(current_day);
    
    const calc = Calculation(lastupdated_day, get_day);
    // console.log(calc);


    let avail = [];
    avail.push(this.props.Value.availabilityArray);

    
    //function call once we got the current day we can pass tat through this func call
    const Availablity = Avail(avail, calc);
     
    const k_color = Availablity;
    const arr = k_color.map((v,k) => {
     return( v !== null 
      ? <Map style={this.state.hours[v]} 
      Availablity = {Availablity}
      />
      : null);

      });
    
   
    
    const arr_Key = Object.keys(avail).map((value, key) => {
      return <Average avail= {avail[key]} 
      lastupdated_day={lastupdated_day}
      hours ={this.state.hours}
      />;
    });
    
    const sort = Object.keys(arr_Key).map(([key, value]) => {
      
      return arr_Key[key];
    });


   
    
   
 
    //  console.log(moment(at).diff(moment(current)));
    
    //dateA => returns the xact day and time using calendar
    // var dateA = moment(this.props.Value.lastUpdated).subtract('days').calendar();

    // console.log(dateA);
    // var diff = moment().subtract(current, timeStamp);
    
    return (
      <div>
        <div className="user_name">{name}</div>
        <div>{arr}</div>
        
        <br />
        
        <div>{arr_Key}</div>
      </div>
    );
  }
}

export default Modal;


function Avail(avail, K){
 const gets = avail[0];
 const loop = gets.map((L, k) =>{
   if(k === K){
     return L;  
   } 
   return null;
 });
  return loop;
}

function dayNum(current_day){
  switch(current_day){
    case "Sunday":
      return 0;
    case "Monday":
      return 1;
    case "Tuesday":
      return 2;
    case "Wednesday":
      return 3;
    case "Thursday":
      return 4;
    case "Friday":
      return 5;   
    default:
     return null;     
  }
}

function Calculation(lastupdated_day, get_day){
  if(lastupdated_day >= get_day){
    if(lastupdated_day === get_day){
      return 0;
    }

    else{
      let Key_k = lastupdated_day + get_day;
      return (Key_k - 1);
    }
    
  }
  else{
    let Key_k = get_day - 1;
    return Key_k;
  }
}