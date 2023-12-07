import "./featured.scss"
import {
  InfoCircleOutlined,
  CaretRightOutlined 
} from "@ant-design/icons"
const Featured = () => {
  return (
    <div className='featured'>
      <img
        style={{
          width: "100%",
          height: "100%",
        }}
        src='data:image/jpeg;base64,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'
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
          <button className='more' style={{backgroundColor:"grey" ,color:" aliceblue"}}>
            
              <InfoCircleOutlined />
            
            <span>more</span>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Featured