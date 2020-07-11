import React, { useState } from 'react';
import Team from "./Components/Team";
import TeamForm from "./Components/TeamForm"
import './App.css';

function App() {
  const [team, setTeam] = useState([
    {name: "Angelica Perez",
    email: "ap@gmail.com",
    role: "Front End Engineer"
    }
  ]);
  return ( 
    <div className="App">
      <h1>Our Team</h1>
        <TeamForm team={team} setTeam={setTeam}/>
        <Team team={team}/>
    </div>
  );
}

export default App