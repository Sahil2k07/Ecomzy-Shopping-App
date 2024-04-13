import toast from "react-hot-toast";
import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";

function CartItem({ item, itemIndex }) {
  const dispatch = useDispatch();

  function removeFromCart() {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="border-b-2 border-gray-500">
      <div className="flex flex-col p-5 justify-evenly md:flex-row lg:flex-row :xl:flex-row">
        <div className="p-4 h-[440px] sm:h-[460px] sm:w-[400px]  md:h-[300px] lg:h-[300px] xl:h-[260px]">
          <img src={item.image} alt="" className="w-full h-full" />
        </div>

        <div className="flex flex-col justify-center w-full p-4 space-y-7 md:space-y-3 lg:space-y-3 xl:space-y-3 text-center-left">
          <h1 className="text-2xl font-bold text-gray-700">{item.title}</h1>

          <h2 className="text-gray-400">
            {item.description.split(" ").slice(0, 15).join(" ") + "..."}
          </h2>

          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-green-700">${item.price}</p>

            <div onClick={removeFromCart}>
              <AiTwotoneDelete className="items-end justify-between p-1 text-3xl text-red-600 bg-red-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
