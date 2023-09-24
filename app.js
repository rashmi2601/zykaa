import React from "react";
import ReactDOM from "react-dom/client";



const Header = () =>{
  return (
    <div className="header">
      <div className="logo-container">
        <img src="" alt="logo img"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>


      </div>
    </div>
  )
}

const RestaurantCard =() =>{
  return(
    <div className="res-card">
      <img  className="res-logo" alt="res-logo img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/89fccaa76f2f760e2742b9e53d32bb69"/>
      <h3>Rashu Foods</h3>
      <h4>Biryani, North Indian,Asian</h4>
    <h4>4.5 stars</h4>
    <h4>30 mins</h4>

    </div>
  )

}


 const Body= ()=>{
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container"> 
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      
      

      
      </div>
    </div>
  )
 }


const AppLayout = () => (
    
    <div className="app" >
        
        
        <Header/>
        <Body/>
    </div>

);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
