import React from "react";
import { FaTrashCan } from "react-icons/fa6";

const Content = ({ items, setItems, hcandleClick, handleDelete }) => {
  return (
    <main>
      {items.length
        ?
        (<ul>
         {items.map((item) => {
            return (
              <li className="flex text-center center items-center justify-between p-2 m-1 bg-stone-200" key={item.id}>
                  <div className="flex items-center">
                  <input
                    type="checkbox"
                    onChange={() => hcandleClick(item.id)}
                    checked={item.checked}
                    id="item"
                    className="w-7 h-7 accent-blue-600"
                  />
                  <label 
                    htmlFor="item" 
                    onDoubleClick={() => hcandleClick(item.id)}
                    className={`mx-1 ${item.checked ? "line-through" : ""}`} 
                  >
                    {item.item}
                  </label>
                  </div>
                <FaTrashCan className="text-blue-700 hover:text-red-500 cursor-pointer" onClick={() => handleDelete(item.id)} />
              </li>
            );
          })}
          </ul>)
        : <p className="text-center mt-5">there are no items</p>}
    </main>
  );
};

export default Content;
