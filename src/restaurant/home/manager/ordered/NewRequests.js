import React, {useState, Fragment, useEffect} from "react";

import "./style.scss";

import ReadOnlyOrders from "../../../../utils/table/ReadOnlyOrders";

import api from "../../../../api/api";

export function NewRequests() {
  const [items, setItems] = useState([]);

  //Dados para adicionar
  const [addFormData, setAddFormData] = useState({
    id: "",
    status: "",
    customerName: "",
    streetAddress: "",
    paymentTypeName: "",
    bagDeliveryAddress: "",
    bagItems: [
      {
        foodName: "",
        quantity: "",
        id: "",

        foodPrice: "",

        totalPrice: "",
        preparationTime: "",
        bagId: "",
        foodId: "",
      },
    ],
    totalPrice: "",
  });
  //Dados para editar
  const [editFormData, setEditFormData] = useState({
    id: "",
    status: "",
    customerName: "",
    streetAddress: "",
    paymentTypeName: "",
    items: "",
    totalPrice: "",
  });

  const [editItemId, setEditItemId] = useState(null);

  useEffect(() => {
    api.get("/api/Restaurant/bags/").then((response) => {
      const idList = response.data.map((bag) => bag.id);

      Promise.all(
        idList.map((id) => api.get(`/api/Restaurant/bags/${id}`))
      ).then((bag) => {
        const pedidos = bag.map((item) => item.data);
        setItems(pedidos);
      });
    });
  }, []);

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

      setItems(newItems);
    });
  };

  return (
    <>
      <div className="table-container">
        <h2>Novos Pedidos</h2>

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
                <th className="td-status">Aceitar pedido</th>
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
