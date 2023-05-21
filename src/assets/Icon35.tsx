export default function Icon35(props: Icon35Props) {
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
          d="M 10.713 18.293 L 14.593 14.413 L 18.473 18.293 C 18.863 18.683 19.493 18.683 19.883 18.293 C 20.273 17.903 20.273 17.273 19.883 16.883 L 15.293 12.293 C 15.106 12.105 14.852 12 14.588 12 C 14.323 12 14.069 12.105 13.883 12.293 L 9.293 16.883 C 8.903 17.273 8.903 17.903 9.293 18.293 C 9.683 18.673 10.323 18.683 10.713 18.293 Z"
          fill="#C3CAD9"
         />
      </svg>
    </div>
  );
}

Icon35.defaultProps = {
  className: "",
};

interface Icon35Props {
  className: string;
}


