import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Question from "./Question";

const Quiz = () => {
  const questionOptionDetails = {
    questionOptions: "",
    rightAnswer: false,
  };
  const question = {
    question: "",
    questionType: "single",
    questionOption: [questionOptionDetails],
  };
  
  const [quizData, setQuizData] = useState({
    title: "",
    description: "",
    date: "",
    questionDetails: [question],
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setQuizData({ ...quizData, [name]: value });
  };
  const handleOnChangeQuizQuestion = (id, key, value) => {
    let questionValue = [...quizData.questionDetails];
    if (key === "question") {
      questionValue[id].question = value;
    }
    if (key === "questionType") {
      questionValue[id].questionType = value;
    }
    setQuizData({
      ...quizData,
      questionDetails: questionValue,
    });
  };
  const handleAddNewQuestion = () => {
    let addQuestion = [...quizData.questionDetails];
    addQuestion.push(question);
    setQuizData({ ...quizData, questionDetails: addQuestion });
  };
  const handleOnChangeQuizQuestionOption = (queId, ansId, key, value) => {
    debugger;
    let questionOptionValue = [
      ...quizData.questionDetails[queId].questionOption,
    ];
    if (key === "questionOptions") {
      questionOptionValue[ansId].questionOptions = value;
    } else if (key === "rightAnswer" + queId) {
      if (quizData.questionDetails[queId].questionType === "single") {
        for (let i = 0; i < questionOptionValue.length; i++) {
          if (i === ansId) {
            questionOptionValue[ansId].rightAnswer = value;
          } else {
            questionOptionValue[ansId].rightAnswer = false;
          }
        }
      }
    } else {
      questionOptionValue[ansId].rightAnswer = value;
    }
    const questions = quizData?.questionDetails.map((data, index) => {
      console.log("🚀 ~ file: Quiz.js:61 ~ questions ~ data", data);
      if (index === queId) {
        return {
          ...data,
          questionOption: questionOptionValue,
        };
      } else {
        return data;
      }
    });
    setQuizData({
      ...quizData,
      questionDetails: questions,
    });
  };
  const handleSaveValue = () => {
    let myQuestionDetails = {
      Title: quizData.title,
      Description: quizData.description,
      Date: quizData.date,
      QuestionDetails: quizData.questionDetails,
    };
    localStorage.setItem("Question", myQuestionDetails);
    console.log(quizData);
  };
  const handleAddAnswerOptionQuestion = (id) => {
    // debugger;
    let addOption = [...quizData.questionDetails[id].questionOption];
    addOption.push(questionOptionDetails);

    const questions = quizData?.questionDetails.map((data, index) => {
      if (index === id) {
        return {
          ...data,
          questionOption: [...data.questionOption, questionOptionDetails],
        };
      } else {
        return data;
      }
    });
    setQuizData({
      ...quizData,
      questionDetails: questions,
    });
  };
  console.log(quizData);
  return (
    <center>
      <h1>Quiz Question</h1>
      <Form.Group as={Row} className="py-2">
        <Col sm="1">
          <Form.Label>Title :</Form.Label>
        </Col>
        <Col sm="5">
          <Form.Control
            type="text"
            name="title"
            value={quizData.title}
            onChange={handleOnChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="py-2">
        <Col sm="1">
          <Form.Label>Description :</Form.Label>
        </Col>
        <Col sm="5">
          <Form.Control
            type="text"
            name="description"
            value={quizData.description}
            onChange={handleOnChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="py-2">
        <Col sm="1">
          <Form.Label>Date :</Form.Label>
        </Col>
        <Col sm="5">
          <Form.Control
            type="Date"
            name="date"
            value={quizData.date}
            onChange={handleOnChange}
          />
        </Col>
      </Form.Group>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {quizData?.questionDetails.map((item, index) => {
        return (
          <Question
            key={index}
            item={item}
            id={index}
            handleOnChangeQuizQuestion={handleOnChangeQuizQuestion}
            handleAddAnswerOptionQuestion={handleAddAnswerOptionQuestion}
            handleOnChangeQuizQuestionOption={handleOnChangeQuizQuestionOption}
          />
        );
      })}
      <Form.Group as={Row}>
        <Col sm="2">
          <Button onClick={handleAddNewQuestion}>Add New Question</Button>
        </Col>
        <Col sm="2">
          <Button onClick={handleSaveValue}>Save</Button>
        </Col>
      </Form.Group>
    </center>
  );
};

export default Quiz;
