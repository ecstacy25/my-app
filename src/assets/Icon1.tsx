export default function Icon1(props: Icon1Props) {
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
          d="M 7 11 H 11 V 7 H 7 V 11 Z M 13 23 H 17 V 19 H 13 V 23 Z M 7 23 H 11 V 19 H 7 V 23 Z M 7 17 H 11 V 13 H 7 V 17 Z M 13 17 H 17 V 13 H 13 V 17 Z M 19 7 V 11 H 23 V 7 H 19 Z M 13 11 H 17 V 7 H 13 V 11 Z M 19 17 H 23 V 13 H 19 V 17 Z M 19 23 H 23 V 19 H 19 V 23 Z"
          fill="#C3CAD9"
         />
      </svg>
    </div>
  );
}

Icon1.defaultProps = {
  className: "",
};

interface Icon1Props {
  className: string;
}


