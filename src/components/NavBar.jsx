import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function NavBar() {
  const { cart } = useSelector((state) => state);
  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <NavLink to={"/"}>
          <div className="ml-5">
            <img src="../logo.png" alt="logo" className="h-14" />
          </div>
        </NavLink>

        <div className="flex items-center mr-5 space-x-6 font-medium text-slate-100">
          <NavLink to={"/"}>
            <p>Home</p>
          </NavLink>

          <NavLink to={"/cart"}>
            <div className="relative">
              <BsCart4 className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-green-600 rounded-full -top-1 -right-2 animate-bounce">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
