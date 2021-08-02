import React, {useState, Fragment} from "react";
import {nanoid} from "nanoid";
import "./table.scss";
import data from "../../utils/table/mock-data.json";
import ReadOnlyRow from "../../utils/table/ReadOnlyRow";
import EditableRow from "../../utils/table/EditableRow";

export function MenuTable() {
  const [items, setItems] = useState(data);
  const [addFormData, setAddFormData] = useState({
    name: "",
    discription: "",
    photoUrl: "",
    price: "",
    preparationTime: "",
    foodCategoryName: "",
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    discription: "",
    photoUrl: "",
    price: "",
    preparationTime: "",
    foodCategoryName: "",
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
    <div className="table-container">
      <h2>Adicionar item</h2>
      <form
        className="form-table form-add-item-table"
        onSubmit={handleAddFormSubmit}
      >
        <input
          type="text"
          name="name"
          required="required"
          placeholder="nome do produto"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="discription"
          required="required"
          placeholder="adicionar descrição"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="photoUrl"
          required="required"
          placeholder="url da foto"
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="price"
          required="required"
          placeholder="preço do produto"
          onChange={handleAddFormChange}
        />

        <input
          type="number"
          name="preparationTime"
          required="required"
          placeholder="tempo de preparo"
          onChange={handleAddFormChange}
        />

        <input
          type="text"
          name="foodCategoryName"
          required="required"
          placeholder="categoria"
          onChange={handleAddFormChange}
        />
        <button className="table-button" type="submit">
          Adicionar
        </button>
      </form>
      <form className="form-table" onSubmit={handleEditFormSubmit}>
        <table className="menu-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Descrição</th>
              <th>Foto</th>
              <th>Preço</th>
              <th>Tempo de preparo</th>
              <th>Categoria</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <Fragment>
                {editItemId === item.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    item={item}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}
