import { useState } from "react";
import Icon from "../assets/Icon";

export default function Input(props: InputProps) {
  const [inputValue, setInputValue] = useState(""); // State to store the input value

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Update the input value on change
  };

  return (
    <div
      className={`text-[#ADB8CC] font-roboto rounded-[30px] drop-shadow-lg pl-[25px] pb-[15px] pt-[15px] font-bold text-left self-stretch items-center justify-between inline-flex gap-2.5 bg-white pr-5 cursor-pointer ${props.className}`}
      onClick={() => console.log("Input clicked")} // Replace console.log with your desired click functionality
    >
      <input
        type="text"
        className="w-[184px] h-5 leading-5 text-xs outline-none bg-transparent"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Icon className="h-[30px] w-[30px]" />
    </div>
  );
}

Input.defaultProps = {
  className: "",
  text: "Text",
};

interface InputProps {
  className: string;
  text: string;
}

