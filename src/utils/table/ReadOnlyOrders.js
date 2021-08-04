import React from "react";

const ReadOnlyRow = ({item, handleEditClick, handleDeleteClick}) => {
  return (
    <tr>
      <td className="th-item">{item.id}</td>
      <td>{item.customerName}</td>

      <td className="tdNumber">{item.items}</td>
      <td className="tdNumber">{item.price}</td>
      <td className="tdNumber">{item.paymentType}</td>
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
