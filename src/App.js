import React, { useState } from 'react'
import Header from './components/Header'
import AddItem from './components/AddItem'
import SearchItem from './components/SearchItem'
import Content from './components/Content'
import Footer from './components/Footer'

const App = () => {
  const [item, setItem] = useState([
    { id: 1, checked: false, item: "Milk" },
    { id: 2, checked: false, item: "Bread" },
    { id: 3, checked: false, item: "Eggs" },
    { id: 4, checked: false, item: "Apples" },
    { id: 5, checked: false, item: "Rice" }
  ])
  const [newItem, setNewItem] = useState('')
  const [searchItem, setSearchItem] = useState('')

  const addItem = (e) => {
    e.preventDefault();
    item.push({ id:item.length + 1, checked:false, item:newItem})
    setNewItem('')
  }

  const handleCheck =(id) => {
    const updatedItems = item.map(item => item.id === id ? {...item , checked: !item.checked} : item)
    setItem(updatedItems)
  }

  const deleteItem = (id) => {
    const updatedItem = item.filter(item => item.id !== id)
    setItem(updatedItem)
  }
    console.log(searchItem)
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <AddItem newItem={newItem} setNewItem={setNewItem} addItem={addItem} />
      <SearchItem searchItem={searchItem} setSearchItem={setSearchItem} />
      <Content 
        item={item.filter(item => item.item.toLowerCase().includes(searchItem.toLowerCase()))} 
        setItem={setItem} 
        handleCheck={handleCheck} 
        deleteItem={deleteItem} 
      />
      <Footer length={item.length} />
    </div>
  )
}

export default App