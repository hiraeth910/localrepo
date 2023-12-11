import './watch.scss';

import { ArrowLeftOutlined } from "@ant-design/icons"
const Watch = () => {
  return (
    <div>
      <div className='back'>
        <ArrowLeftOutlined />
        Home
      </div>
      <video
        className='video'
        src='https://player.vimeo.com/progressive_redirect/playback/890325860/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=6e33e40e59a513bd46d4fb076dc7ec8e6477b78dbdaf7d0f1276bb035394dc0a'
        autoPlay={true}
        controls
      ></video>
    </div>
  )
}
export default Watch