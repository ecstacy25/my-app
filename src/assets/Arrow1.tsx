export default function Arrow1(props: Arrow1Props) {
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
          d="M 10.5 0 L 0.5 0 L 5.5 5 L 10.5 0 Z"
          fill="#FF6633"
         />
      </svg>
    </div>
  );
}

Arrow1.defaultProps = {
  className: "",
};

interface Arrow1Props {
  className: string;
}


