import classes from "../styles/VideoSkeleton.module.css";

function VideoLoadingSkeleton() {
  const skeleton = [];
  for (let index = 0; index < 1; index++) {
    skeleton.push(
      <div className={classes.video}>
        <div className={classes.imgskeleton}></div>
        <div className={classes.titleskeleton}></div>
        <div className={classes.qmeta}>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  return <div className={classes.containerSkeleton}>{skeleton}</div>;
}

export default VideoLoadingSkeleton;
