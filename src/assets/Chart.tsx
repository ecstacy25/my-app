export default function Chart(props: ChartProps) {
  return (
    <div className={`${props.className}`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 172 172"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 86 1 C 132.944 1 171 39.056 171 86 C 171 132.944 132.944 171 86 171 C 39.056 171 1 132.944 1 86"
          stroke="#3361FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
         />
      </svg>
    </div>
  );
}

Chart.defaultProps = {
  className: "",
};

interface ChartProps {
  className: string;
}

