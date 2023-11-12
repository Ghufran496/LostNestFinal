import { useEffect, useState } from "react";

import AnswerList from "./answer-list";
import classes from "./answer.module.css";

function Answer(props) {
  const { postid } = props;
  //console.log(postid);
  const [showResponse, setShowResponse] = useState(false);
  const [showLoadingContent, setLoadingContent] = useState(false);
  const [response, setresponse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (showResponse) {
        setLoadingContent(true);
        try {
          const response = await fetch("/api/answers/" + postid);
          const data = await response.json();
          setresponse(data.responses);
        } catch (error) {
          console.error("Error fetching data:", error);
          // Handle errors as needed
        } finally {
          setLoadingContent(false);
        }
      }
    };

    // Only fetch data if showResponse is true and responses are not already available
    if (showResponse && response.length === 0) {
      fetchData();
    }
  }, [showResponse, postid, setresponse, setLoadingContent]);

  function toggleResponseHandler() {
    setShowResponse((prevStatus) => !prevStatus);
  }

  return (
    <section className={classes.responses}>
      <div className={classes.btndiv}>
        <button onClick={toggleResponseHandler} className={classes.button52}>
          {showResponse ? "Hide" : "Show"} Responses
        </button>
      </div>
      {showLoadingContent && (
        <p
          style={{
            marginBottom: "1rem",
            color: "red",
            fontSize: "2rem",
            textTransform: "capitalize",
          }}
        >
          No responses yet!
        </p>
      )}
      {response.length === 0 && !showLoadingContent && (
        <p
          style={{
            marginBottom: "1rem",
            color: "red",
            fontSize: "2rem",
            textTransform: "capitalize",
          }}
        >
          NoOne has responded yet!
        </p>
      )}
      {showResponse && <AnswerList ansitems={response} />}
    </section>
  );
}

export default Answer;

// useEffect(() => {
//   const fetchData = async () => {
//     if (showResponse) {
//       setLoadingContent(true);
//       try {
//         const response = await fetch("/api/answers/" + postid);
//         const data = await response.json();
//         setresponse(data.responses);
//         if (data.responses) {
//           setLoadingContent(false);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         // Handle errors as needed
//         setLoadingContent(false);
//       }
//     }

//     setLoadingContent(false);
//   };

//   fetchData();
//   //setLoadingContent(false);
// }, [showResponse, postid, setresponse, setLoadingContent]);

// useEffect(() => {
//   //setLoadingContent(true);
//   if (showResponse) {
//     fetch("/api/answers/" + postid)
//       .then((response) => response.json())
//       .then((data) => setresponse(data.responses));
//   }
//   setLoadingContent(false);
// }, [showResponse, setLoadingContent]);
