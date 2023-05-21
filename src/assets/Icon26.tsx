export default function Icon26(props: Icon26Props) {
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
          d="M 7 16 H 13 C 13.55 16 14 15.55 14 15 V 7 C 14 6.45 13.55 6 13 6 H 7 C 6.45 6 6 6.45 6 7 V 15 C 6 15.55 6.45 16 7 16 Z M 7 24 H 13 C 13.55 24 14 23.55 14 23 V 19 C 14 18.45 13.55 18 13 18 H 7 C 6.45 18 6 18.45 6 19 V 23 C 6 23.55 6.45 24 7 24 Z M 17 24 H 23 C 23.55 24 24 23.55 24 23 V 15 C 24 14.45 23.55 14 23 14 H 17 C 16.45 14 16 14.45 16 15 V 23 C 16 23.55 16.45 24 17 24 Z M 16 7 V 11 C 16 11.55 16.45 12 17 12 H 23 C 23.55 12 24 11.55 24 11 V 7 C 24 6.45 23.55 6 23 6 H 17 C 16.45 6 16 6.45 16 7 Z"
          fill="#FF6633"
         />
      </svg>
    </div>
  );
}

Icon26.defaultProps = {
  className: "",
};

interface Icon26Props {
  className: string;
}

