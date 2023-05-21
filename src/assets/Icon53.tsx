export default function Icon53(props: Icon53Props) {
  return (
    <div className={`${props.className}`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 30 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 15 11.5 C 16.1 11.5 17 10.6 17 9.5 C 17 8.4 16.1 7.5 15 7.5 C 13.9 7.5 13 8.4 13 9.5 C 13 10.6 13.9 11.5 15 11.5 Z M 15 13.5 C 13.9 13.5 13 14.4 13 15.5 C 13 16.6 13.9 17.5 15 17.5 C 16.1 17.5 17 16.6 17 15.5 C 17 14.4 16.1 13.5 15 13.5 Z M 15 19.5 C 13.9 19.5 13 20.4 13 21.5 C 13 22.6 13.9 23.5 15 23.5 C 16.1 23.5 17 22.6 17 21.5 C 17 20.4 16.1 19.5 15 19.5 Z"
          fill="#C3CAD9"
         />
      </svg>
    </div>
  );
}

Icon53.defaultProps = {
  className: "",
};

interface Icon53Props {
  className: string;
}

