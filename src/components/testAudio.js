import React from "react";
import sample1 from "../Audio/128n 6 2 V3.wav";
import sample2 from "../Audio/64 8 V1.wav";
import sample3 from "../Audio/64 6 V1.wav";
import sample4 from "../Audio/128 4 V1.wav";
import sample5 from "../Audio/64 4.wav";

class TestAudio extends React.Component {
  render() {
    return (
      <div>
        <body>
          <h1>The audio element</h1>

          <p>Click on the play button to play a sound:</p>

          <audio controlsList="nodownload" controls>
            <source src={sample1} type="audio/mpeg" />
          </audio>
          <audio controlsList="nodownload" controls>
            <source src={sample2} type="audio/mpeg" />
          </audio>
          <audio controlsList="nodownload" controls>
            <source src={sample3} type="audio/mpeg" />
          </audio>
          <audio controlsList="nodownload" controls>
            <source src={sample4} type="audio/mpeg" />
          </audio>
          <audio controlsList="nodownload" controls>
            <source src={sample5} type="audio/mpeg" />
          </audio>
        </body>
      </div>
    );
  }
}

export default TestAudio;
