import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import QuestionOption from "./QuestionOption";

const Question = (props) => {
  const {
    item,
    id,
    handleAddAnswerOptionQuestion,
    handleOnChangeQuizQuestion,
    handleOnChangeQuizQuestionOption,
  } = props;
  return (
    <>
      <Form.Group as={Row} className="mx-3 py-2">
        <Col sm="1">
          <Form.Label>Question {(" ", id + 1)}</Form.Label>
        </Col>
        <Col sm="9"></Col>
        <Col sm="2">Question Type</Col>
      </Form.Group>
      <Form.Group as={Row} className="mx-3 ">
        <Col sm="10">
          <Form.Control
            id="one"
            type="text"
            name="question"
            // value={item.question}
            onChange={(e) => {
              handleOnChangeQuizQuestion(id, "question", e.target.value);
            }}
          />
        </Col>
        <Col sm="1" className="mx-5">
          <Form.Select
            id={"two"}
            type="text"
            name="questionType"
            value={item.questionType}
            onChange={(e) => {
              handleOnChangeQuizQuestion(id, "questionType", e.target.value);
            }}
          >
            <option value="single">Single</option>
            <option value="multiple">Multiple</option>
          </Form.Select>
        </Col>
      </Form.Group>


      <Form.Group as={Row} className="mx-3 py-3">
        <Col sm="1">
          <Form.Label>Answer Option</Form.Label>
        </Col>
        <Col sm="9"></Col>
        <Col sm="2">Select Answer</Col>
      </Form.Group>
      {item?.questionOption?.map((items, index) => {
        return (
          <QuestionOption
            items={items}
            queId={index}
            id={id}
            item={item}
            handleOnChangeQuizQuestionOption={handleOnChangeQuizQuestionOption}
          />
        );
      })}
      <Form.Group as={Row} className="mx-1 py-1">
        <Col sm="2">
          <Button
            variant="primary"
            onClick={() => {
              handleAddAnswerOptionQuestion(id);
            }}
          >
            Add Question Answer Option
          </Button>
        </Col>
      </Form.Group>
    </>
  );
};

export default Question;
