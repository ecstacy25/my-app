export default function Arrow(props: ArrowProps) {
  return (
    <div className={`flex ${props.className}`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 11 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 10.786 0 L 0.786 0 L 5.786 5 L 10.786 0 Z"
          fill="#29CC39"
         />
      </svg>
    </div>
  );
}

Arrow.defaultProps = {
  className: "",
};

interface ArrowProps {
  className: string;
}

