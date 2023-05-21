export default function Icon19(props: Icon19Props) {
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
          d="M 7 12 C 7.55 12 8 11.55 8 11 C 8 10.45 7.55 10 7 10 C 6.45 10 6 10.45 6 11 C 6 11.55 6.45 12 7 12 Z M 8 15 C 8 15.55 7.55 16 7 16 C 6.45 16 6 15.55 6 15 C 6 14.45 6.45 14 7 14 C 7.55 14 8 14.45 8 15 Z M 8 19 C 8 19.55 7.55 20 7 20 C 6.45 20 6 19.55 6 19 C 6 18.45 6.45 18 7 18 C 7.55 18 8 18.45 8 19 Z M 24 15 C 24 15.55 23.55 16 23 16 H 11 C 10.45 16 10 15.55 10 15 C 10 14.45 10.45 14 11 14 H 23 C 23.55 14 24 14.45 24 15 Z M 23 20 C 23.55 20 24 19.55 24 19 C 24 18.45 23.55 18 23 18 H 11 C 10.45 18 10 18.45 10 19 C 10 19.55 10.45 20 11 20 H 23 Z M 11 12 C 10.45 12 10 11.55 10 11 C 10 10.45 10.45 10 11 10 H 23 C 23.55 10 24 10.45 24 11 C 24 11.55 23.55 12 23 12 H 11 Z"
          fill="#3361FF"
         />
      </svg>
    </div>
  );
}

Icon19.defaultProps = {
  className: "",
};

interface Icon19Props {
  className: string;
}


