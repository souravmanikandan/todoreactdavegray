import { FaTrashCan } from "react-icons/fa6";

const LineItem = ({ item, setItem, handleCheck, deleteItem }) => {
  return (
    <li
      key={item.id}
      className="flex bg-slate-200 mt-2 mb-2 justify-between p-3"
    >
      <div className="flex">
        <label htmlFor={item.id} className="absolute -left-full">
          Scales
        </label>
        <input
          type="checkbox"
          id={item.id}
          name={item.id}
          checked={item.checked}
          className="w-7 h-7 mr-1"
          onChange={() => handleCheck(item.id)}
        />
        <p>{item.item}</p>
      </div>
      <FaTrashCan
        role="button"
        className="bg-red-600 text-white w-7 h-7 p-2"
        onClick={() => deleteItem(item.id)}
      />
    </li>
  );
};

export default LineItem;
