import React from "react";

const ReadOnlyRow = ({item, handleEditClick, handleDeleteClick}) => {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.discription}</td>

      <td className="tdNumber">{item.price}</td>
      <td className="tdNumber">{item.price}</td>
      <td className="tdNumber">{item.foodCategoryName}</td>
      <td>
        <button
          className="table-button-side"
          onClick={(event) => handleEditClick(event, item)}
        >
          Sim
        </button>
        <button
          className="table-button-side"
          onClick={() => handleDeleteClick(item.id)}
        >
          Não
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
