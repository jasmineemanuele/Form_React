import Navbar from "./components/navbar";
import Colonna from "./components/colonna";
import { Component } from "react";
import MeetingForm from './components/MeetingForm';


class App extends Component {
  render(){
    return (
      <>
        <Navbar />
        <div className="conatiner-fluid">
          <h1  style={{textAlign:'center'}} >MEETINGS</h1>
          <hr/>
          <div className="container text-center">
          <MeetingForm />
          
          </div>
            <div>
      
              
            </div>
        </div>
      </>
    );
  };
};

export default App;
