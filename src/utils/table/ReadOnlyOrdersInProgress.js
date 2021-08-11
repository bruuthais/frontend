import React from "react";

const ReadOnlyOrdersInProgress = ({
  item,
  handleEditClick,
  handleDeleteClick,
}) => {
  return (
    <tr>
      <td className="th-item">{item.id}</td>
      <td>{item.customerName}</td>

      <td className="td-center">{item.streetAddress}</td>
      <td className="td-center">{item.items}</td>
      <td className="td-center">{item.price}</td>
      <td className="td-center">{item.paymentType}</td>
      <td>
        <button
          className="table-button-end"
          onClick={(event) => handleEditClick(event, item)}
        >
          Enviar
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyOrdersInProgress;
