import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <Card>
      <Card.Header>
        Todo List
        <Button onClick={props.clearCompleted}>Clear completed tasks</Button>
      </Card.Header>
      <ListGroup>
        {props.todoList.map((todo) => (
          <Todo todo={todo} toggleCompleted={props.toggleCompleted} />
        ))}
      </ListGroup>
    </Card>
  );
};

export default TodoList;
