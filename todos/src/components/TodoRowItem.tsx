import React from "react";

function TodoRowItem(props:{rowNumber:number,rowDescription:string,rowAssigned:string,deleteTodo:Function}){
//props - key value pair of every item passed in
    // const rowNumber=1;
    // const rowDescription='Feed dog';
    // const rowAssigned ='Eric';

    //Only one parent element can be returned
    return(
        <tr onClick= {() => props.deleteTodo(props.rowNumber)}>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}

export default TodoRowItem;