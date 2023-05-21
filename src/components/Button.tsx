import Icon15 from "../assets/Icon15";
import Icon16 from "../assets/Icon16";
import Icon2 from "../assets/Icon2";
import Icon1 from "../assets/Icon1";
import Icon19 from "../assets/Icon19";
import Icon20 from "../assets/Icon20";
import Icon21 from "../assets/Icon21";
import Icon17 from "../assets/Icon17";
import Icon18 from "../assets/Icon18";
import Icon7 from "../assets/Icon7";
import Icon5 from "../assets/Icon5";
import Icon9 from "../assets/Icon9";

export default function Button(props: ButtonProps) {
  return (
    <>
      <div
        className={`transition-all items-center justify-center inline-flex ${
          props.className
        } ${
          props.type === "ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE4"
            ? "p-[3px] rounded-[100px] bg-[#26334D] gap-2.5 cursor-[pointer]"
            : ""
        } ${
          props.type === "ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE5"
            ? "p-[3px] rounded-[100px] bg-[#F7F8FA] gap-2.5 cursor-[pointer]"
            : ""
        } ${
          props.type === "ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE"
            ? "p-[3px] rounded-[100px] bg-[#13BF24] gap-2.5 cursor-[pointer]"
            : ""
        } ${
          props.type === "ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE1"
            ? "p-[3px] rounded-[100px] bg-[#7919FF] gap-2.5 cursor-[pointer]"
            : ""
        } ${
          props.type === "ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE2"
            ? "p-[3px] rounded-[100px] bg-[#E64B17] gap-2.5 cursor-[pointer]"
            : ""
        } ${
          props.type === "ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE3"
            ? "p-[3px] rounded-[100px] bg-[#17A5E6] gap-2.5 cursor-[pointer]"
            : ""
        } ${
          props.type === "ICON_DEFAULT_ROUNDED_LIGHT_TYPE1"
            ? "rounded-[100px] bg-[#8833FF1A] relative p-2.5 gap-2.5 cursor-[pointer]"
            : ""
        } ${
          props.type === "ICON_DEFAULT_ROUNDED_LIGHT_TYPE"
            ? "drop-shadow-lg rounded-[100px] p-2.5 gap-2.5 bg-white cursor-[pointer]"
            : ""
        } ${
          props.type === "ICON_DEFAULT_ROUNDED_LIGHT_TYPE4"
            ? "rounded-[100px] bg-[#3361FF0D] p-2.5 gap-2.5 cursor-[pointer]"
            : ""
        } ${
          props.type === "ICON_DEFAULT_ROUNDED_LIGHT_TYPE5"
            ? "rounded-[100px] bg-[#FF66330D] p-2.5 gap-2.5 cursor-[pointer]"
            : ""
        } ${
          props.type === "ICON_DEFAULT_ROUNDED_LIGHT_TYPE6"
            ? "rounded-[100px] bg-[#E62E7B0D] p-2.5 gap-2.5 cursor-[pointer]"
            : ""
        } ${
          props.type === "ICON_DEFAULT_ROUNDED_LIGHT_TYPE2"
            ? "rounded-[100px] bg-[#29CC390D] p-2.5 gap-2.5 cursor-[pointer]"
            : ""
        } ${
          props.type === "ICON_DEFAULT_ROUNDED_LIGHT_TYPE3"
            ? "rounded-[100px] bg-[#8833FF0D] p-2.5 gap-2.5 cursor-[pointer]"
            : ""
        } ${
          props.type === "LEFT_ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE"
            ? "text-[#7D8FB3] font-['Roboto'] pr-[15px] h-[30px] rounded-[20px] gap-[5px] pb-[3px] pt-[3px] font-black text-left pl-2.5 cursor-[pointer]"
            : ""
        } ${
          props.type === "LEFT_ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE1"
            ? "text-[#7D8FB3] font-['Roboto'] pr-[15px] h-[30px] rounded-[20px] gap-[5px] pb-[3px] pt-[3px] font-black text-left pl-2.5 cursor-[pointer]"
            : ""
        } ${
          props.type === "LEFT_ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE2"
            ? "text-[#7D8FB3] font-['Roboto'] pr-[15px] h-[30px] rounded-[20px] gap-[5px] pb-[3px] pt-[3px] font-black text-left pl-2.5 cursor-[pointer]"
            : ""
        } ${
          props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE5"
            ? "text-[#7D8FB3] font-['Roboto'] h-[30px] rounded-[15px] bg-[#F7F8FA] pb-[5px] pt-[5px] pr-[15px] pl-[15px] font-black text-center gap-2.5 cursor-[pointer]"
            : ""
        } ${
          props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE"
            ? "text-[#7D8FB3] font-['Roboto'] h-[30px] rounded-[15px] bg-[#F7F8FA] pb-[5px] pt-[5px] pr-[15px] pl-[15px] font-black text-center gap-2.5 cursor-[pointer]"
            : ""
        } ${
          props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE1"
            ? "text-[#7D8FB3] font-['Roboto'] h-[30px] rounded-[15px] bg-[#F7F8FA] pb-[5px] pt-[5px] pr-[15px] pl-[15px] font-black text-center gap-2.5 cursor-[pointer]"
            : ""
        } ${
          props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE2"
            ? "text-[#7D8FB3] font-['Roboto'] h-[30px] rounded-[15px] bg-[#F7F8FA] pb-[5px] pt-[5px] pr-[15px] pl-[15px] font-black text-center gap-2.5 cursor-[pointer]"
            : ""
        } ${
          props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE3"
            ? "text-[#7D8FB3] font-['Roboto'] h-[30px] rounded-[15px] bg-[#F7F8FA] pb-[5px] pt-[5px] pr-[15px] pl-[15px] font-black text-center gap-2.5 cursor-[pointer]"
            : ""
        } ${
          props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE4"
            ? "text-[#7D8FB3] font-['Roboto'] h-[30px] rounded-[15px] bg-[#F7F8FA] pb-[5px] pt-[5px] pr-[15px] pl-[15px] font-black text-center gap-2.5 cursor-[pointer]"
            : ""
        } ${
          props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE5"
            ? "text-[#7D8FB3] font-['Roboto'] h-[30px] rounded-[15px] bg-[#F7F8FA] pb-[5px] pt-[5px] pr-[15px] pl-[15px] font-black text-center gap-2.5 cursor-[pointer]"
            : ""
        } ${
          props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE2"
            ? "font-['Roboto'] h-[30px] rounded-[15px] bg-[#E64B17] pb-[5px] pt-[5px] pr-[15px] pl-[15px] font-black text-center text-white gap-2.5 cursor-[pointer]"
            : ""
        } ${
          props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE3"
            ? "font-['Roboto'] h-[30px] rounded-[15px] bg-[#17A5E6] pb-[5px] pt-[5px] pr-[15px] pl-[15px] font-black text-center text-white gap-2.5 cursor-[pointer]"
            : ""
        } ${
          props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE4"
            ? "font-['Roboto'] h-[30px] rounded-[15px] bg-[#26334D] pb-[5px] pt-[5px] pr-[15px] pl-[15px] font-black text-center text-white gap-2.5 cursor-[pointer]"
            : ""
        } ${
          props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE"
            ? "font-['Roboto'] h-[30px] rounded-[15px] bg-[#13BF24] pb-[5px] pt-[5px] pr-[15px] pl-[15px] font-black text-center text-white gap-2.5 cursor-[pointer]"
            : ""
        } ${
          props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE1"
            ? "font-['Roboto'] h-[30px] rounded-[15px] bg-[#7919FF] pb-[5px] pt-[5px] pr-[15px] pl-[15px] font-black text-center text-white gap-2.5 cursor-[pointer]"
            : ""
        }`}
      >
        {props.type === "ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE4" && (
          <Icon15 className="h-6 w-6 cursor-[pointer]" />
        )}
        {props.type === "ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE5" && (
          <Icon16 className="h-6 w-6 cursor-[pointer]" />
        )}
        {props.type === "ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE" && (
          <Icon15 className="h-6 w-6 cursor-[pointer]" />
        )}
        {props.type === "ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE1" && (
          <Icon15 className="h-6 w-6 cursor-[pointer]" />
        )}
        {props.type === "ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE2" && (
          <Icon15 className="h-6 w-6 cursor-[pointer]" />
        )}
        {props.type === "ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE3" && (
          <Icon15 className="h-6 w-6 cursor-[pointer]" />
        )}
        {props.type === "ICON_DEFAULT_ROUNDED_LIGHT_TYPE1" && (
          <Icon2 className="h-[30px] w-[30px] cursor-[pointer]" />
        )}
        {props.type === "ICON_DEFAULT_ROUNDED_LIGHT_TYPE" && (
          <Icon1 className="h-[30px] w-[30px] cursor-[pointer]" />
        )}
        {props.type === "ICON_DEFAULT_ROUNDED_LIGHT_TYPE4" && (
          <Icon19 className="h-[30px] w-[30px] cursor-[pointer]" />
        )}
        {props.type === "ICON_DEFAULT_ROUNDED_LIGHT_TYPE5" && (
          <Icon20 className="h-[30px] w-[30px] cursor-[pointer]" />
        )}
        {props.type === "ICON_DEFAULT_ROUNDED_LIGHT_TYPE6" && (
          <Icon21 className="h-[30px] w-[30px] cursor-[pointer]" />
        )}
        {props.type === "ICON_DEFAULT_ROUNDED_LIGHT_TYPE2" && (
          <Icon17 className="h-[30px] w-[30px] cursor-[pointer]" />
        )}
        {props.type === "ICON_DEFAULT_ROUNDED_LIGHT_TYPE3" && (
          <Icon18 className="h-[30px] w-[30px] cursor-[pointer]" />
        )}
        {props.type === "LEFT_ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE" && (
          <Icon7 className="h-6 w-6 cursor-[pointer]" />
        )}
        {props.type === "LEFT_ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE1" && (
          <Icon5 className="h-6 w-6 cursor-[pointer]" />
        )}
        {props.type === "LEFT_ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE2" && (
          <Icon9 className="h-6 w-6 cursor-[pointer]" />
        )}
        <p
          className={`transition-all ${
            props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE3"
              ? "w-[67px] text-[10px] h-5 leading-5 cursor-[pointer]"
              : ""
          } ${
            props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE5"
              ? "text-[10px] h-5 w-11 leading-5 cursor-[pointer]"
              : ""
          } ${
            props.type === "LEFT_ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE"
              ? "w-[29px] text-[10px] h-5 leading-5 cursor-[pointer]"
              : ""
          } ${
            props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE4"
              ? "text-[10px] h-5 w-14 leading-5 cursor-[pointer]"
              : ""
          } ${
            props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE"
              ? "w-[27px] text-[10px] h-5 leading-5 cursor-[pointer]"
              : ""
          } ${
            props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE"
              ? "w-[37px] text-[10px] h-5 leading-5 cursor-[pointer]"
              : ""
          } ${
            props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE1"
              ? "w-[37px] text-[10px] h-5 leading-5 cursor-[pointer]"
              : ""
          } ${
            props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE5"
              ? "w-[37px] text-[10px] h-5 leading-5 cursor-[pointer]"
              : ""
          } ${
            props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE2"
              ? "w-[37px] text-[10px] h-5 leading-5 cursor-[pointer]"
              : ""
          } ${
            props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE3"
              ? "w-[37px] text-[10px] h-5 leading-5 cursor-[pointer]"
              : ""
          } ${
            props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE4"
              ? "w-[37px] text-[10px] h-5 leading-5 cursor-[pointer]"
              : ""
          } ${
            props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE1"
              ? "w-[46px] text-[10px] h-5 leading-5 cursor-[pointer]"
              : ""
          } ${
            props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE2"
              ? "w-[53px] text-[10px] h-5 leading-5 cursor-[pointer]"
              : ""
          } ${
            props.type === "LEFT_ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE1"
              ? "w-[31px] text-[10px] h-5 leading-5 cursor-[pointer]"
              : ""
          } ${
            props.type === "LEFT_ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE2"
              ? "w-[21px] text-[10px] h-5 leading-5 cursor-[pointer]"
              : ""
          }`}
        >
          {props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE3" &&
            props.text}
          {props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE5" &&
            props.text}
          {props.type === "LEFT_ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE" &&
            props.text}
          {props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE4" &&
            props.text}
          {props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE" &&
            props.text}
          {props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE" &&
            props.text}
          {props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE1" &&
            props.text}
          {props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE5" &&
            props.text}
          {props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE2" &&
            props.text}
          {props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE3" &&
            props.text}
          {props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE4" &&
            props.text}
          {props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE1" &&
            props.text}
          {props.type === "DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE2" &&
            props.text}
          {props.type === "LEFT_ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE1" &&
            props.text}
          {props.type === "LEFT_ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE2" &&
            props.text}
        </p>
      </div>
    </>
  );
}

