import React, {useEffect, useState} from "react";
import api from "../../../api/api";
import {NavBarClient} from "../../../utils/navbar/client-navbar/NavBarClient";

export function HomeCategory(props) {
  const [busca, setBusca] = useState("");
  const [category, setCategory] = useState([]);

  return (
    <div>
      <NavBarClient />
      <p>{category.name}</p>
    </div>
  );
}
