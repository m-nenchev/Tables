import React from 'react';
import axios from 'axios';

function TableHeader(){
    return(
        <thead className="thead-dark">
            <tr>
               <th>First name</th>
               <th>Last name</th>
               <th>Year</th>
               <th>Actions</th>
            </tr>
        </thead>
    )   
}

    function TableRow(props){
        return(
            <tr>
               <td>{props.student.firstName}</td>
               <td>{props.student.lastName}</td>
               <td>{props.student.year}</td>
              
               <td>
                   <div className="btn-group" role="group" aria-label="Actions for the student">
                   <button className="btn btn-outline-dark btn-sm">edit</button>         
               
                  <button className="btn btn-outline-dark btn-sm"
                       onClick={
                           () => props.onDelete(props.student)
                       }>delete</button>
                       </div>
                </td>
            </tr>
        )
    }

    class StudentsTable extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                students:[]
            }
            axios.get('http://localhost:4000/students')
            
               .then((res) => {
                console.log(res.data);
                   this.setState({
                   students:res.data
                }) 
            })
        }
        getRows() {
            return this.state.students.map( 
                (s) => <TableRow key={s.id} 
                            student = {s}
                            onDelete={this.props.onDelete}/> 
            )
        }
        render(){
             return(this.state.students.length === 0)
                ? <h4>There are no registered students.</h4>
                :
           (
                <table className="table table-striped">
                    <TableHeader/>
                    <tbody>
                        
                         {this.getRows()}

                    </tbody>
           
                </table>
           )
        } 
    }
    export default StudentsTable;