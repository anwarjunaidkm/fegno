import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  dataApi,
  removeFromCart,
} from "../../store/Slice/dataSlice";
import Item from "../Item/Item";

function Products() {
  const dispatch = useDispatch();

  const { dataList, cart, loading } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(dataApi());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className=" p-2 lg:mx-32 mb-4">
      <h1 className="text-3xl font-semibold text-center mt-6">All Products</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className=" grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4  mt-4 ">
          {dataList.map((item, index) => {
            const isItemInCart = cart.some(
              (cartItem) => cartItem.id === item.id
            );

            return (
              <Item
                key={index}
                title={item.title}
                id={item?.id}
                image={item?.image}
                price={item.price}
                addToCartHandler={handleAddToCart}
                removeFromCartHandler={handleRemoveFromCart}
                isItemInCart={isItemInCart}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Products;
