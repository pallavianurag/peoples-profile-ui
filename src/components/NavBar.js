import { Link, useLocation, useParams } from "react-router-dom";
import "../styles/navbar.css"
import { useState } from "react";

function NavBar({id}){
    
    const {pathname} = useLocation();


    return(
        <div className="pad" >
        <div className="ul">
        <div className="liDiv"><Link className={(pathname === `/profile/${id}`) ? 'active' : 'li'} to={`/profile/${id}`} >Profile</Link></div>
        <hr className="navbarHr" style={{width:"80%" }}/>
        <div className="liDiv"><Link className={(pathname === `/post/${id}`) ? 'active' : 'li'} to={`/post/${id}`} >Posts</Link></div>
        <hr className="navbarHr" style={{width:"80%" }}/>
        <div className="liDiv"><Link className={(pathname === `/gallery/${id}`) ? 'active' : 'li'} to={`/gallery/${id}`} >Gallery</Link></div>
        <hr className="navbarHr" style={{width:"80%" }}/>
        <div className="liDiv"><Link className={(pathname === `/todo/${id}`) ? 'active' : 'li'} to={`/todo/${id}`} >Todo</Link></div>
        </div>
        </div>
    )
}

export default NavBar;