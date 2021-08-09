import React, {useState, Fragment} from "react";
import {nanoid} from "nanoid";
import "./table.scss";
import data from "../../../../utils/table/mock-data-order.json";
import ReadOnlyOrders from "../../../../utils/table/ReadOnlyOrders";
import EditableRow from "../../../../utils/table/EditableRow";
import {NavBarRestaurant} from "../../../../utils/navbar/restaurant-navbar/NavBarRestaurant";

export function InProgress() {
  const [items, setItems] = useState(data);
  const [addFormData, setAddFormData] = useState({
    id: "id",
    status: "status",
    streetAddress: "streetAddres  ",
    customerName: "customerName",
    paymentType: "paymentType",
    items: "items",
    price: "price",
  });

  const [editFormData, setEditFormData] = useState({
    id: "",
    status: "",
    customerName: "",
    streetAddress: "",
    paymentType: "",
    items: "",
    price: "",
  });

  const [editItemId, setEditItemId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {...editFormData};
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: nanoid(),
      name: addFormData.name,
      discription: addFormData.discription,
      photoUrl: addFormData.photoUrl,
      price: addFormData.price,
      preparationTime: addFormData.preparationTime,
      foodCategoryName: addFormData.foodCategoryName,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedItem = {
      id: editItemId,
      name: editFormData.name,
      discription: editFormData.discription,
      photoUrl: editFormData.photoUrl,
      price: editFormData.price,
      preparationTime: editFormData.preparationTime,
      foodCategoryName: editFormData.foodCategoryName,
    };

    const newItems = [...items];
    const index = items.findIndex((item) => item.id === editItemId);

    newItems[index] = editedItem;

    setItems(newItems);
    setEditItemId(null);
  };

  const handleEditClick = (event, item) => {
    event.preventDefault();
    setEditItemId(item.id);

    const formValues = {
      name: item.name,
      discription: item.discription,
      photoUrl: item.photoUrl,
      price: item.price,
      preparationTime: item.preparationTime,
      foodCategoryName: item.foodCategoryName,
      streetAddress: item.streetAddress,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditItemId(null);
  };

  const handleDeleteClick = (itemId) => {
    const newItems = [...items, itemId];

    const index = items.findIndex((item) => item.id === itemId);
    newItems.splice(index, 1);

    setItems(newItems);
  };
  //name: addFormData.name,
  //discription: addFormData.discription,
  //photoUrl: addFormData.photoUrl,
  //price: addFormData.price,
  //preparationTime: addFormData.preparationTime,
  //foodCategoryName: addFormData.foodCategoryName,

  return (
    <>
      <div className="table-container">
        <h2>Em andamento</h2>

        <form className="form-table" onSubmit={handleEditFormSubmit}>
          <table className="menu-table">
            <thead>
              <tr>
                <th className="td-Num-Order">Nº Pedido</th>
                <th className="td-client-name">Cliente</th>
                <th className="td-client-address">Endereço</th>
                <th className="td-itens">Itens do pedido</th>
                <th className="td-price">Valor Total</th>
                <th className="td-payment">Pagamento</th>
                <th className="td-status">Status do pedido</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <Fragment>
                  <ReadOnlyOrders
                    item={item}
                    handleDeleteClick={handleDeleteClick}
                  />
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
}
