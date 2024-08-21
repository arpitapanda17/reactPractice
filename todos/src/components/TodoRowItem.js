"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRowItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
//FC - Functional Component - return type should be mentioned
const TodoRowItem = (props) => {
    return ((0, jsx_runtime_1.jsxs)("tr", { onClick: () => props.deleteTodo(props.rowNumber), children: [(0, jsx_runtime_1.jsx)("th", { scope: 'row', children: props.rowNumber }), (0, jsx_runtime_1.jsx)("td", { children: props.rowDescription }), (0, jsx_runtime_1.jsx)("td", { children: props.rowAssigned })] }));
};
exports.TodoRowItem = TodoRowItem;
