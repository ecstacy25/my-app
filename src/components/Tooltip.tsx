import Arrow from "../assets/Arrow";
import Arrow1 from "../assets/Arrow1";

interface TooltipProps {
  className: string;
  type: "DEFAULT_TOP_TYPE" | "DEFAULT_TOP_TYPE1";
  text: string;
}

export default function Tooltip(props: TooltipProps) {
  const tooltipClassName = `transition-all font-roboto font-black text-center text-white ${props.className} ${
    props.type === "DEFAULT_TOP_TYPE1"
      ? "drop-shadow-lg items-center justify-center flex-col inline-flex"
      : ""
  }`;

  const handleClick = () => {
    console.log("Tooltip clicked");
  };

  return (
    // eslint-disable-next-line
    <a href="#" className="tooltip-link" onClick={handleClick}>
      <div className={tooltipClassName}>
        <div
          className={`transition-all items-center justify-center flex-col flex ${
            props.type === "DEFAULT_TOP_TYPE"
              ? "h-[35px] w-[69px] drop-shadow-lg top-[-65px] left-[-29px] absolute"
              : ""
          } ${
            props.type === "DEFAULT_TOP_TYPE1"
              ? "rounded-[5px] bg-[#FF6633] h-[30px] pr-[11px] pl-[11px]"
              : ""
          }`}
        >
          {props.type === "DEFAULT_TOP_TYPE" && (
            <div
              className="rounded-[5px] bg-[#29CC39] h-[30px] pr-[11px] pl-[11px] items-center justify-center flex-col flex"
            >
              <p className="w-[47px] text-[10px] h-5 leading-5">
                {props.text}
              </p>
            </div>
          )}
          {props.type === "DEFAULT_TOP_TYPE1" && (
            <p className="text-[10px] h-5 w-3 leading-5">{props.text}</p>
          )}
          {props.type === "DEFAULT_TOP_TYPE" && (
            <Arrow className="h-[5px] mt-0 w-2.5" />
          )}
        </div>
        {props.type === "DEFAULT_TOP_TYPE1" && (
          <Arrow1 className="h-[5px] mt-0 w-2.5" />
        )}
      </div>
    </a>
  );
}

Tooltip.defaultProps = {
  className: "",
  type: "DEFAULT_TOP_TYPE",
  text: "Tooltip",
};



