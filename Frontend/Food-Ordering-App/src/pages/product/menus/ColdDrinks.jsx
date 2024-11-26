import MenuCard from "./MenuCard"
const ColdDrinks = () => {
    return (
      <div className="categories-section">
        <h2 style={{color:'#FC8A06',fontSize:'30px'}}>Cold Drinks</h2>
        <div className="categories-container">
        <MenuCard
        name="Royal Cheese Burger with extra Fries"
        price={40}
        image="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612381/Rectangle_46_6_isdcrj.png"
        ingredient="1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium"
      />
      <MenuCard
        name="The classics for 3"
        price={40}
        image="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612381/Rectangle_46_7_ou7ug9.png"
        ingredient="1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks"
      />
      <MenuCard
        name="The classics for 3"
        price={40}
        image="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612381/Rectangle_46_8_ygz8gz.png"
        ingredient="1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks"
      />
      <MenuCard
        name="The classics for 3"
        price={40}
        image="https://res.cloudinary.com/dft6bqu4v/image/upload/v1732612382/Rectangle_46_9_ebidd2.png"
        ingredient="1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks"
      />
      </div>
      </div>
    )
  }
  
  export default ColdDrinks