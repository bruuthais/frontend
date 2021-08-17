//Row editavel com os inputs para editar dentro dos tds

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleEditClick,
  category,
  handleAddFormChange,
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
          name="description"
          value={editFormData.description}
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
        <select
          className="input-item-category"
          name="foodCategoryName"
          required="required"
          onChange={handleAddFormChange}
        >
          {/* Select de categoria*/}

          <option className="option-select" value={null}>
            Categoria
          </option>
          {category.map((category) => (
            <option value={category.value}>{category.name}</option>
          ))}
        </select>
      </td>
      <td>
        <button
          className="table-button-side"
          type="submit"
          onClick={handleEditClick}
        >
          Salvar
        </button>
        <button
          className="table-button-side"
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
