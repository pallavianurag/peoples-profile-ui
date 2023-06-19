import { useState,useEffect } from "react";
import './home.css';
import { Link } from "react-router-dom";


function Home(){

    const [profiles, setProfiles] = useState([]);

	const getProfileRequest = async () => {
		const url = `https://panorbit.in/api/users.json`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.users) {
			setProfiles(responseJson.users);
		}
	};

	useEffect(() => {
		getProfileRequest();
	}, []);
    profiles.map((profile)=>console.log(profile.name)
    )
console.log(profiles)
    return (
       <div className="padding">
       <div className="t" >
        <div className="head"><p style={p}>Select an Account</p></div>
        <hr></hr>
        {profiles.map((profile)=>  
        <div >
        <table cellPadding={5} cellSpacing={2} >
              <tr><td> <img className="image" src={profile.profilepicture}/>
        </td ><p ><Link to= {`/profile/${profile.id}`} style={linkStyle}>{profile.name}</Link></p></tr> 
        </table>
        </div>
        )}
        </div>
        </div>
    )
}

export default Home


const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'grey'
  }

  const p={
    color:'grey'
  }