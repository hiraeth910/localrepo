import { useState } from "react";
import "./listitem.scss";
import {
  PlusOutlined,
  DislikeFilled,
  LikeFilled,
  CaretRightOutlined,
} from "@ant-design/icons"
const Listitem = ({index}) => {
  const [hov,sethov] = useState(false);
  const trailer = "./spman.mp4"
  return (
    <div className='listitem' onMouseEnter={()=>sethov(true)} onMouseLeave={()=>sethov(false)}
    style={{left:hov&& index*227.8}}>
      <img src='https://images8.alphacoders.com/121/1218962.jpg' alt='' />
      {hov && (
        <>
      <video src={trailer} autoPlay={true} loop></video>
      <div className='iteminfo'>
        <div className='icons'>
          <CaretRightOutlined className="icon"/>
          <PlusOutlined className="icon"/>
          <LikeFilled className="icon"/>
          <DislikeFilled className="icon"/>
        </div>
        <div className="it">
          <span>90min</span>
          <span style={{
        border: "0.8px solid grey",
        margin: "0 10px"
    }}>+12</span>
          <span>1942</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, at sit fugit reru.
        </div>
        <div className="genre">Action</div>
      </div>
      </>)}
    </div>
  )
}
export default Listitem