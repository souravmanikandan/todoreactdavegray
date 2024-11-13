import React, {useRef} from 'react'
import { FaPlus } from "react-icons/fa6";

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
    const inputRef = useRef();
  return (
    <form className='flex m-1' onSubmit={handleSubmit}>
        <input 
            type="text" 
            ref={inputRef}
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            className='border border-slate-600 flex-1 p-1 mr-2'
        />
        <button 
            type='submit' 
            className='border border-black p-2 hover:bg-green-600'
            onClick={() => inputRef.current.focus()}
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem