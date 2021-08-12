const ReadOnlyRow = ({item, handleEditClick, handleDeleteClick}) => {
  console.log(item);
  return (
    <tr>
      <td className="th-item">{item.id}</td>
      <td>{item.customerName}</td>

      <td className="td-center">
        {item.bagDeliveryAddress.streetAddress}.{" "}
        {item.bagDeliveryAddress.refference}
      </td>
      <td className="td-center">{item.bagItems.foodName}</td>
      <td className="td-center">{item.totalPrice}</td>
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
