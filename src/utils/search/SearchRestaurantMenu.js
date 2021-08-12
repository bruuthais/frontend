import "./styleRestaurant.scss";
export function SearchRestaurantMenu(props) {
  return (
    <div className="search-menu-component">
      <form className="search-menu-restaurant">
        <input
          className="search-menu-restaurant-input"
          type="text"
          placeholder="buscar itens..."
          onChange={(e) => props.setSearch(e.target.value)}
        />
      </form>
    </div>
  );
}
