import { useEffect } from "react";

function Timer({ dispatch, secondsReamining }) {
  const min = Math.floor(secondsReamining / 60);
  const sec = secondsReamining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {min}:{sec} min
    </div>
  );
}

export default Timer;
