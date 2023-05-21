export default function Icon22(props: Icon22Props) {
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
          d="M 9.333 13 C 8.233 13 7.333 13.9 7.333 15 C 7.333 16.1 8.233 17 9.333 17 C 10.433 17 11.333 16.1 11.333 15 C 11.333 13.9 10.433 13 9.333 13 Z M 21.333 13 C 20.233 13 19.333 13.9 19.333 15 C 19.333 16.1 20.233 17 21.333 17 C 22.433 17 23.333 16.1 23.333 15 C 23.333 13.9 22.433 13 21.333 13 Z M 15.333 13 C 14.233 13 13.333 13.9 13.333 15 C 13.333 16.1 14.233 17 15.333 17 C 16.433 17 17.333 16.1 17.333 15 C 17.333 13.9 16.433 13 15.333 13 Z"
          fill="#C3CAD9"
         />
      </svg>
    </div>
  );
}

Icon22.defaultProps = {
  className: "",
};

interface Icon22Props {
  className: string;
}


