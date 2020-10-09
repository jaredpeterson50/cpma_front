import React from 'react'
import {useContext} from 'react';
import UserContext from "../../context/UserContext";
import Login from "../auth/Login";

export default function Team() {
    const { userData } = useContext(UserContext);
    if(!userData.user)
        return <Login/>
    return (
        <div>
            <h1>Welcome {userData.user.displayName} to the team page </h1>
            <div>Team ID, Team Name, Team members list</div>
        </div>
    )
}