import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";

function Product({ post }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  function addToCart() {
    dispatch(add(post));
    toast.success("Item added to Cart");
  }

  function removeFromCart() {
    dispatch(remove(post.id));
    toast.success("Item removed from Cart");
  }

  return (
    <div className="flex flex-col items-center justify-between gap-3 p-4 mt-10 ml-5 transition duration-300 ease-in my- just hover:scale-110 rounded-xl hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
      <div>
        <p className="w-40 mt-1 text-lg font-semibold text-left text-gray-700 truncate">
          {post.title}
        </p>
      </div>

      <div>
        <p className="w-40 font-normal text-gray-400 text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>

      <div className="h-[180px]">
        <img src={post.image} alt="" className="w-full h-full" />
      </div>

      <div className="flex items-center justify-between w-full gap-12 mt-5 bottom-2">
        <div>
          <p className="font-semibold text-green-600">${post.price}</p>
        </div>

        <button>
          {cart.some((p) => p.id == post.id) ? (
            <button
              onClick={removeFromCart}
              className="font-semibold text-gray-700 border-2 border-gray-700 rounded-full text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
            >
              Remove Item
            </button>
          ) : (
            <button
              onClick={addToCart}
              className="font-semibold text-gray-700 border-2 border-gray-700 rounded-full text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
            >
              Add to Cart
            </button>
          )}
        </button>
      </div>
    </div>
  );
}

export default Product;
