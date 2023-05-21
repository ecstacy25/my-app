export default function Icon38(props: Icon38Props) {
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
          d="M 20 6 H 10 C 8.9 6 8 6.9 8 8 V 24 L 15 21 L 22 24 V 8 C 22 6.9 21.1 6 20 6 Z"
          fill="#FF6633"
         />
      </svg>
    </div>
  );
}

Icon38.defaultProps = {
  className: "",
};

interface Icon38Props {
  className: string;
}

