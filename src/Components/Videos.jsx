import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";
import VideoLoadingSkeleton from "./VideoLoadingSkeleton";
function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  return (
    <div>
      {/* <VideoLoadingSkeleton /> */}
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          next={() => setPage(page + 8)}
          loader={<VideoLoadingSkeleton />}
        >
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link to="quiz" key={video.youtubeID}>
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                ></Video>
              </Link>
            ) : (
              <Link to="" key={video.youtubeID}>
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                ></Video>
              </Link>
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div>No data found</div>}
      {error && <div>There was an error</div>}
      {loading && (
        <div>
          <VideoLoadingSkeleton></VideoLoadingSkeleton>
        </div>
      )}
    </div>
  );
}

export default Videos;
