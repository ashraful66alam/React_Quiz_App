import classes from "../styles/Video.module.css";
// eslint-disable-next-line react/prop-types
function Video({ title, id, noq }) {
  return (
    // <a href="quiz.html">
    <div className={classes.video}>
      <img
        src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} Questions</p>
        <p>Total points : {noq * 5}</p>
      </div>
    </div>
    // </a>
  );
}

export default Video;
