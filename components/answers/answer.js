import { useEffect, useState } from "react";

import AnswerList from "./answer-list";
import classes from "./answer.module.css";

function Answer(props) {
  const { postid } = props;
  //console.log(postid);
  const [showResponse, setShowResponse] = useState(false);
  const [response, setresponse] = useState([]);

  useEffect(() => {
    if (showResponse) {
      fetch("/api/answers/" + postid)
        .then((response) => response.json())
        .then((data) => setresponse(data.responses));
    }
  }, [showResponse]);

  function toggleResponseHandler() {
    setShowResponse((prevStatus) => !prevStatus);
  }

  return (
    <section className={classes.responses}>
      <div className={classes.btndiv}>
        <button onClick={toggleResponseHandler} className={classes.button52}>
          {showResponse ? "Hide" : "Show"} Response
        </button>
      </div>

      {showResponse && <AnswerList ansitems={response} />}
    </section>
  );
}

export default Answer;
