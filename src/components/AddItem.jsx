import { useRef } from "react"

const AddItem = ({ newItem, setNewItem, addItem }) => {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  }
  return (
    <form className='flex gap-1 w-11/12 self-center m-1' onSubmit={addItem}>
        <label htmlFor="item" className='absolute -left-full '>Item</label>
        <input 
          ref={inputRef}
          type="text" 
          id='item' 
          name='item' 
          className='border w-full p-1 border-black' 
          placeholder='addItem'
          value={newItem} 
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
        onClick={handleClick}
          type='submit' 
          className="w-10 aspect-square border border-black bg-green-600 flex items-center justify-center text-white text-3xl font-bold"
        >
          +
        </button>
    </form>
  )
}

export default AddItem