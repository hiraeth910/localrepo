import "./list.scss"
import { LeftOutlined ,
        RightOutlined  } from "@ant-design/icons"
import Listitem from "../listitem/Listitem"
import { useRef,useState } from "react"
const List = () => {
    const listRef = useRef()
    const [slider,setSlider] = useState(0)
    const [ism,setIsm] = useState(false)
    const handleclick=(k)=>{
        setIsm(true)
        let distance = listRef.current.getBoundingClientRect().x-50
        if(k==="left" && slider>0){
            setSlider(slider-1);
            listRef.current.style.transform = `translateX(${230+distance}px)`
        }
        if (k === "right" && slider<6) {
          setSlider(slider+1);
          listRef.current.style.transform = `translateX(${-230 + distance}px)`
          
        }
    }
  return (
    <div className='list'>
      <span className='listTitle'>Continue watching</span>
      <div className='wrapper'>
        <div className='slider left' onClick={() => handleclick("left")}
        style={{display:!ism && "none"}}>
          <LeftOutlined />
        </div>
        <div className='container' ref={listRef}>
          <Listitem index={0}/>
          <Listitem index={1}/>
          <Listitem index={2}/>
          <Listitem index={3}/>
          <Listitem index={4}/>
          <Listitem index={5}/>
          <Listitem index={6}/>
          <Listitem index={7}/>
          <Listitem index={8}/>
          <Listitem index={9}/>
          <Listitem index={10}/>
          <Listitem index={11}/>
          <Listitem index={12}/>
          <Listitem index={13}/>
          <Listitem index={14}/>
        </div>
        <div className='slider right' onClick={() => handleclick("right")}>
          <RightOutlined />
        </div>
      </div>
    </div>
  )
}
export default List