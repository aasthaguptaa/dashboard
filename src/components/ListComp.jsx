import { Component } from "react";

class ListComp extends Component{
    render(){
        let {username,email,address,phone,website,company}=this.props.user;
        return <div className="listdiv">
        <li>
    Name: {this.props.user.name}
    <ol>
        <li>UserName:{username}</li>
        <li>email:{email}</li>
        <li>City:{address.city}</li>
        <li>Phone:{phone}</li>
        <li>Website:{website}</li>
        <li>Company Name:{company.name}</li>
    </ol>
     </li>
     </div>
}
}
export default ListComp;