import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"
import NavBar from "./NavBar"
import "../styles/profile.css"
import Logout from "./Logout";

function Profile(){
    const {id} = useParams()

    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true) 
    const [profile, setProfile] = useState([])
        

 	const getProfileRequest = async () => {
		const url = `https://panorbit.in/api/users.json`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.users) {

			setProfiles(responseJson.users);
            
            var users = (responseJson.users)
            let result =[]
            console.log(profiles)
             result = users.filter((p) => {
                return String(p.id) === String({id}.id)
            })

            setProfile(result[0])
            setLoading(false)
		}
	};

	useEffect(() => {
		getProfileRequest();
	});

                if(!loading){
    return(
        <div className="float-container">
            <div className="float-child1"><NavBar id={id}/></div>
            <div className="float-child2">
               <div className="top"> <p>Profile</p><Logout  name={profile.name} image={profile.profilepicture} email={profile.email} city={profile.address.city} company={profile.company.name} />
</div>
<hr className="line1" ></hr>
      <div className="float2">     
<div className='float2-1'>
<div className="leftside" >
     <img src={profile.profilepicture} className="pic" /></div>
 <p className="l1">{profile.name}</p>
            <p className="l2">Username :<b> {profile.username}</b></p>
            <p className="l2">e-mail : <b>{profile.email}</b></p>
            <p className="l2">phone : <b>{profile.phone}</b></p>
            <p className="l2">website : <b>{profile.website}</b></p>
            <hr className="l2" ></hr>
                <p className="l1">Company</p>
                <p className="l2">Name : <b>{profile.company.name}</b> </p>
                <p className="l2">catchphrase : <b>{profile.company.catchPhrase}</b> </p>
                <p className="l2">bs : <b>{profile.company.bs}</b></p>
            </div>
            <div className="float2-2">
            <p className="address-head" >Address:</p>
            <p className="address">Street : <b>{profile.address.street}</b> </p>
            <p className="address">Suite : <b>{profile.address.suite} </b></p>
            <p className="address">City : <b>{profile.address.city}</b> </p>
            <p className="address">Zipcode : <b>{profile.address.zipcode}</b> </p>

                
                <img alt='mapbox' 
                src={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/${profile.address.geo.lng},${profile.address.geo.lat},4,0.00,0.00/1000x600@2x?access_token=pk.eyJ1IjoicGFsbGF2aWFudXJhZyIsImEiOiJjbGoxbnhzYzAwd2g2M2hxYXpyOXdoZGlnIn0.Rtb2T2z930u34a4V5_h4Gg`} 
                 className="map" ></img>
                 <p className="geo"><b>Lat :</b> {profile.address.geo.lat}<b>, Long :</b> {profile.address.geo.lng} </p>
                 </div>
            </div>
        </div>
        </div>
    )
                }
}

export default Profile