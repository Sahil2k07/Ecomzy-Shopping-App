import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

function Cart() {
  const { cart } = useSelector((state) => state);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="max-w-6xl mx-auto">
      {cart.length > 0 ? (
        <div className="flex flex-col justify-around mx-4 lg:flex-row xl:flex-row">
          <div className="lg:max-w-[50%]  xl:max-w-[55%]">
            {cart.map((item, index) => (
              <CartItem key={index} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="flex flex-col justify-center mx-4 mt-6 mb-6 md:lg:justify-evenly  xl:justify-around lg:w-[40%] xl:w-[35%]">
            <div className="">
              <div className="text-3xl font-bold text-green-700 uppercase">
                Your Cart
              </div>

              <div className="mt-2 text-5xl font-extrabold text-green-700 uppercase">
                Summary
              </div>

              <p className="mt-4 text-lg font-bold">
                <span className="text-gray-700">
                  Total Items: {cart.length}
                </span>
              </p>
            </div>

            <div className="mt-6">
              <p className="mb-4 text-lg font-bold text-gray-700">
                Total Amount:{" "}
                <span className="font-bold text-black">${totalAmount}</span>
              </p>

              <button className="w-full p-2 text-lg font-bold text-white bg-green-700 rounded-md">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen -mt-14">
          <h1 className="text-2xl font-bold text-gray-700">Cart Empty</h1>
          <Link to={"/"}>
            <button className="w-auto p-2 mt-3 text-2xl font-bold text-white bg-green-700 rounded-md">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
