const ReadOnlyRow = ({item, handleBagCancel, handleBagNext}) => {
  //Pega os itens das sacolas
  const bagItems = item.bagItems;

  //concatena os itens
  const teste = bagItems.map((item) => {
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
        <div>{teste}</div>
      </td>
      <td className="td-center">R$ {item.totalPrice}</td>
      <td className="td-center">{item.paymentTypeName}</td>
      <td>
        <button
          className="table-button-YN"
          onClick={() => handleBagNext(item.id)}
        >
          Sim
        </button>
        <button
          className="table-button-YN"
          onClick={() => handleBagCancel(item.id)}
        >
          Não
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
