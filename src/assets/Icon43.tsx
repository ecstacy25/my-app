export default function Icon43(props: Icon43Props) {
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
          d="M 10.713 12.293 L 14.593 16.173 L 18.473 12.293 C 18.863 11.903 19.493 11.903 19.883 12.293 C 20.273 12.683 20.273 13.313 19.883 13.703 L 15.293 18.293 C 14.903 18.683 14.273 18.683 13.883 18.293 L 9.292 13.703 C 9.105 13.516 9 13.262 9 12.998 C 9 12.733 9.105 12.479 9.292 12.293 C 9.682 11.913 10.323 11.903 10.713 12.293 Z"
          fill="#C3CAD9"
         />
      </svg>
    </div>
  );
}

Icon43.defaultProps = {
  className: "",
};

interface Icon43Props {
  className: string;
}

