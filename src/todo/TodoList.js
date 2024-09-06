import React from "react";
import './TodoList.css';
import TodoListItem from "./TodoListItem";
import NewTodoForm  from "./NewTodoForm";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import { removeTodo } from "./actions";
const TodoList = ({ todos =[]}) => (

    <div className="List-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo} on OnRemovePress={OnRemovePress}/>)}
    </div>
);

const mapStateProps = state => ({
    todos: state.todos,
})

const mapDispatchProps = dispatch => ({
    OnRemovePress:text => dispatch(remoceTodo(text)),

})

export default connect (mapStateToProps, mapDispatchProps) (TodoList) ;