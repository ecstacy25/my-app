export default function Icon2(props: Icon2Props) {
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
          d="M 14.587 24.5 C 15.687 24.5 16.587 23.6 16.587 22.5 H 12.587 C 12.587 23.6 13.477 24.5 14.587 24.5 Z M 20.587 18.5 V 13.5 C 20.587 10.43 18.947 7.86 16.087 7.18 V 6.5 C 16.087 5.67 15.417 5 14.587 5 C 13.757 5 13.087 5.67 13.087 6.5 V 7.18 C 10.217 7.86 8.586 10.42 8.586 13.5 V 18.5 L 7.296 19.79 C 6.666 20.42 7.106 21.5 7.996 21.5 H 21.167 C 22.057 21.5 22.507 20.42 21.877 19.79 L 20.587 18.5 Z"
          fill="#8833FF"
         />
      </svg>
    </div>
  );
}

Icon2.defaultProps = {
  className: "",
};

interface Icon2Props {
  className: string;
}
