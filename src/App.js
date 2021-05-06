
import './App.css';
import ResponsiveDrawer from "./Components/sidebar/Sidesbar/sidebar"
import {BrowserRouter as Router} from "react-router-dom"



function App() {

  
      
  return (
    <div className="App">
         
      <Router>
      <ResponsiveDrawer/>
      </Router>
      
    </div>
  );
}

export default App;
