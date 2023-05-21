export default function Icon49(props: Icon49Props) {
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
          d="M 9 13 C 7.9 13 7 13.9 7 15 C 7 16.1 7.9 17 9 17 C 10.1 17 11 16.1 11 15 C 11 13.9 10.1 13 9 13 Z M 21 13 C 19.9 13 19 13.9 19 15 C 19 16.1 19.9 17 21 17 C 22.1 17 23 16.1 23 15 C 23 13.9 22.1 13 21 13 Z M 15 13 C 13.9 13 13 13.9 13 15 C 13 16.1 13.9 17 15 17 C 16.1 17 17 16.1 17 15 C 17 13.9 16.1 13 15 13 Z"
          fill="white"
          fillOpacity="0.5"
         />
      </svg>
    </div>
  );
}

Icon49.defaultProps = {
  className: "",
};

interface Icon49Props {
  className: string;
}

