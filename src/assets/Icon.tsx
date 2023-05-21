export default function Icon(props: IconProps) {
  return (
    <div className={`${props.className}`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 31 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 19.167 17.001 H 18.377 L 18.097 16.731 C 19.297 15.331 19.917 13.421 19.577 11.391 C 19.107 8.611 16.787 6.391 13.987 6.051 C 9.757 5.531 6.197 9.091 6.717 13.321 C 7.057 16.121 9.277 18.441 12.057 18.911 C 14.087 19.251 15.997 18.631 17.397 17.431 L 17.667 17.711 V 18.501 L 21.917 22.751 C 22.327 23.161 22.997 23.161 23.407 22.751 C 23.817 22.341 23.817 21.671 23.407 21.261 L 19.167 17.001 Z M 13.167 17.001 C 10.677 17.001 8.667 14.991 8.667 12.501 C 8.667 10.011 10.677 8.001 13.167 8.001 C 15.657 8.001 17.667 10.011 17.667 12.501 C 17.667 14.991 15.657 17.001 13.167 17.001 Z"
          fill="#C3CAD9"
         />
      </svg>
    </div>
  );
}

Icon.defaultProps = {
  className: "",
};

interface IconProps {
  className: string;
}


