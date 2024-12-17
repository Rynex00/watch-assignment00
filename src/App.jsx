import React, { useState, useEffect, useRef } from "react";
import Brand from "./Brand";
import Carousel from "./Carousel";
import Rating from "./Rating";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import Modal from "./Modal"; 

const App = () => {
  const [activeItem, setActiveItem] = useState("item1");
  const [activeSize, setActiveSize] = useState("S");
  const [quantity, setQuantity] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [isCheckoutVisible, setCheckoutVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); 


  const bandColors = {
    item1: "#816BFF",
    item2: "#1FCEC9",
    item3: "#4B97D3",
    item4: "#3B4747",
  };
  const colorNames = {
    "#816BFF": "Purple",
    "#1FCEC9": "Cyan",
    "#4B97D3": "Blue",
    "#3B4747": "Black",
  };

  const activeColor = bandColors[activeItem];

  const sizePrices = {
    S: 69,
    M: 79,
    L: 89,
    XL: 99,
  };

  const activePrice = sizePrices[activeSize];

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      const newItem = {
        title: "Classy Modern Smart Watch",
        activeItem,
        color: colorNames[bandColors[activeItem]],
        size: activeSize,
        price: activePrice,
        quantity,
      };

      setCartItems([...cartItems, newItem]);
      setCartCount(cartCount + quantity);
      setQuantity(0);
      setCheckoutVisible(true);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
    if (quantity === 1) {
      setCheckoutVisible(false);
    }
  };

  const checkoutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (checkoutRef.current && !checkoutRef.current.contains(event.target)) {
        setCheckoutVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section>
      <div className="lg:w-[1320px] mx-auto lg:h-[720px] lg:mt-[120px] px-4 ">
        <div>
          <div className="card lg:card-side lg:gap-[60px] h-[720px]">
            <div>
              <Carousel activeItem={activeItem} />
            </div>
            <div className=" lg:py-[90.5px]">
              <h2 className="card-title lg:text-[40px] text-3xl py-3">
                Classy Modern Smart Watch
              </h2>
              <div className="flex gap-2 items-center">
                <Rating /> <span className="text-[#8091A7]">(2 Reviews)</span>
              </div>
              <div className="flex gap-[5px] items-center pt-5">
                <span className="text-xl text-[#8091A7] line-through">
                  $99.00
                </span>
                <span
                  className="text-[#6576FF] text-2xl font-bold"
                  style={{ color: activeColor || "#6576FF" }}
                >
                  ${activePrice}
                </span>
              </div>
              <div className="pt-5 text-[#8091A7] text-lg">
                <p>
                  I must explain to you how all this mistaken idea of denouncing
                  pleasure praising pain was born and I will give you a complete
                  account of the system, and expound the actual teaching.
                </p>
              </div>
              <div className="flex items-center gap-[43px] pt-5">
                <h4 className="text-[#8091A7] text-sm">
                  Type <br />
                  <span className="text-[#364A63] font-bold text-md">Watch</span>
                </h4>
                <h4 className="text-[#8091A7] text-sm">
                  Model Number <br />
                  <span className="text-[#364A63] font-bold text-md">
                    Forerunner 290XT
                  </span>
                </h4>
              </div>

              <Brand
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                activeSize={activeSize}
                setActiveSize={setActiveSize}
                activeColor={activeColor}
                activePrice={activePrice}
              />

              <div className="flex pt-4 gap-3 ">
                <div className="flex items-center justify-center border-2 border-[#DBDFEA] rounded-[4px] h-[36px]">
                  <button
                    onClick={decreaseQuantity}
                    className="text-[#8091A7] w-[35px] flex justify-center py-[6px] px-[8px]"
                  >
                    <FiMinus size={24} />
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    className="w-[60px] text-center text-[#364A63] border-2 h-[36px]"
                    readOnly
                  />
                  <button
                    onClick={increaseQuantity}
                    className="text-[#8091A7] w-[35px] flex justify-center py-[6px] px-[8px]"
                  >
                    <GoPlus size={24} />
                  </button>
                </div>
                <div className="flex gap-3 items-center ">
                  <button
                    onClick={handleAddToCart}
                    className="text-white py-[8px] px-[18px] bg-[#6576FF] rounded-[3px] font-bold text-[13px] h-9 w-[105px]"
                  >
                    Add to Cart
                  </button>
                  <IoMdHeartEmpty size={20} className="text-[#6576FF]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" lg:w-[1320px] mx-auto flex justify-center ">
        {isCheckoutVisible && cartCount > 0 && (
          <div
            ref={checkoutRef}
            className="fixed w-[139px] h-[42px] bg-[#FFBB5A] flex justify-center items-center rounded-[20px] shadow-custom my-5 font-bold text-sm text-[#364A63] cursor-pointer gap-[10px]"
            onClick={openModal}
            style={{
              animation: "floatCheckout 1s ease-in-out forwards",
            }}
          >
            <span>Checkout</span>
            <div className="bg-[#fff] text-[#364A63] rounded-[5px] w-[19px] h-5 flex items-center justify-center text-xs">
              {cartCount}
            </div>
          </div>
        )}
      </div>

      {isModalOpen && <Modal closeModal={closeModal} cartItems={cartItems} />}
    </section>
  );
};

export default App;
