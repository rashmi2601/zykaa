const RestaurantCard = (props) => {
    console.log(props)
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/89fccaa76f2f760e2742b9e53d32bb69"
        />
        <h3>{props.resName}</h3>
        <h4>{props.cuisine}</h4>
        <h4>4.5 stars</h4>
        <h4>30 mins</h4>
      </div>
    );
  };
  
  export default RestaurantCard;