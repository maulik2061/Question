import React from "react";
import { Col, Form, Row } from "react-bootstrap";

function QuestionOption(props) {
  const {  item, id, queId, handleOnChangeQuizQuestionOption } = props;
  return (
    <>
    
      <Form.Group as={Row} className="mx-3 py-1">
        <Col sm="10">
          <Form.Control
            type="text"
            name="questionOptions"
            onChange={(e) => {
              handleOnChangeQuizQuestionOption(
                id,
                queId,
                "questionOptions",
                e.target.value
              );
            }}
          />
        </Col>
        <Col sm="2">
          <Form.Check
            type={item.questionType === "single" ? "radio" : "checkbox"}
            name={"rightAnswer" + id}
            // checked={items.rightAnswer}
            onChange={(e) => {
              handleOnChangeQuizQuestionOption(
                id,
                queId,
                e.target.name,
                e.target.checked
              );
            }}
          />
        </Col>
      </Form.Group>
    </>
  );
}

export default QuestionOption;
