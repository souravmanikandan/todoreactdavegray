
import ListItem from "./ListItem";

const Content = ({ item, setItem, handleCheck, deleteItem }) => {
  return (
    <main className='flex-grow w-11/12 self-center'>
      {item.length ? (
        <ListItem item={item} setItem={setItem} handleCheck={handleCheck} deleteItem={deleteItem} />
      ) : (
        <p>No item found</p>
      )}
    </main>
  )
}

export default Content