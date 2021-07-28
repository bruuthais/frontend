import React from "react";

type RestaurantProps = {
  name: string;
};

export function RestaurantDetails(props: RestaurantProps) {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
}
