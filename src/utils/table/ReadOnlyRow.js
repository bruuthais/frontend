import React from "react";

const ReadOnlyRow = ({item, handleEditClick, handleDeleteClick}) => {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.discription}</td>
      <td>{item.photoUrl}</td>
      <td className="tdNumber">{item.price}</td>
      <td className="tdNumber">{item.preparationTime}</td>
      <td className="tdNumber">{item.foodCategoryName}</td>
      <td>
        <button
          className="table-button-side"
          onClick={(event) => handleEditClick(event, item)}
        >
          Editar
        </button>
        <button
          className="table-button-side"
          onClick={() => handleDeleteClick(item.id)}
        >
          Deletar
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
