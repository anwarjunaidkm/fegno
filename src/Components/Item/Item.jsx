import React from "react";

function Item({
  id,
  title,
  image,
  price,
  addToCartHandler,
  removeFromCartHandler,
  isItemInCart,
}) {
  const handleAddToCart = () => {
    addToCartHandler({ id, title, image, price });
  };

  const handleRemoveFromCart = () => {
    removeFromCartHandler({ id, title, image, price });
  };

  return (
    <div className=" items-center  flex justify-between  p-3 border border-solid   flex-col  hover:scale-[1.05] transition-[0.6s]">
      <div className="mb-7 mt-3">
        <img className="w-30 h-32  object-cover" src={image} alt="" />
      </div>
      <p className=" text-sm p-3">{title}</p>
      <div className="">
        <div className="font-medium">${price}</div>
      </div>
      {isItemInCart ? (
        <button
          className="round-[26px] bg-black text-white px-5"
          onClick={handleRemoveFromCart}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="round-[26px] bg-black text-white px-5"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default Item;
