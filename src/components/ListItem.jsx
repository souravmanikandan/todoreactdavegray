import LineItem from './LineItem'

const ListItem = ({ item, setItem, handleCheck, deleteItem }) => {
  return (
    <ul>
        {item.map(item => (
          <LineItem key={item.id} item={item} setItem={setItem} handleCheck={handleCheck} deleteItem={deleteItem} />
        ))}
        </ul>
  )
}

export default ListItem