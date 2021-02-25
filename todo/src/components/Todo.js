import React from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Badge from "react-bootstrap/Badge";

const Todo = (props) => {
  return (
    <ListGroupItem
      onClick={() => {
        props.toggleCompleted(props.todo.id);
      }}
    >
      {props.todo.item}
      {"    "}
      <Badge variant={props.todo.completed ? "success" : "danger"}>
        {props.todo.completed ? "Done!" : "Still to do"}
      </Badge>
    </ListGroupItem>
  );
};

export default Todo;
