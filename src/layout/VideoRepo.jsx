import SaveToAccountBanner from "../pages/videoRepo/SaveToAccountBanner"
import VideoContent from "../pages/videoRepo/VideoContent"
import Footer from "../shared/Footer"
import Navbar from "../shared/Navbar"
import { useEffect, useState } from "react"

const VideoRepo = () => {
  const [lastObject, setLastObject] = useState({});
  const apiUrl = 'https://hng-stage2-backend.vercel.app/api/videos';

  useEffect(() => {
    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Check if data is not empty
        if (data.length > 0) {
          // Get the last object from the array
          const lastItem = data[data.length - 1];
          setLastObject(lastItem);
        } else {
          alert('API response is empty');
        }
      })
      .catch((error) => {
        alert('There was a problem fetching data:', error);
      });
  }, []); // Empty dependency array ensures this effect runs once when the component is mounted

  return (
    <div>
      <Navbar />
      <VideoContent lastObject={lastObject}/>
      <SaveToAccountBanner />
      <Footer />
    </div>
  )
}

export default VideoRepo
