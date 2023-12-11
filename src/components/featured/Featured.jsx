import "./featured.scss"
import {
  InfoCircleOutlined,
  CaretRightOutlined 
} from "@ant-design/icons"
const Featured = ({type}) => {
  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name='genre' id='genre'>
            <option>Genre</option>
            <option value='adventure'>Adventure</option>
            <option value='comedy'>Comedy</option>
            <option value='crime'>Crime</option>
            <option value='drama'>Drama</option>
            <option value='fantasy'>Fantasy</option>
            <option value='horror'>Horror</option>
            <option value='scifi'>Sci-fi</option>
            <option value='romance'>Romance</option>
            <option value='thriller'>Thriller</option>
          </select>
        </div>
      )}
      <img
        style={{
          width: "100%",
          height: "100%",
        }}
        src='https://images.alphacoders.com/120/1200682.jpg'
        alt=''
      />
      <div className='info'>
        <img
          src='https://cdn.freebiesupply.com/logos/thumbs/2x/the-matrix-logo.png'
          alt=''
        />
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </span>
        <div className='buttons'>
          <button className='play'>
            <CaretRightOutlined />
            <span>play</span>
          </button>
          <button
            className='more'
            style={{ backgroundColor: "grey", color: " aliceblue" }}
          >
            <InfoCircleOutlined />

            <span>more</span>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Featured