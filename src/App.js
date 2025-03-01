import { useEffect, useState } from "react";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  const [item, setItem] = useState(
    JSON.parse(localStorage.getItem("shoppingList")) || []
  );
  const [newItem, setNewItem] = useState("");
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(item));
  }, [item]);

  const addItem = (e) => {
    e.preventDefault();
    const id = item.length ? item[item.length - 1].id + 1 : 1;
    const currentItem = { id, checked: false, item: newItem };
    const listItem = [...item, currentItem];
    setItem(listItem);
    setNewItem("");
  };

  const handleCheck = (id) => {
    const updatedItems = item.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItem(updatedItems);
  };

  const deleteItem = (id) => {
    const updatedItem = item.filter((item) => item.id !== id);
    setItem(updatedItem);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AddItem newItem={newItem} setNewItem={setNewItem} addItem={addItem} />
      <SearchItem searchItem={searchItem} setSearchItem={setSearchItem} />
      <Content
        item={item.filter((item) =>
          item.item.toLowerCase().includes(searchItem.toLowerCase())
        )}
        setItem={setItem}
        handleCheck={handleCheck}
        deleteItem={deleteItem}
      />
      <Footer length={item.length} />
    </div>
  );
};

export default App;
