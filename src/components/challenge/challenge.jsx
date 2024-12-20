import { useState, useEffect } from "react";
import challenges from "../../constants/challenge.json";
import { useTheme } from "../../context/ThemeContext";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import HelperButton from "../rehusables/helperButton";
import SettingsShorcuts from "../settings/SettingsShorcuts";
import {FaEyeSlash, FaEye} from 'react-icons/fa';

export default function ChallengeComponent() {
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [userCode, setUserCode] = useState(challenges[currentChallengeIndex].template);
  const [feedback, setFeedback] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [points, setPoints] = useState(0);
  const { theme } = useTheme()
  const currentChallenge = challenges[currentChallengeIndex];


  const handleSubmit = () => {
    try {
      const userFunction = new Function(`${userCode}\nreturn main;`)();
      const result = Array.isArray(currentChallenge.expectedResult)
        ? JSON.stringify(userFunction())
        : userFunction();

      if (result === JSON.stringify(currentChallenge.expectedResult) || 
          result === currentChallenge.expectedResult 
        ) {
        setFeedback("Success! Your solution is correct.");
        setPoints(prev => prev + 1)

      } else {
        setFeedback(`Failed. Expected: ${JSON.stringify(currentChallenge.expectedResult)}, but got: ${result}.`);
      }
    } catch (error) {
      setFeedback(`Error: ${error.message}`);
    }
  };

  const handleRun = (value) => {
    try {
      const userFunction = new Function(`${value}\nreturn main;`)();

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
      setCurrentChallengeIndex(prev => prev + 1);
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
    setShowHint(prev => !prev);
  };

  const handleKeyDown = (event) => {
    if (event.ctrlKey) {
      // Check for keys pressed with Ctrl
      switch (event.key.toLowerCase()) { // Use toLowerCase for case-insensitivity
        case "arrowleft":
          handlePreviousChallenge();
          break;
        case "arrowright":
          handleNextChallenge();
          break;
        case "q":
          handleSubmit();
          break;
        case "h":
          event.preventDefault();
          handleHintToggle();
          break;
        default:
          break;
      }
    }
  };

  // Add event listener once when the component mounts
  useEffect(() => {
    const listener = (event) => handleKeyDown(event); // Ensure proper function reference
    window.addEventListener("keydown", listener);
    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, [currentChallengeIndex, userCode]); // Empty dependency array ensures this runs only once

 

  return (
<div className="px-6 max-w-screen-md md:max-w-screen-lg mx-auto">
    <div 
        className="p-4 rounded shadow-md mb-4"
        style={{
          backgroundColor: theme.secondaryBg,
        }}
      >
        <div className="flex gap-3">
        {/* <button
          onClick={handlePreviousChallenge}
          className={`bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 ${
            currentChallengeIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentChallengeIndex === 0}
        >
          {'<'}
        </button> */}
        <h2 className="text-2xl font-semibold mb-2">Challenge {currentChallenge.id}</h2>
        <button
          onClick={handleNextChallenge}
          className={` px-4 py-2 rounded hover:bg-green-600 ${
            currentChallengeIndex >= challenges.length - 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentChallengeIndex >= challenges.length - 1}
          style={{
            backgroundColor: theme.btnColor,
          }}
        >
         {'>'}
        </button>
        </div>
        <p className="mb-1"><strong>Type:</strong> {currentChallenge.type}</p>
        <p className="mb-1"><strong>Method:</strong> {currentChallenge.method} - {currentChallenge.function}</p>
        <h4 className="font-semibold  mb-2">Instructions: </h4>
        <p className="mb-2">{currentChallenge.instruction}</p>
        <button
          onClick={handleHintToggle}
          className="px-3 py-1 rounded "
          style={{
            backgroundColor: theme.btnAlertColor,
          }}
        >
          {showHint ? (
            <>
              <FaEyeSlash className="inline-block"/> Hide
            </>
          ) : (
            <>
              <FaEye className="inline-block" /> Hint
            </>
          )}
        </button>
      </div>
      
      {showHint && (
        <div 
          className="p-4 rounded shadow-md mb-4"
          style={{
            backgroundColor: theme.btnAlertColor,
          }}
        >
          <h3 className="text-xl font-semibold mb-2">Hint</h3>
          <p className="">{currentChallenge.hint}</p>
        </div>
      )}
      
      <div className="">
      {/* Layout Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        style={{
          backgroundColor: theme.secondaryBg,
          
        }}
      >
        {/* Code Editor Section */}
        <div className="lg:col-span-2 rounded shadow-md p-4"
        >
          <h2 className="text-lg font-semibold mb-2 ">
            Code Editor 
            <HelperButton label="" className="ml-2 my-4">
              <SettingsShorcuts />
            </HelperButton>
            <div className="flex space-x-4 justify-between items-center">
              Points: {points}
              <div className="flex space-x-4">
              <button
                onClick={()=>handleSubmit()}
                className="text-sm px-3 py-1 rounded hover:bg-blue-600"
                style={{
                  backgroundColor: theme.btnColor,
                }}
              >
                Submit
              </button>
              </div>
            </div>
          </h2>
          <CodeMirror
            value={userCode}
            height="150px"
            theme={theme.currentTheme === "dark" || "custom" ? oneDark : "light"}
            extensions={[javascript()]}
            onChange={(value) => {
              setUserCode(value); // Update state
              handleRun(value); // Pass the latest value directly
            }}
            options={{
              lineNumbers: true,
              indentWithTabs: true,
              tabSize: 2,
            }}
          />
        </div>

        {/* Feedback Section */}
        <div className=" rounded shadow-md p-4"
          style={{
            backgroundColor: theme.secondaryBg,
          }}
        >
          <h2 className="text-lg font-semibold mb-2 ">
            Output
          </h2>
          <div className="flex flex-col rounded p-4"
            style={{
              backgroundColor: theme.background,
            }}
          >
            <p className="text-xs font-bold  mb-2">
              Result:
            </p>
            <p className="text-lg ">
                {feedback}
            </p>
          </div>
        </div>
      </div>
    </div>

      
    </div>
  );
}
