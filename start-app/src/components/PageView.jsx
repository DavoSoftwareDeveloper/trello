
import '../styles/PageView.css'
import {IoMdAdd} from 'react-icons/io'
import {MdFormatQuote, MdAddTask, MdOutlineAddPhotoAlternate, MdAudiotrack} from 'react-icons/md'
import {BiText} from 'react-icons/bi'
import { useRef, useState } from 'react'


function PageView({title}) {

    const [toggleMenu, setToggleMenu] = useState(false)
    const ref = useRef()
  
    const handleMenu = () => {
      setToggleMenu(toggle => !toggle)
      toggleMenu ? ref.current.className = "navbar2" : ref.current.className = "navbar"
    }
    const handleAdd = (e) => {
        e.preventDefault()
        let BlockType = e.target.__reactProps$upud89xsyq8.name
                        // he tenido que añadir propiedad de css para que funcione bien con svg's
            //switch

      }
  
  return (
    <div className="PageView">
      <div ref={ref} className="navbar">
        <IoMdAdd className='button-nav' onClick={handleMenu}/>

        <MdFormatQuote name="quote" onClick={handleAdd}/>
        <MdOutlineAddPhotoAlternate name="photo" onClick={handleAdd}/>
        <BiText name="text" onClick={handleAdd}/>
        <MdAudiotrack name="audio" onClick={handleAdd}/>
        <MdAddTask name="task" onClick={handleAdd}/>
      </div>
      { title && <h1 className='title'>{title}</h1>}
      <div className='trello'>

      </div>
    </div>
  )
}

export default PageView
