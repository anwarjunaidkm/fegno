import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const { cart } = useSelector((state) => state.data);

  return (
    <nav className=" bg-black">
      <div className="  h-16 flex items-center  justify-between p-2 md:mx-32 bg-black text-white">
        <Link to={"/"}>
          {" "}
          <div className="text-3xl font-bold font-">Fegno</div>
        </Link>
        <ul className=" hidden md:flex cursor-pointer font-light gap-4">
          <Link to={"/"}>
            {" "}
            <li>Home</li>{" "}
          </Link>
          <li>Product</li>
          <li>About</li>
        </ul>
        <div className="">
          <Link to={"/cart"}>
            <IoCartOutline size={30} />
          </Link>
          <div className="w-[22px] h-[22px] flex justify-center items-center mt-[-40px] ml-[20px] text-white rounded-[11px] text-[14px] bg-red-600">
            {cart.length}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
