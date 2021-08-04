import React from "react";

const ReadOnlyRow = ({item, handleEditClick, handleDeleteClick}) => {
  return (
    <tr>
      <td className="td-item">{item.name}</td>
      <td>{item.description}</td>
      <td>{item.photoUrl}</td>
      <td className="td-center th-price">{item.price}</td>
      <td className="td-center">{item.preparationTime}</td>
      <td className="td-center">{item.foodCategoryName}</td>
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
