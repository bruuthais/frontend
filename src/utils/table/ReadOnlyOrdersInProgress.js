import React from "react";

const ReadOnlyOrdersInProgress = ({item, handleBagNext}) => {
  //pega os itens da sacola
  const bagItems = item.bagItems;
  //concatena os itens
  const items = bagItems.map((item) => {
    return (
      <span>
        {`Qtd: ${item.quantity} - ${item.foodName}`} <br />
      </span>
    );
  });
  return (
    <tr>
      <td className="td-center">{item.id}</td>
      <td className="td-tr-address ">{item.customerName}</td>
      <td className="td-tr-address">
        {item.bagDeliveryAddress.streetAddress}
        <br />
        {item.bagDeliveryAddress.refference}
      </td>
      <td className="td-tr-address">
        <div>{items}</div>
      </td>
      <td className="td-center">R$ {item.totalPrice}</td>
      <td className="td-center">{item.paymentTypeName}</td>
      <td>
        <button
          className="table-button-end"
          onClick={() => handleBagNext(item.id)}
        >
          Enviar
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyOrdersInProgress;
