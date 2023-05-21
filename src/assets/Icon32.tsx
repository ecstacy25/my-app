export default function Icon32(props: Icon32Props) {
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
          d="M 4 9 C 3.45 9 3 9.45 3 10 V 14 H 3.01 L 3 23 C 3 24.1 3.9 25 5 25 H 22 C 22.55 25 23 24.55 23 24 C 23 23.45 22.55 23 22 23 H 6 C 5.45 23 5 22.55 5 22 V 10 C 5 9.45 4.55 9 4 9 Z M 25 7 H 17 L 15.59 5.59 C 15.21 5.21 14.7 5 14.17 5 H 9 C 7.9 5 7.01 5.9 7.01 7 L 7 19 C 7 20.1 7.9 21 9 21 H 25 C 26.1 21 27 20.1 27 19 V 9 C 27 7.9 26.1 7 25 7 Z M 10.6 17.2 L 14.11 12.52 C 14.31 12.26 14.7 12.25 14.91 12.51 L 18.01 16.5 L 20.11 13.97 C 20.31 13.72 20.69 13.73 20.89 13.98 L 23.38 17.18 C 23.64 17.51 23.4 17.99 22.99 17.99 H 11 C 10.59 18 10.35 17.53 10.6 17.2 Z"
          fill="#33BFFF"
         />
      </svg>
    </div>
  );
}

Icon32.defaultProps = {
  className: "",
};

interface Icon32Props {
  className: string;
}


