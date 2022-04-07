import React from "react";
import "./App.css";
import Profile from "./Profile/Profile";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Profile/Navigation";



function App() {
  let src = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  let handleName=(name)=>alert(name)

    return (
    <div>
      <Navigation/>
      <Profile FullName="Raoui" Bio="dev" Profession="developpeur" handleName={handleName}>{src}</Profile>
    </div>
  );
}

export default App;
