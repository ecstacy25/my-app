export default function Icon40(props: Icon40Props) {
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
          d="M 23 5 H 7 C 5.9 5 5.01 5.9 5.01 7 L 5 25 L 9 21 H 23 C 24.1 21 25 20.1 25 19 V 7 C 25 5.9 24.1 5 23 5 Z M 10 12 H 20 C 20.55 12 21 12.45 21 13 C 21 13.55 20.55 14 20 14 H 10 C 9.45 14 9 13.55 9 13 C 9 12.45 9.45 12 10 12 Z M 16 17 H 10 C 9.45 17 9 16.55 9 16 C 9 15.45 9.45 15 10 15 H 16 C 16.55 15 17 15.45 17 16 C 17 16.55 16.55 17 16 17 Z M 20 11 H 10 C 9.45 11 9 10.55 9 10 C 9 9.45 9.45 9 10 9 H 20 C 20.55 9 21 9.45 21 10 C 21 10.55 20.55 11 20 11 Z"
          fill="#2EE6CA"
         />
      </svg>
    </div>
  );
}

Icon40.defaultProps = {
  className: "",
};

interface Icon40Props {
  className: string;
}


