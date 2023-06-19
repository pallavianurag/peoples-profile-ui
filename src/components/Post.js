import { useParams } from "react-router-dom"
import NavBar from "./NavBar"
import "../styles/comp.css"

function Post(){
    const {id} = useParams()
    return(
        <div className="post-container">
        <div className="post-child1"> <NavBar id ={id}/></div>
        <div className="post-child2">
        <p>Posts</p>
        <hr className="line1" ></hr>
        <p style={{fontSize:"700%", fontWeight:"bolder", color:"#ededed", display: "inline-table"}} >Coming Soon!</p>
        </div>
        </div>
    )
}

export default Post