import { Dropdown } from 'rsuite';

import 'rsuite/dist/rsuite-no-reset.min.css';
import '../styles/logout.css'
import { Link, useLocation } from 'react-router-dom';

const Logout = ({name, image,email,city,company}) => {
    const {pathname} = useLocation();
    return(
    <div className="main">
  <Dropdown title={<img src={image} className='image' /> } className='menu' placement='bottomEnd'  >
    <Dropdown.Item className='item' disabled>{name}</Dropdown.Item>
    
    <Dropdown.Item className='item' disabled >{company}</Dropdown.Item>
    <Dropdown.Item divider />
    <Dropdown.Item className='item' disabled >{email}</Dropdown.Item>
    <Dropdown.Item className='item' disabled>{city}</Dropdown.Item>
    <Dropdown.Item divider />
    <Dropdown.Item className='item'style={{ screenRight:100}} ><button className='button' > <Link to='/' className={(pathname === '/') ? 'act' : 'lit'} >Sign Out</Link></button></Dropdown.Item>
  </Dropdown>
  </div>)
};

export default Logout;











// import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardImage, MDBCardFooter, MDBCardHeader } from 'mdbreact';
// //import "../css/bootstrap.min.css"
// import '../styles/logout.css'

// function Logout({name,image}){
//     return(
//         <div className="card-container" display="inline-flex">
//             <MDBCard>
//                 <MDBCardBody className="d-flex flex-column align-items-center">
//                     <img src={image} style={{height: "50px", width:"50px", borderRadius:"25px", display:"flex"}}/>
//                     <p style={{fontFamily:'serif', fontSize:'10px'}}>{name}</p>
//                     <button className="card-button">Logout</button>
//                 </MDBCardBody>
//             </MDBCard>
//         </div>
//     )
// }

// export default Logout