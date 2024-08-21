import React from "react";
//FC - Functional Component - return type should be mentioned
export const TodoRowItem: React.FC<{rowNumber:number,rowDescription:string,rowAssigned:string,deleteTodo:Function}>
 = (props) =>{
    return(
        <tr onClick= {() => props.deleteTodo(props.rowNumber)}>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}
