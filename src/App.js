import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            students:[]
        }
    }
    render(){
        const students=[{
            id:'abc',
            name:'Evelyn',
            surname:'Arnett'
            },{
            id:'def',
            name:'Glen',
            surname:'Brandfor'
           },

           {
            id:'ghi',
            name:'Kourtney',
            surname:'Calloway'
           },{
            id:'jkl',
            name:'Dawson',
            surname:'Eagardton'
           },{
            id:'mno',
            name:'Maggie',
            surname:'BTownsendf'
           }
           ,{
            id:'pqr',
            name:'Kyle',
            surname:'Millehouse'
           }
       ] ;
        return(
            <div>
                {students.map((student)=>{
                  console.log(student);
                    return(
                        <div className="row">
                            <ul class="list-group col-md-3 offset-3 mx-auto text-center font-weight-bold">
                                <li class="list-group-item "> {student.name} {student.surname}</li>
                            </ul>
                        </div>
                    );
                })}
            </div>
        );
    }
}
export default App;