import React from "react";

const TeamForm = props => {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [role, setRole] = React.useState("");

    const handleName = event => setName(event.target.value);
    const handleEmail= event => setEmail(event.target.value);
    const handleRole = event => setRole(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        if (name && email && role) {
            props.setTeam([...props.team, {name, email, role}]);
            resetState();
        }
    };

    const resetState = () => {
        setName("");
        setEmail("");
        setRole("");
    };

    return (
        <form onSubmit= {handleSubmit}>
            <input
                onChange= {handleName}
                type= "text"
                name= "name"
                value= {name}
                placeholder= "name"
            />
            <input
                onChange= {handleEmail}
                type= "text"
                name= "email"
                value= {email}
                placeholder= "email"
            />
            <input
                onChange= {handleRole}
                type= "text"
                name= "role"
                value= {role}
                placeholder= "role"
            />
            <button type="submit">Add Team Member</button>
        </form>
    );
};

export default TeamForm;