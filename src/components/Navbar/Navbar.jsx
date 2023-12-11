import { useState } from "react"
import "./navbar.scss"
  import { SearchOutlined,BellFilled ,CaretDownOutlined ,LogoutOutlined ,SettingOutlined } from "@ant-design/icons"
const Navbar = () => {
  const [issc,setissc] = useState(false)
  window.onscroll=()=>{
    setissc(window.scrollY ===0?false:true);
    return ()=>(window.onscroll=null)
  }
  return (
    <div className={issc ? "navbar scrolled" : "navbar"}>
      <div className='container'>
        <div className='left'>
          <img
            style={{ height: "70px" }}
            src='https://www.freepnglogos.com/uploads/netflix-logo-history-png-33.png'
            alt=''
          />
          <div className='contents'>
            <span className='items'>Home</span>
            <span className='items'>Series</span>
            <span className='items'>Movies</span>
            <span className='items'>New and Popular</span>
            <span className='items'>Mylist</span>
          </div>
        </div>
        <div className='right'>
          <SearchOutlined />
          <span className='items'>Kids</span>

          <BellFilled />
          <img
            style={{
              height: "30px",
              borderRadius: "26px",
              marginLeft: "10px",
              marginRight: "10px",
              cursor: "pointer",
            }}
            src='data:image/jpeg;base64,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'
            alt=''
          />
          <div className='sett'>
            <div id='dd'>
              <CaretDownOutlined />
            </div>
            <div className='options'>
              <span className='a'>
                <SettingOutlined />
              </span>
              <span className='a'>
                <LogoutOutlined />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar