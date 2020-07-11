import React from "react";
import './Team.css';

const Team = props => {
  return (
    <div className="team-list">
      {props.team.map((team, i) => (
        <div className="team" key={i}>
          <h2>{team.name}</h2>
          <p>{team.email}</p>
          <p>{team.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Team;
