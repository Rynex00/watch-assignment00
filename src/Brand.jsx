import React from "react";

const Brand = ({
  activeItem,
  setActiveItem,
  activeSize,
  setActiveSize,
  activeColor,
  activePrice,
}) => {
  return (
    <div>
      <div className="pt-5">
        <p className="text-lg text-[#364A63] font-bold mb-[10px]">Band Color</p>
        <div className="flex gap-[19px]">
          <input
            type="radio"
            name="carousel"
            id="item1-radio"
            checked={activeItem === "item1"}
            onChange={() => setActiveItem("item1")}
            className="radio bg-[#816BFF] border-[#816BFF] checked:bg-[#816BFF]"
          />
          <input
            type="radio"
            name="carousel"
            id="item2-radio"
            checked={activeItem === "item2"}
            onChange={() => setActiveItem("item2")}
            className="radio bg-[#1FCEC9] border-[#1FCEC9] checked:bg-[#1FCEC9]"
          />
          <input
            type="radio"
            name="carousel"
            id="item3-radio"
            checked={activeItem === "item3"}
            onChange={() => setActiveItem("item3")}
            className="radio bg-[#4B97D3] border-[#4B97D3] checked:bg-[#4B97D3]"
          />
          <input
            type="radio"
            name="carousel"
            id="item4-radio"
            checked={activeItem === "item4"}
            onChange={() => setActiveItem("item4")}
            className="radio bg-[#3B4747] border-[#3B4747] checked:bg-[#3B4747]"
          />
        </div>
      </div>

      <div className="pt-5">
        <p className="text-lg text-[#364A63] font-bold mb-[10px]">Wrist Size</p>
        <div className="flex gap-3">
          {/* Size S */}
          <div
            className={`border rounded-[3px] ${
              activeSize === "S"
                ? `border-[${activeColor}]`
                : "border-[#8091A7]"
            }`}
          >
            <div
              className="flex gap-2 items-center py-2 px-[18px] cursor-pointer"
              onClick={() => setActiveSize("S")}
            >
              <h2
                className="text-sm font-bold"
                style={{
                  color: activeSize === "S" ? activeColor : "#8091A7",
                }}
              >
                S
              </h2>
              <p className="text-xs text-[#8091A7]">${69}</p>
            </div>
          </div>

          {/* Size M */}
          <div
            className={`border rounded-[3px] ${
              activeSize === "M"
                ? `border-[${activeColor}]`
                : "border-[#8091A7]"
            }`}
          >
            <div
              className="flex gap-2 items-center py-2 px-[18px] cursor-pointer"
              onClick={() => setActiveSize("M")}
            >
              <h2
                className="text-sm font-bold"
                style={{
                  color: activeSize === "M" ? activeColor : "#8091A7",
                }}
              >
                M
              </h2>
              <p className="text-xs text-[#8091A7]">${79}</p>
            </div>
          </div>

          {/* Size L */}
          <div
            className={`border rounded-[3px] ${
              activeSize === "L"
                ? `border-[${activeColor}]`
                : "border-[#8091A7]"
            }`}
          >
            <div
              className="flex gap-2 items-center py-2 px-[18px] cursor-pointer"
              onClick={() => setActiveSize("L")}
            >
              <h2
                className="text-sm font-bold"
                style={{
                  color: activeSize === "L" ? activeColor : "#8091A7",
                }}
              >
                L
              </h2>
              <p className="text-xs text-[#8091A7]">${89}</p>
            </div>
          </div>

          {/* Size XL */}
          <div
            className={`border rounded-[3px] ${
              activeSize === "XL"
                ? `border-[${activeColor}]`
                : "border-[#8091A7]"
            }`}
          >
            <div
              className="flex gap-2 items-center py-2 px-[18px] cursor-pointer"
              onClick={() => setActiveSize("XL")}
            >
              <h2
                className="text-sm font-bold"
                style={{
                  color: activeSize === "XL" ? activeColor : "#8091A7",
                }}
              >
                XL
              </h2>
              <p className="text-xs text-[#8091A7]">${99}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
