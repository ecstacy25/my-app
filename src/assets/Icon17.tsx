export default function Icon17(props: Icon17Props) {
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
          d="M 9 5 C 7.9 5 7.01 5.9 7.01 7 L 7 23 C 7 24.1 7.89 25 8.99 25 H 21 C 22.1 25 23 24.1 23 23 V 11.83 C 23 11.3 22.79 10.79 22.41 10.42 L 17.58 5.59 C 17.21 5.21 16.7 5 16.17 5 H 9 Z M 16 11 V 6.5 L 21.5 12 H 17 C 16.45 12 16 11.55 16 11 Z"
          fill="#29CC39"
         />
      </svg>
    </div>
  );
}

Icon17.defaultProps = {
  className: "",
};

interface Icon17Props {
  className: string;
}


