import React from "react";

const ReadOrders = ({item, handleBagNext}) => {
  return (
    <>
      <div>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <p>{item.quantity}</p>
      </div>
    </>
  );
};

export default ReadOrders;
