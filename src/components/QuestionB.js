import { useContext } from 'react';
import { QuizContextB } from '../contexts/quizb';
import AnswerB from './AnswerB';

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContextB);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  return (
    <div>
      <div className="question-b">{currentQuestion.question}</div>
      <div className="answers">
        {quizState.answers.map((answer, index) => (
          <AnswerB
            answerText={answer}
            key={index}
            index={index}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            onSelectAnswer={(answerText) =>
              dispatch({ type: 'SELECT_ANSWER', payload: answerText })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
