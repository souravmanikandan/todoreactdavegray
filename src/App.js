import { useState } from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('listItems')))
  const [newItem, setNewItem] = useState("")
  const [search, setSearch] = useState("")

  const addItem = (item) => {
    const id = items.length > 0 ? items[items.length - 1].id +1 : 1;
    const newItem = {id, checked: false, item}
    const listItems = [...items, newItem]
    setItems(listItems);
    localStorage.setItem("listItems", JSON.stringify(listItems));
  }

  const hcandleClick = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("listItems", JSON.stringify(listItems));
  };
  const handleDelete = (id) => {
    const listItems = items.filter(item => item.id != id )
    setItems(listItems);
    localStorage.setItem("listItems", JSON.stringify(listItems));
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(newItem)
    setNewItem("")
  }

  const headerTitle = "Todo List";
  return (
    <div className='min-h-dvh'>
    <Header headerTitle={headerTitle} />
    <AddItem 
      newItem={newItem} 
      setNewItem={setNewItem} 
      handleSubmit={handleSubmit} 
    />
    <SearchItem 
      search={search}
      setSearch={setSearch}
    />
    <Content 
      items={items} 
      setItems={setItems}
      hcandleClick={hcandleClick}
      handleDelete={handleDelete}
    />
    <Footer items={items} />
    </div>
  );
}

export default App;
