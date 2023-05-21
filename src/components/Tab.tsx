import { useState } from "react";

export default function Tab(props: TabProps) {
  const [activeTab, setActiveTab] = useState(1); // State to store the active tab index

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex); // Update the active tab on click
  };

  return (
    <>
      <div
        className={`transition-all font-roboto gap-[50px] font-black text-center self-stretch inline-flex ${
          props.className
        } ${
          props.type === "TAB_TYPE" ? "items-center justify-center" : ""
        } ${props.type === "TAB_TYPE1" ? "items-start" : ""} ${
          props.type === "TAB_TYPE2" ? "items-start" : ""
        }`}
      >
        <div
          className={`transition-all text-[#8833FF] h-[65px] self-stretch items-center justify-center flex-col flex ${
            props.type === "TAB_TYPE" ? "gap-[22px]" : ""
          } ${props.type === "TAB_TYPE1" ? "gap-[15px]" : ""} ${
            props.type === "TAB_TYPE2" ? "gap-[15px]" : ""
          }`}
        >
          <p
            className={`transition-all h-5 leading-5 text-xs ${
              props.type === "TAB_TYPE" ? "w-[35px]" : ""
            } ${props.type === "TAB_TYPE1" ? "w-6" : ""} ${
              props.type === "TAB_TYPE2" ? "w-6" : ""
            } ${
              activeTab === 1 ? "text-[#000000]" : "text-[#ADB8CC]"
            }`}
            onClick={() => handleTabClick(1)} // Handle click on tab 1
          >
            {props.tab1}
          </p>
        </div>
        <div
          className={`transition-all h-[65px] self-stretch items-center justify-center flex-col flex ${
            props.type === "TAB_TYPE" ? "text-[#ADB8CC] gap-[22px] pb-0.5" : ""
          } ${props.type === "TAB_TYPE1" ? "text-[#7D8FB3] gap-10" : ""} ${
            props.type === "TAB_TYPE2" ? "text-[#7D8FB3] gap-10" : ""
          }`}
        >
          <p
            className={`transition-all h-5 leading-5 text-xs ${
              props.type === "TAB_TYPE" ? "w-[45px]" : ""
            } ${props.type === "TAB_TYPE1" ? "w-[33px]" : ""} ${
              props.type === "TAB_TYPE2" ? "w-[33px]" : ""
            } ${
              activeTab === 2 ? "text-[#000000]" : "text-[#ADB8CC]"
            }`}
            onClick={() => handleTabClick(2)} // Handle click on tab 2
          >
            {props.tab2}
          </p>
        </div>
        {props.showTab3 && (
          <div
            className={`${
              activeTab === 3 ? "text-[#000000]" : "text-[#ADB8CC]"
            }`}
          >
            <div
              className={`transition-all ${
                props.type === "TAB_TYPE"
                  ? "text-[#ADB8CC] font-roboto gap-[22px] h-[65px] font-black text-center self-stretch items-center justify-center flex-col inline-flex pb-0.5"
                  : "text-[#7D8FB3] font-roboto h-[65px] font-black text-center self-stretch items-center justify-center flex-col inline-flex gap-10"
              }`}
              onClick={() => handleTabClick(3)} // Handle click on tab 3
            >
              <p className="w-[25px] h-5 leading-5 text-xs">{props.tab3}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

Tab.defaultProps = {
  className: "",
  type: "TAB_TYPE",
  tab1: "Tab",
  tab2: "Tab",
  showTab3: true,
  tab3: "Tab",
};

interface TabProps {
  className: string;
  type: "TAB_TYPE" | "TAB_TYPE1" | "TAB_TYPE2";
  tab1: string;
  tab2: string;
  showTab3: boolean;
  tab3: string;
}
