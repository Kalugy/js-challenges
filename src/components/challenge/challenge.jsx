import { useState, useEffect } from "react";
import challenges from "../../constants/challenge.json";

export default function ChallengeComponent() {
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [userCode, setUserCode] = useState(challenges[currentChallengeIndex].template);
  const [feedback, setFeedback] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [counterRun, setCounterRun] = useState(0);
  const [points, setPoints] = useState(0);

  const currentChallenge = challenges[currentChallengeIndex];

  
  const handleCodeChange = (event) => {
    setUserCode(event.target.value);
  };

  const handleSubmit = () => {
    try {
      const userFunction = new Function(`${userCode}\nreturn main;`)();
      const result = Array.isArray(currentChallenge.expectedResult)
        ? JSON.stringify(userFunction())
        : userFunction();

      if (result === JSON.stringify(currentChallenge.expectedResult) || result === currentChallenge.expectedResult) {
        setFeedback("Success! Your solution is correct.");
        setPoints(prev => prev + 1)

      } else {
        setFeedback(`Failed. Expected: ${JSON.stringify(currentChallenge.expectedResult)}, but got: ${result}.`);
      }
    } catch (error) {
      setFeedback(`Error: ${error.message}`);
    }
  };

  const handleRun = () => {
    setCounterRun((prev) => prev + 1)
    try {
      const userFunction = new Function(`${userCode}\nreturn main;`)();

      let capturedLog = [];
      const originalLog = console.log;

      // Override console.log to capture logs
      console.log = (message) => capturedLog.push(message);

      // Execute the user's function and capture logs
      const result = userFunction();

      // Restore the original console.log
      console.log = originalLog;

      // Return feedback only with result and logs if there are any logs
      if (capturedLog.length > 0) {
        setFeedback(JSON.stringify({
          result: result,
          logs: capturedLog
        }));
      } else {
        setFeedback(JSON.stringify(result));
      }
    } catch (error) {
      setFeedback(`Error: ${error.message}`);
    }
  };

  const handleNextChallenge = () => {
    if (currentChallengeIndex < challenges.length - 1) {
      setCurrentChallengeIndex(currentChallengeIndex + 1);
      setUserCode(challenges[currentChallengeIndex + 1].template);
      setFeedback(null);
      setShowHint(false);
    } else {
      setFeedback("You have completed all challenges!");
    }
  };

  const handlePreviousChallenge = () => {
    if (currentChallengeIndex > 0) {
      setCurrentChallengeIndex(currentChallengeIndex - 1);
      setUserCode(challenges[currentChallengeIndex - 1].template);
      setFeedback(null);
      setShowHint(false);
    }
  };

  const handleHintToggle = () => {
    setShowHint(!showHint);
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowLeft":
        handlePreviousChallenge();
        break;
      case "ArrowRight":
        handleNextChallenge();
        break;
      // case "Enter":
      //   handleRun();
        // break;
      default:
        break;
    }
  };

  // // Add event listener once when the component mounts
  // useEffect(() => {
  //   const listener = (event) => handleKeyDown(event); // Ensure proper function reference
  //   window.addEventListener("keydown", listener);

  //   // Cleanup the event listener on unmount
  //   return () => {
  //     window.removeEventListener("keydown", listener);
  //   };
  // }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* <h1 className="text-4xl font-bold text-center mb-4">Challenge</h1> */}
      <div className="bg-yellow-100 p-4 rounded shadow-md mb-4">
        <div className="flex gap-3">
        <button
          onClick={handlePreviousChallenge}
          className={`bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 ${
            currentChallengeIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentChallengeIndex === 0}
        >
          {'<'}
        </button>
        <h2 className="text-2xl font-semibold mb-2">Challenge {currentChallenge.id}</h2>
        <button
          onClick={handleNextChallenge}
          className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ${
            currentChallengeIndex >= challenges.length - 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentChallengeIndex >= challenges.length - 1}
        >
         {'>'}
        </button>
        </div>
        <p className="text-gray-700 mb-1"><strong>Type:</strong> {currentChallenge.type}</p>
        <p className="text-gray-700 mb-1"><strong>Method:</strong> {currentChallenge.method} - {currentChallenge.function}</p>
        <h4 className="font-semibold text-md mb-2">Instructions: </h4>
        <p className="text-gray-700  mb-2">{currentChallenge.instruction}</p>
        <button
          onClick={handleHintToggle}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          {showHint ? "Hide Hint" : "Show Hint"}
        </button>
      </div>
      
      {showHint && (
        <div className="bg-blue-100 p-4 rounded shadow-md mb-4">
          <h3 className="text-xl font-semibold mb-2">Hint</h3>
          <p className="text-gray-700">{currentChallenge.hint}</p>
        </div>
      )}
      <div className="flex space-x-4">
        <p className="text-md font-semibold">
          Points: {points} - 
          totalRuns: {counterRun}
          </p>
      </div>
      <textarea
        value={userCode}
        onChange={handleCodeChange}
        rows="5"
        className="w-full p-2 border rounded mb-4"
      ></textarea>
      
      
      <div className="flex space-x-4">
        <button
          onClick={handleRun}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
           Run
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
      {feedback && <p className="text-lg text-gray-700 mt-4">{feedback}</p>}
      
    </div>
  );
}
