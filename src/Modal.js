import React from "react";
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
  
    const {now, hours} = this.state;
    let Key = this.props.Key;
    let name = this.props.Value.name;
    var timeStamp = this.props.Value.lastUpdated;

    //got the lastUpdated timestamp to get the day...
    var lastupdated_day = moment(timeStamp).get('day');

    //got the today's day 
    var current_day = moment(now).format('dddd');
    //(hint:)format("dddd, MMMM Do YYYY, h:mm:ss a");
  
    //to get the corresponding day number
    const get_day = dayNum(current_day);
    
    //Calculation for shifting the entry array to show today's availablibity 
    const calc = Calculation(lastupdated_day, get_day);

    let avail = [];
    avail.push(this.props.Value.availabilityArray);

    
    //function call once we got the current day we can pass tat through this func call
    const Availablity = Avail(avail, calc);
     
    //Mapping the Hours in availability array to their corresponding colors 
    const k_color = Availablity;
    const map_color = k_color.map((v,k) => {
     return( v !== null 
      ? <Map style={hours[v]} 
      Availablity = {Availablity}
      />
      : null);

      });
    
   
    //for finding the average weekday availability 
    const average = Object.keys(avail).map((value, key) => {
      return <Average avail= {avail[key]} 
      lastupdated_day={lastupdated_day}
      hours ={hours}
      />;
    });
   
    
    return (
    
      <div className="user_border">
        <h4 className="today_txt">Today</h4>
        <h4 className="average">Average</h4>
        <div className="user_name">{name}</div>
        <div>{map_color}</div>  
        <br />
        <div>{average}</div>
      </div>
    );
  }
}

export default Modal;

//to get the availability array values
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

//to get the corresponding day value
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


//for shifting the entry...
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