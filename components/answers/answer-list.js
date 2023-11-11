import classes from "./answerlist.module.css";

function AnswerList(props) {
  const { ansitems } = props;

  return (
    <ul className={classes.response}>
      {ansitems.map((item) => (
        <li key={item._id}>
          <p>{item.Answer}</p>
          <div>By {item.PosterID}</div>
        </li>
      ))}
    </ul>
  );
}

export default AnswerList;
