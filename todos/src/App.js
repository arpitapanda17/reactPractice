"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./App.css");
const react_1 = require("react");
const TodoTable_1 = __importDefault(require("./components/TodoTable"));
const NewTodoForm_1 = require("./components/NewTodoForm");
const App = () => {
    const [todos, setTodos] = (0, react_1.useState)([
        { rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One' },
        { rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User Two' },
        { rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User Three' },
        { rowNumber: 4, rowDescription: 'Get haircut', rowAssigned: 'User Four' }
    ]);
    const addTodo = (description, assigned) => {
        // console.log('Add todo button is clicked');
        let rowNumber = 0;
        if (todos.length > 0) {
            rowNumber = todos[todos.length - 1].rowNumber + 1;
        }
        else {
            rowNumber = 1;
        }
        const newTodo = {
            rowNumber: rowNumber,
            rowAssigned: assigned,
            rowDescription: description
        };
        // todos.push(newTodo);
        setTodos(todos => [...todos, newTodo]);
    };
    const deleteTodo = (deleteTodoRowNumber) => {
        let filtered = todos.filter(function (value) {
            return value.rowNumber !== deleteTodoRowNumber;
        });
        setTodos(filtered);
    };
    const [showAddTodoForm, setShowAddTodoForm] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsx)("div", { className: "mt-5 container", children: (0, jsx_runtime_1.jsxs)("div", { className: "card", children: [(0, jsx_runtime_1.jsx)("div", { className: "card-header", children: "Your todo's" }), (0, jsx_runtime_1.jsxs)("div", { className: "card-body", children: [(0, jsx_runtime_1.jsx)(TodoTable_1.default, { todos: todos, deleteTodo: deleteTodo }), (0, jsx_runtime_1.jsx)("button", { className: 'btn btn-primary', onClick: () => setShowAddTodoForm(!showAddTodoForm), children: showAddTodoForm ? 'Close New Todo' : 'Add New Todo' }), showAddTodoForm && (0, jsx_runtime_1.jsx)(NewTodoForm_1.NewTodoForm, { addTodo: addTodo })] })] }) }));
};
exports.App = App;
