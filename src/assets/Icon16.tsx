export default function Icon16(props: Icon16Props) {
  return (
    <div className={`${props.className}`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 12.5 4 C 8.084 4 4.5 7.584 4.5 12 C 4.5 16.416 8.084 20 12.5 20 C 16.916 20 20.5 16.416 20.5 12 C 20.5 7.584 16.916 4 12.5 4 Z M 15.7 12.8 H 13.3 V 15.2 C 13.3 15.64 12.94 16 12.5 16 C 12.06 16 11.7 15.64 11.7 15.2 V 12.8 H 9.3 C 8.86 12.8 8.5 12.44 8.5 12 C 8.5 11.56 8.86 11.2 9.3 11.2 H 11.7 V 8.8 C 11.7 8.36 12.06 8 12.5 8 C 12.94 8 13.3 8.36 13.3 8.8 V 11.2 H 15.7 C 16.14 11.2 16.5 11.56 16.5 12 C 16.5 12.44 16.14 12.8 15.7 12.8 Z"
          fill="#C3CAD9"
         />
      </svg>
    </div>
  );
}

Icon16.defaultProps = {
  className: "",
};

interface Icon16Props {
  className: string;
}


