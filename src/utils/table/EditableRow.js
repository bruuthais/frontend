import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleEditClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          placeholder="nome"
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="descrição"
          name="discription"
          value={editFormData.discription}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="url da foto"
          name="photoUrl"
          value={editFormData.photoUrl}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          placeholder="preço"
          name="price"
          value={editFormData.price}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          placeholder="tempo"
          name="preparationTime"
          value={editFormData.preparationTime}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="categoria"
          name="foodCategoryName"
          value={editFormData.foodCategoryName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button
          className="table-button"
          type="submit"
          onClick={handleEditClick}
        >
          Salvar
        </button>
        <button
          className="table-button"
          type="button"
          onClick={handleCancelClick}
        >
          Cancelar
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
