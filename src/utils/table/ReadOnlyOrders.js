const ReadOnlyRow = ({item, handleEditClick, handleDeleteClick}) => {
  //Concatena os itens do pedido
  const bagItems = item.bagItems;
  console.log(bagItems);

  const concatenar = bagItems.reduce(
    (acumulador, item) =>
      (acumulador += " Qtd: " + item.quantity + " - " + item.foodName + "\n"),
    ""
  );
  console.log(concatenar);
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
          className="table-button-YN"
          onClick={(event) => handleEditClick(event, item)}
        >
          Sim
        </button>
        <button
          className="table-button-YN"
          onClick={() => handleDeleteClick(item.id)}
        >
          Não
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