Button.defaultProps = {
  className: "",
  type: "ICON_DEFAULT_ROUNDED_LIGHT_TYPE",
  text: "Button",
};

interface ButtonProps {
  className: string;
  type:
    | "ICON_DEFAULT_ROUNDED_LIGHT_TYPE"
    | "ICON_DEFAULT_ROUNDED_LIGHT_TYPE1"
    | "LEFT_ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE"
    | "LEFT_ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE1"
    | "LEFT_ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE2"
    | "ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE"
    | "ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE1"
    | "ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE2"
    | "ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE3"
    | "ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE4"
    | "DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE"
    | "DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE1"
    | "DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE2"
    | "DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE3"
    | "DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE4"
    | "DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE5"
    | "DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE"
    | "DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE1"
    | "DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE2"
    | "DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE3"
    | "DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE4"
    | "DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE5"
    | "ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE5"
    | "ICON_DEFAULT_ROUNDED_LIGHT_TYPE2"
    | "ICON_DEFAULT_ROUNDED_LIGHT_TYPE3"
    | "ICON_DEFAULT_ROUNDED_LIGHT_TYPE4"
    | "ICON_DEFAULT_ROUNDED_LIGHT_TYPE5"
    | "ICON_DEFAULT_ROUNDED_LIGHT_TYPE6";
  text: string;
}

