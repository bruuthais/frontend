import React, {useState, Fragment, useEffect} from "react";

import "./table.scss";

import ReadOnlyRow from "../../../utils/table/ReadOnlyRow";
import EditableRow from "../../../utils/table/EditableRow";
import {SearchRestaurantMenu} from "../../../utils/search/SearchRestaurantMenu";
import api from "../../../api/api";

export function MenuTable() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  //trazer itens do cardápio do restaurante
  useEffect(() => {
    api.get("/api/Restaurant/foods").then((response) => {
      const data = response.data;

      setItems(data);
    });

    //trazer categorias;
    /* api.get("/api/Home/food-categories").then((response) => {
      const data = response.data;

      setCategory(data);
    }); */
  }, []);
  //refresh
  useEffect(() => {
    /* api.get("/api/Restaurant/foods").then((response) => {
      const data = response.data;

      setItems(data);
    }); */

    //trazer categorias;
    api.get("/api/Home/food-categories").then((response) => {
      const data = response.data;

      setCategory(data);
    });
  }, [items]);
  //Dados para adicionar
  const [addFormData, setAddFormData] = useState({
    name: "",
    description: "",
    photoUrl: "",
    price: "",
    preparationTime: "",
    foodCategoryName: "",
  });
  //Dados para editar
  const [editFormData, setEditFormData] = useState({
    name: "",
    description: "",
    photoUrl: "",
    price: "",
    preparationTime: "",
    foodCategoryName: "",
  });

  const [editItemId, setEditItemId] = useState(null);

  //Cria nova linha com os dados dos itens
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  //Edita linha com os dados dos itens
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {...editFormData};
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };
  //Adiciona novos itens ao cardápio
  const handleAddFormSubmit = (event) => {
    //event.preventDefault();
    const newItem = [
      {
        name: addFormData.name,
        description: addFormData.description,
        photoUrl: addFormData.photoUrl,
        price: addFormData.price,
        preparationTime: addFormData.preparationTime,
        foodCategoryName: addFormData.foodCategoryName,
      },
    ];

    api.post("/api/Restaurant/foods", newItem).then((response) => {});

    const newItems = [...items, newItem[0]];
    setItems(newItems);
  };
  //Edita os itens do cardápio
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedItem = {
      name: editFormData.name,
      description: editFormData.description,
      photoUrl: editFormData.photoUrl,
      price: editFormData.price,
      preparationTime: editFormData.preparationTime,
      foodCategoryName: editFormData.foodCategoryName,
    };

    api
      .put(`/api/Restaurant/foods/${editItemId}`, editedItem)
      .then((response) => {
        console.log("response", response);
        const newState = items.filter((item) => item.id !== editItemId);
        setItems([...newState, editedItem]);
      });

    setEditItemId(null);
  };
  //Botão de editar
  const handleEditClick = (event, item) => {
    event.preventDefault();
    setEditItemId(item.id);

    const formValues = {
      name: item.name,
      description: item.description,
      photoUrl: item.photoUrl,
      price: item.price,
      preparationTime: item.preparationTime,
      foodCategoryName: item.foodCategoryName,
    };

    setEditFormData(formValues);
  };
  //Botão de cancelar
  const handleCancelClick = () => {
    setEditItemId(null);
  };
  //Botão de deletar
  const handleDeleteClick = (itemId) => {
    const newItems = [...items];
    api.delete(`/api/Restaurant/foods/${itemId}`, items).then((response) => {
      const index = items.findIndex((item) => item.id === itemId);
      newItems.splice(index, 1);

      console.log(newItems);
      setItems(newItems);
    });
  };

  //Input de busca
  //const handleFilter = (event) => {
  //  const searchWord = event.target.value;
  //  setItems(searchWord);
  //  const newFilter = data.filter((value) => {
  //    return value.title.toLowerCase().includes(searchWord.toLowerCase());
  //  });
  //
  //  if (searchWord === "") {
  //    setFilteredData([]);
  //  } else {
  //    setFilteredData(newFilter);
  //  }
  //};

  return (
    <>
      <div className="table-container">
        <h2 className="table-title">Cardápio do Restaurante</h2>

        {/* Inputs para adicionar itens no cardápio */}

        <form
          className="form-table form-add-item-table"
          onSubmit={handleAddFormSubmit}
        >
          <input
            className="input-item-name input-add-item"
            type="text"
            name="name"
            required="required"
            placeholder="nome"
            onChange={handleAddFormChange}
          />
          <input
            className="input-item-description input-add-item"
            type="text"
            name="description"
            required="required"
            placeholder="adicionar descrição"
            onChange={handleAddFormChange}
          />
          <input
            className="input-item-photo input-add-item"
            type="text"
            name="photoUrl"
            placeholder="url da foto"
            onChange={handleAddFormChange}
          />
          <input
            className="input-item-price input-add-item"
            type="number"
            name="price"
            required="required"
            placeholder="preço"
            onChange={handleAddFormChange}
          />
          <input
            className="input-item-time input-add-item"
            type="number"
            name="preparationTime"
            required="required"
            placeholder="tempo"
            onChange={handleAddFormChange}
          />
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
          <button className="table-button-add" type="submit">
            Adicionar
          </button>
        </form>
        {/*Inicio da tabela*/}
        <form className="form-table" onSubmit={handleEditFormSubmit}>
          <table className="menu-table">
            <thead>
              <tr>
                {/*Titulos da tabela */}
                <th className="th-item">Item</th>
                <th className="th-description">Descrição</th>
                <th className="th-photo-url">Foto</th>
                <th className="th-price">Preço</th>
                <th className="th-time">Tempo de preparo</th>
                <th className="th-category">Categoria</th>
                <th>
                  {/*Botão de busca de itens */}
                  <SearchRestaurantMenu />
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <Fragment>
                  {/*Partes das Rows que editam e para "leitura" */}
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
    </>
  );
}
