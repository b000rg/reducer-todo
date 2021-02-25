import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddTodo = (props) => {
  const [todoText, setTodoText] = useState("");

  const handleChange = (evt) => {
    setTodoText(evt.target.value);
  };

  const handleSubmit = () => {
    props.addTodo({ item: todoText, completed: false, id: Date.now() });
    setTodoText("");
  };

  return (
    <Form>
      <Form.Group as={Form.Row}>
        <Col xs="auto">
          <Form.Label>New Task</Form.Label>
        </Col>
        <Col xs="auto">
          <Form.Control value={todoText} onChange={handleChange} />
        </Col>
        <Col xs="auto">
          <Button onClick={handleSubmit}>Add Task</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default AddTodo;
