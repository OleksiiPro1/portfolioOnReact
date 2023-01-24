import { useState } from 'react';
import Header from './Header';
import Quiz from './Quiz';
import Quizb from './Quizb';
import VideoComponent from './VideoComponent';

export default function Main() {
  const [chooseTest, setChooseTest] = useState(1);
  return (
    <div className="main-div">
      <div className="header">
        <Header />
      </div>
      <div className="video-and-picture">
        {/* <div className="students">
          <img src="/students3.png" alt="students" width="100%" />
        </div> */}

        <div className="h1-div">
          <h1 className="h1">Let's start learning English</h1>
          <h1 className="h1">Let's start learning English</h1>
        </div>
        <div className="video">
          <VideoComponent />
        </div>
      </div>

      {chooseTest === 1 ? (
        <div className="quiz-div">
          <button onClick={() => setChooseTest(chooseTest + 1)}>B1-B2</button>
          <Quiz />
        </div>
      ) : (
        <div className="quiz-div">
          <button onClick={() => setChooseTest(1)}>A1-A2</button>
          <Quizb />
        </div>
      )}
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
      <div>111111111111</div>
    </div>
  );
}
