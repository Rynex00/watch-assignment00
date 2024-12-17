import React, { useState } from "react";
import productGallery from "./assets/Watch/product-gallery.png";
import cyan from "./assets/Watch/cyan.png";
import blue from "./assets/Watch/blue.png";
import black from "./assets/Watch/black.png";

const Modal = ({ closeModal, cartItems }) => {
  const images = {
    item1: productGallery,
    item2: cyan,
    item3: blue,
    item4: black,
  };

  const mergedCartItems = cartItems.reduce((acc, currentItem) => {
    const existingItem = acc.find(
      (item) =>
        item.title === currentItem.title &&
        item.color === currentItem.color &&
        item.size === currentItem.size
    );
    if (existingItem) {
      existingItem.quantity += currentItem.quantity;
    } else {
      acc.push({ ...currentItem });
    }
    return acc;
  }, []);

  const totalQuantity = mergedCartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = mergedCartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-10 w-[651px] rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-[#364A63]">Your Cart</h2>
        <div>
          {mergedCartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="flex text-[14px] text-[#8091A7] font-normal border-b pb-2">
                <div className="">Item</div>
                <div className="flex-1"></div>
                <div className="w-[62px] text-center">Color</div>
                <div className="w-[69px] text-center">Size</div>
                <div className="w-[59px] text-center">Qnt</div>
                <div className="w-[91px] text-right">Price</div>
              </div>

              {mergedCartItems.map((item, index) => (
                <div key={index} className="flex items-center border-b py-2">
                  <div>
                    <img
                      src={images[item.activeItem]}
                      alt="Product"
                      className="w-9 h-9"
                    />
                  </div>
                  <div className="flex-1 ml-2 overflow-hidden whitespace-nowrap text-ellipsis max-w-[150px] md:max-w-full">
                    {item.title}
                  </div>
                  <div className="w-[62px] text-center">{item.color}</div>
                  <div className="w-[69px] font-bold text-center">{item.size}</div>
                  <div className="w-[59px] font-bold text-center">
                    {item.quantity}
                  </div>
                  <div className="w-[91px] font-bold text-right">
                    ${item.price * item.quantity}
                  </div>
                </div>
              ))}

              <div className="flex items-center font-bold py-2">
                <div className="">Total:</div>
                <div className="flex-1"></div>
                <div className="w-[62px]"></div>
                <div className="w-[69px]"></div>
                <div className="w-[59px] text-center">{totalQuantity}</div>
                <div className="w-[91px] text-lg text-right">
                  ${totalPrice.toFixed(2)}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex gap-6 justify-end mt-4">
          <button
            onClick={closeModal}
            className="border text-[#364A63] font-bold text-[13px] py-2 px-4 rounded h-9 items-center"
          >
            Continue Shopping
          </button>
          <button className="bg-[#6576FF] h-9 w-[94px] text-[13px] text-white font-bold rounded">
            CheckOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
