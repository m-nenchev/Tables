import React from 'react';
import LabelText from './LabelText';
import LabelSelect from './LabelSelect';
import { withRouter } from "react-router";
import axios from 'axios';
class StudentInfo extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      year: ""
    }

    this.saveClicked = this.saveClicked.bind(this);
    this.changeText = this.changeText.bind(this);
    this.clearCLicked = this.clearCLicked.bind(this);
  }

  saveClicked(e){
    e.preventDefault();

    axios.post('http://localhost:4000/student', this.state)
    .then((res)=>{
    this.clearForm();
    this.props.history.push('/');
    })

}

changeText(e){
  this.setState({
    [e.target.id]: e.target.value
    })
}
clearCLicked(e) {
    e.preventDefault();
    this.clearForm();
}

clearForm() {
    this.setState({
         firstName: "",
         lastName: "",
         year: "1"
    })
}

 render(){
   return (
     
     
    <form>
      
      <h3>Student Info</h3>
       <LabelText 
       name="firstName" 
       label="First Name:"
       onChange={this.changeText}
       value={this.state.firstName}
       />

       <LabelText 
       name="lastName" 
       label="Last Name:"
       onChange={this.changeText}
       value={this.state.lastName}
       />
       
    <LabelSelect
    name= "year"
    label="Year"
    onChange={this.changeText}
    value={this.state.year}
    />


       <button
         onClick={this.saveClicked}
         className="btn btn-primary">
             Save
        </button>
       <button
         onClick={this.clearCLicked}
         className="btn btn-danger">Clear</button>
         
         </form>
       
    )
  }
}
export default withRouter(StudentInfo);