import {AiOutlinePlusCircle,AiOutlineCloseCircle,AiOutlineEdit} from 'react-icons/ai'
import {BiComment} from 'react-icons/bi'
import Image from 'next/image'

function Card({text, id, list, setDragged}) {

  const handleDragStart = (event) =>{
    setDragged({
    data: {text, id},
    list: event.target.closest('[data-list').dataset.list

    })
  }


  return (
    <div draggable onDragStart={handleDragStart} className='bg-slate-100 text-slate-900 rounded-md p-3 flex flex-col gap-4 hover: cursor-move'>
     <div className='flex justify-between'>
        <div className='flex flex-col gap-2'>
        <p className='font-bold'>{text}</p>
     <p className='text-gray-600'>{id?.substring(0,10)}</p>
        </div>
     <AiOutlineEdit className='w-8 h-8'/>
     </div>
     <div className='flex justify-between'>
      <BiComment className='w-7 h-7'/>
      <Image src='/assets/perfil.jpg' alt='avatar' width={32} height={32} className='rounded-full border-black border-[0.5px]' />
      </div>
    </div>
  )
}

export default Card
