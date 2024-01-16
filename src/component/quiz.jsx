import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    {
      question: 'Quelle est la capitale de la France ?',
      options: ['Paris', 'Londres', 'Madrid', 'Rome'],
      answer: 'Paris'
    },
    {
      question: 'Quelle est la couleur du ciel ?',
      options: ['Bleu', 'Rouge', 'Vert', 'Jaune'],
      answer: 'Bleu'
    },
    {
      question: 'Quelle est la planète la plus proche du soleil ?',
      options: ['Mercure', 'Vénus', 'Terre', 'Mars'],
      answer: 'Mercure'
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          Vous avez obtenu {score} sur {questions.length} bonnes réponses !
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;