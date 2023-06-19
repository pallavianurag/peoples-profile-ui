import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"
import NavBar from "./NavBar"
import "../styles/profile.css"

function Profile(){
    const {id} = useParams()

    const getProfileFromId = (id, profiles) => {
        for(let i = 0; i < profiles.length; i++) {
            // console.log("comparing ", profiles[i].id, id)
            if(String(profiles[i].id) === String(id)) {
                return profiles[i]
            }
        }
    }

    const [profiles, setProfiles] = useState([]); 
    var p
	const getProfileRequest = async () => {
		const url = `https://panorbit.in/api/users.json`;

		const response = await fetch(url);
		const responseJson = await response.json();

        console.log("this is the response", responseJson)

		if (true) {
			// setProfiles(responseJson.users);
            p = responseJson.users
            // console.log("we are searching for user", {id})
            
            p = getProfileFromId({id}.id, responseJson.users)

            // console.log("profiles", profiles)
            // console.log("p", p)
            // console.log("responseJson", responseJson)
            document.getElementById("name").innerHTML = p.name
            document.getElementById("username").innerHTML = p.username
		}
	};

    getProfileRequest();
    

    return(
        <div className="float-container">
            <div className="float-child1"><NavBar id={id}/></div>
            <div className="float-child2">
            <p>Profile</p>
            <img/>
            {console.log("this is current user", p)}
            <p id="name" ></p>
            <p id="username"></p>
            </div>
        </div>
    )
}

export default Profile