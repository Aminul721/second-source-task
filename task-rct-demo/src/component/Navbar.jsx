import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="bg-gray-400 relative mb-5">
      <div className="container mx-auto flex items-center justify-between gap-3 py-5 lg:py-8 px-2">
        <div className="logo min-w-5">logo</div>

        <nav className="text-white hidden lg:block">
          <ul className="flex items-center space-x-3">
            <li> Home</li>
            <li>About</li>
            <li>Product</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="flex justify-between gap-2 items-center">
          <a href="#">Login</a>
          <div className="humber lg:hidden">
            <button className="btn p-2 block border rounded cursor-pointer" onClick={toggleMenu}>
              {
                isOpen ? <RxCross1 /> : <FaBarsStaggered />
              }
            </button>
          </div>
        </div>

        {/* mobile menu */}
        <div className={`lg:hidden absolute w-full h-auto z-10 top-full bg-gray-400 start-0 ${isOpen ? "block" : "hidden"}`}>
          <nav className="text-white lg:block container mx-auto">
            <ul className="flex flex-col gap-2">
              <li>Home</li>
              <li>About</li>
              <li>Product</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
