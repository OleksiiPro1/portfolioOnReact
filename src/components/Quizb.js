import { useContext, useEffect } from 'react';
import { QuizContext } from '../contexts/quiz';
import QuestionB from './QuestionB';

const Quizb = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const apiUrl =
    'https://opentdb.com/api.php?amount=8&type=multiple&encode=url3986';

  useEffect(() => {
    if (quizState.questions.length > 0) {
      return;
    }
    console.log('on initialize');

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
        dispatch({ type: 'LOADED_QUESTIONS', payload: data.results });
      });
  });

  return (
    <div>
      <div className="top-quiz">
        {quizState.showResults && (
          <div className="results">
            <div className="congratulations">Congratulations</div>
            <div className="results-info">
              <div>You have completed the quiz.</div>
              <div>
                You've got {quizState.correctAnswersCount} of{' '}
                {quizState.questions.length}
              </div>
            </div>
            <div
              className="next-button"
              onClick={() => dispatch({ type: 'RESTART' })}
            >
              Restart
            </div>
          </div>
        )}
        {!quizState.showResults && quizState.questions.length > 0 && (
          <div>
            <div className="score">
              Question {quizState.currentQuestionIndex + 1}/
              {quizState.questions.length}
            </div>
            <QuestionB />
            <div
              className="next-button"
              onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
            >
              Next question
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quizb;