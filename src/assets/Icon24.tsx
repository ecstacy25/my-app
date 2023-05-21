export default function Icon24(props: Icon24Props) {
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
          d="M 19 14 C 20.66 14 21.99 12.66 21.99 11 C 21.99 9.34 20.66 8 19 8 C 17.34 8 16 9.34 16 11 C 16 12.66 17.34 14 19 14 Z M 11 14 C 12.66 14 13.99 12.66 13.99 11 C 13.99 9.34 12.66 8 11 8 C 9.34 8 8 9.34 8 11 C 8 12.66 9.34 14 11 14 Z M 11 16 C 8.67 16 4 17.17 4 19.5 V 21 C 4 21.55 4.45 22 5 22 H 17 C 17.55 22 18 21.55 18 21 V 19.5 C 18 17.17 13.33 16 11 16 Z M 19 16 C 18.71 16 18.38 16.02 18.03 16.05 C 18.05 16.06 18.06 16.08 18.07 16.09 C 19.21 16.92 20 18.03 20 19.5 V 21 C 20 21.35 19.93 21.69 19.82 22 H 25 C 25.55 22 26 21.55 26 21 V 19.5 C 26 17.17 21.33 16 19 16 Z"
          fill="#C3CAD9"
         />
      </svg>
    </div>
  );
}

Icon24.defaultProps = {
  className: "",
};

interface Icon24Props {
  className: string;
}

