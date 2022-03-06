import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // setSelectedVideo(response.data.items[0]);

  // const onVideoSelect = (video) => {
  //   setSelectedVideo(video);
  // };

  const [videos, search] = useVideos("forest");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
// class App extends React.Component {
// state = { videos: [], selectedVideo: null };

// componentDidMount() {
//   this.onTermSubmit("touareg v10");
// }

// onTermSubmit = async (term) => {
//   // console.log(term);
//   const response = await youtube.get("/search", {
//     params: {
//       q: term,
//     },
//   });
//   // console.log(response);
//   this.setState({
//     videos: response.data.items,
//     selectedVideo: response.data.items[0],
//   });
// };

// onVideoSelect = (video) => {
//   // console.log("from the app", video);
//   this.setState({ selectedVideo: video });
// };

// render() {
//   return (
//     <div className="ui container">
//       <SearchBar onFormSubmit={this.onTermSubmit} />
//       <div className="ui grid">
//         <div className="ui row">
//           <div className="eleven wide column">
//             <VideoDetail video={this.state.selectedVideo} />
//           </div>
//           <div className="five wide column">
//             <VideoList
//               onVideoSelect={this.onVideoSelect}
//               videos={this.state.videos}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// }
// export default App;
