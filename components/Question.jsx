function Question({ id, isActive, handleActive, question, answer }) {
  return (
    <div key={id}>
      <div className="faqContainer">
        <h4 className="question">{question}</h4>
        <button className="btn" onClick={() => handleActive(id)}>
          {" "}
          {isActive === id ? "-" : "+"}{" "}
        </button>
      </div>
      <p className={isActive !== id ? "hidden" : ""}>{answer}</p>
    </div>
  );
}

export default Question;
