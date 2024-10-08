import { TodoModel } from "../models/TodoModel";
import {TodoRowItem} from "./TodoRowItem";
function TodoTable(props: {todos: TodoModel[],
                            deleteTodo: Function
}){
    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned</th>
                </tr>
            </thead>
            <tbody>
                {props.todos.map(todo =>(
                    <TodoRowItem deleteTodo={props.deleteTodo}
                        key={todo.rowNumber}
                        rowNumber = {todo.rowNumber}
                        rowDescription ={todo.rowDescription}
                        rowAssigned ={todo.rowAssigned}
                    />
                    
                ))}
            </tbody>
        </table>
    )
}
export default TodoTable;