import { useState } from "react";
import "../util/App.css";
import questionsArr from "../util/questions";
import Question from "../components/Question";

function App() {
  const [isActive, setIsActive] = useState(null);

  const handleActive = (id) => {
    if(isActive === id) {
      setIsActive(null);
    } else {
      setIsActive(id);
    }
  }

  return (
    <>
      <div className="container">
        <h1> Frequently Asked Questions </h1>
        {questionsArr.map((q) => (
          <Question
            key={q.id}
            id={q.id}
            isActive={isActive}
            handleActive={handleActive}
            question={q.question}
            answer={q.answer}
          />
        ))}
      </div>
    </>
  );
}

export default App;
