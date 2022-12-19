import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import YouTube from "react-youtube";

const Trailer = ({ item }) => {
  const [show, setShow] = useState(false);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const _onReady = (event) => {
    event.target.pauseVideo();
  };

  //{item.results[0].key} - 무조건 첫번째 유투브를 보여줌
  //"Official Trailer" 가 있을때

  const official =
    item &&
    item.results.find((item) => {
      return item.name === "Official Trailer";
    });

  return (
    <div>
      <p className="trailer-btn" onClick={() => setShow(true)}>
        {" "}
        🎥 Watch Trailer
      </p>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w modalContainer"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <YouTube
            videoId={official?.key && item.result[0].key}
            opts={opts}
            onReady={_onReady}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Trailer;
