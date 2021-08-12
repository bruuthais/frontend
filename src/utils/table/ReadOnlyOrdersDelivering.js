import React from "react";

const ReadOnlyOrdersDelivering = ({
  item,
  handleEditClick,
  handleDeleteClick,
}) => {
  const bagItems = item.bagItems;
  console.log(bagItems);

  const concatenar = bagItems.reduce(
    (acumulador, item) =>
      (acumulador += " Qtd: " + item.quantity + " - " + item.foodName + "\n"),
    ""
  );
  return (
    <tr>
      <td className="td-center">{item.id}</td>
      <td className="td-tr-address ">{item.customerName}</td>
      <td className="td-tr-address">
        {item.bagDeliveryAddress.streetAddress}.{" "}
        <tr>{item.bagDeliveryAddress.refference}</tr>
      </td>
      <td className="td-center">{concatenar}</td>
      <td className="td-center">R$ {item.totalPrice}</td>
      <td className="td-center">{item.paymentTypeName}</td>
      <td>
        <button
          className="table-button-end"
          onClick={(event) => handleEditClick(event, item)}
        >
          Finalizar
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyOrdersDelivering;
