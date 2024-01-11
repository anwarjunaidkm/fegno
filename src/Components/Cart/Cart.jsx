import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const { cart } = useSelector((state) => state.data);

  return (
    <div className="">
      <h1 className="text-3xl font-semibold  text-center mt-6">Cart Items</h1>
      <div className="flex flex-col gap-2 p-2 min-h-[80vh]">
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          cart.map((item, key) => (
            <div
              key={key}
              className=" items-center  flex justify-around    border border-solid    "
            >
              <div className="mb-7  mt-3">
                <img
                  className="w-20 h-24  object-cover"
                  src={item.image}
                  alt=""
                />
              </div>
              <p className=" text-sm p-3">{item.title}</p>
              <div className="">
                <div className="font-medium">${item.price}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;
