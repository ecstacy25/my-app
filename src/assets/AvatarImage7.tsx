export default function AvatarImage7(props: AvatarImage7Props) {
  return (
    <div className={`${props.className}`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect
          width="30"
          height="30"
          rx="5"
          fill="#29CC39"
          fillOpacity="0.3"
         />
        <mask
          id="mask0_2190_136687"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="30"
          height="30"
        >
          <rect width="30" height="30" rx="5" fill="#0D111A" />
        </mask>
        <g mask="url(#mask0_2190_136687)">
          <rect
            width="30"
            height="30"
            fill="url(#pattern-2190:136687-0)"
           />
        </g>
        <defs>
          <pattern
            id="pattern-2190:136687-0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_2190_136687"
              transform="scale(0.00166667)"
             />
          </pattern>
          <image
            id="image0_2190_136687"
            width="600"
            height="600"
            xlinkHref="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/850e4538-c503-46f3-a919-3252ba4137e2.webp"
           />
        </defs>
      </svg>
    </div>
  );
}

AvatarImage7.defaultProps = {
  className: "",
};

interface AvatarImage7Props {
  className: string;
}

