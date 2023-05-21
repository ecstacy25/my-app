export default function Badge(props: BadgeProps) {

  return (
    <>
      <div
        className={`transition-all font-roboto rounded-[15px] font-black text-center items-center inline-flex gap-2.5 ${
          props.className
        } ${
          props.type === "SQUARE_SMALL_ROUNDED_PRIMARY_TYPE"
            ? "bg-[#8833FF] drop-shadow-lg top-[calc(50%_-_10px_+_-15px)] left-[calc(50%_-_10px_+_15px)] pr-[9px] text-white mt-0 absolute pl-2.5 h-5 w-5 cursor-[pointer]"
            : ""
        } ${
          props.type === "DEFAULT_LARGE_ROUNDED_PRIMARY_TYPE"
            ? "bg-[#FF6633] drop-shadow-lg h-[30px] pb-[5px] pt-[5px] pr-[15px] pl-[15px] justify-center text-white cursor-[pointer]"
            : ""
        } ${
          props.type === "SQUARE_LARGE_ROUNDED_LIGHT_TYPE2"
            ? "border-[#F5F6F7] text-[#6B7A99] drop-shadow-lg pb-[5px] pt-[5px] pr-[13px] pl-[13px] border-2 border-solid justify-center bg-white h-8 w-8 cursor-[pointer]"
            : ""
        } ${
          props.type === "SQUARE_LARGE_ROUNDED_LIGHT_TYPE1"
            ? "bg-[#FFFFFF33] drop-shadow-lg h-[30px] w-[30px] pb-[5px] pt-[5px] pr-[13px] pl-[13px] justify-center text-white cursor-[pointer]"
            : ""
        } ${
          props.type === "SQUARE_LARGE_ROUNDED_LIGHT_TYPE"
            ? "text-[#6B7A99] drop-shadow-lg h-[30px] w-[30px] pb-[5px] pt-[5px] pr-[13px] pl-[13px] justify-center bg-white cursor-[pointer]"
            : ""
        }`}
      >
        <p
          className={`transition-all leading-5 h-5 ${
            props.type === "SQUARE_SMALL_ROUNDED_PRIMARY_TYPE"
              ? "text-[8px] w-px cursor-[pointer]"
              : ""
          } ${
            props.type === "DEFAULT_LARGE_ROUNDED_PRIMARY_TYPE"
              ? "w-[26px] text-xs cursor-[pointer]"
              : ""
          } ${
            props.type === "SQUARE_LARGE_ROUNDED_LIGHT_TYPE"
              ? "text-xs w-1 cursor-[pointer]"
              : ""
          } ${
            props.type === "SQUARE_LARGE_ROUNDED_LIGHT_TYPE2"
              ? "text-xs w-1 cursor-[pointer]"
              : ""
          } ${
            props.type === "SQUARE_LARGE_ROUNDED_LIGHT_TYPE1"
              ? "text-xs w-1 cursor-[pointer]"
              : ""
          }`}
        >
          {props.type === "SQUARE_SMALL_ROUNDED_PRIMARY_TYPE" && props.number}
          {props.type === "DEFAULT_LARGE_ROUNDED_PRIMARY_TYPE" && props.text}
          {props.type === "SQUARE_LARGE_ROUNDED_LIGHT_TYPE" && props.number}
          {props.type === "SQUARE_LARGE_ROUNDED_LIGHT_TYPE2" && props.number}
          {props.type === "SQUARE_LARGE_ROUNDED_LIGHT_TYPE1" && props.number}
        </p>
      </div>
    </>
  );
}

Badge.defaultProps = {
  className: "",
  type: "SQUARE_SMALL_ROUNDED_PRIMARY_TYPE",
  number: "1",
  text: "BADGE",
};

interface BadgeProps {
  className: string;
  type:
    | "SQUARE_SMALL_ROUNDED_PRIMARY_TYPE"
    | "SQUARE_LARGE_ROUNDED_LIGHT_TYPE"
    | "SQUARE_LARGE_ROUNDED_LIGHT_TYPE1"
    | "DEFAULT_LARGE_ROUNDED_PRIMARY_TYPE"
    | "SQUARE_LARGE_ROUNDED_LIGHT_TYPE2";
  number: string;
  text: string;
}


