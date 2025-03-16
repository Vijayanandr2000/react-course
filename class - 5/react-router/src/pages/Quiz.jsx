import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "What is React?",
    options: ["Library", "Framework", "Language"],
    answer: "Library",
  },
  {
    question: "Who developed React?",
    options: ["Google", "Facebook", "Microsoft"],
    answer: "Facebook",
  },
];

const Quiz = ({ setScore, user }) => {
  const [questionIdx, setQuestionIdx] = useState(0);
  const navigator = useNavigate();

  useEffect(() => {
    if (!user) {
      navigator("/");
    }
  }, [user]);

  const handleAnswer = (selectedAns) => {
    const isCorrect = selectedAns === questions[questionIdx].answer;

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    if (questionIdx < questions.length - 1) {
      setQuestionIdx((prevIdx) => prevIdx + 1);
    } else {
      navigator("/result");
    }
  };

  return (
    <div>
      <h1>Quiz Page...!</h1>
      <h2>
        {questionIdx + 1}. {questions[questionIdx].question}
      </h2>
      {questions[questionIdx].options.map((option, idx) => (
        <button key={idx} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
      <br />
      <br />
      <br />
      <br />
      <br />
      <a href="/home">
        <button>Back to Home</button>
      </a>
    </div>
  );
};

export default Quiz;
