export default function Icon25(props: Icon25Props) {
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
          d="M 22 6 H 8 C 6.9 6 6 6.9 6 8 V 22 C 6 23.1 6.9 24 8 24 H 22 C 23.1 24 24 23.1 24 22 V 8 C 24 6.9 23.1 6 22 6 Z M 11 20 C 10.45 20 10 19.55 10 19 V 14 C 10 13.45 10.45 13 11 13 C 11.55 13 12 13.45 12 14 V 19 C 12 19.55 11.55 20 11 20 Z M 15 20 C 14.45 20 14 19.55 14 19 V 11 C 14 10.45 14.45 10 15 10 C 15.55 10 16 10.45 16 11 V 19 C 16 19.55 15.55 20 15 20 Z M 19 20 C 18.45 20 18 19.55 18 19 V 17 C 18 16.45 18.45 16 19 16 C 19.55 16 20 16.45 20 17 V 19 C 20 19.55 19.55 20 19 20 Z"
          fill="#C3CAD9"
         />
      </svg>
    </div>
  );
}

Icon25.defaultProps = {
  className: "",
};

interface Icon25Props {
  className: string;
}

