export default function Icon30(props: Icon30Props) {
  return (
    <div className={`${props.className}`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 25 7 C 25 5.9 24.1 5 23 5 H 7 C 5.9 5 5 5.9 5 7 V 19 C 5 20.1 5.9 21 7 21 H 21 L 25 25 V 7 Z"
          fill="#E62E7B"
         />
      </svg>
    </div>
  );
}

Icon30.defaultProps = {
  className: "",
};

interface Icon30Props {
  className: string;
}


