export default function Icon5(props: Icon5Props) {
  return (
    <div className={`${props.className}`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 12 17.6 C 15.093 17.6 17.6 15.093 17.6 12 C 17.6 8.907 15.093 6.4 12 6.4 C 8.907 6.4 6.4 8.907 6.4 12 C 6.4 15.093 8.907 17.6 12 17.6 Z M 12 8.8 C 10.233 8.8 8.8 10.233 8.8 12 C 8.8 13.767 10.233 15.2 12 15.2 C 13.767 15.2 15.2 13.767 15.2 12 C 15.2 10.233 13.767 8.8 12 8.8 Z"
          fill="#C3CAD9"
         />
      </svg>
    </div>
  );
}

Icon5.defaultProps = {
  className: "",
};

interface Icon5Props {
  className: string;
}


