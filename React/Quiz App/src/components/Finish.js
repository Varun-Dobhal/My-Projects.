function Finish({ points, totalPoints, dispatch }) {
  return (
    <>
      <p className="result">
        You <strong>{points}</strong> out of {totalPoints}
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restartQuiz" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default Finish;
