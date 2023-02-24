import React from "react";

export const ItemBox = () => {
  const arrProduct = [
    { id: 1, name: "Nike Green Shoes", price: "$150.00", discount: false },
    { id: 2, name: "Drone", price: "#190.00", discount: false },
    { id: 3, name: "Smart Cleaner", price: "$330.00", discount: false },
    {
      id: 4,
      name: "Camera",
      price: "$21.00",
      newPrice: "$11.00",
      discount: true,
    },
    { id: 5, name: "Nike Shoes", price: "$130.00", discount: false },
    {
      id: 6,
      name: "MicroPhone",
      price: "$230.00",
      newPrice: "$110.00",
      discount: true,
    },
    { id: 7, name: "Monitor", price: "$150.00", discount: false },
    { id: 8, name: "Shoes", price: "$95.00", discount: false },
    {
      id: 9,
      name: "Speakers",
      price: "$33.00",
      newPrice: "$20.00",
      discount: true,
    },
    { id: 10, name: "Xbox", price: "$608.00", discount: false },
    { id: 11, name: "Phone", price: "$450.00", discount: false },
    { id: 12, name: "Selfi Stick", price: "$120.00", discount: false },
    { id: 13, name: "Sunglasses", price: "$10.00", discount: false },
    { id: 14, name: "Flashlight", price: "$20.00", discount: false },
    { id: 15, name: "Smart Watch", price: "$160.00", discount: false },
    { id: 16, name: "Lamp", price: "$160.00", discount: false },
    { id: 17, name: "Tablet", price: "$160.00", discount: false },
    { id: 18, name: "Chair", price: "$160.00", discount: false },
  ];
  return (
    <>
      <div className="container">
        <div className="child">
          {arrProduct.map((i) => (
            <div className="box">
              <img className="img" src={`assets/product-${i.id}.jpg`}></img>

              <div className="childBox">
                {" "}
                <div className="childName">{i.name}</div>
                <div className="childPrice">
                  {i.discount ? (
                    <div>
                      {i.newPrice}
                      <text
                        style={{
                          color: "white",
                          textDecoration: "line-through",
                        }}
                      >
                        {i.price}
                      </text>
                    </div>
                  ) : (
                    i.price
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ItemBox;
