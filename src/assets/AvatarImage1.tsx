export default function AvatarImage1(props: AvatarImage1Props) {
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
          fill="#33BFFF"
          fillOpacity="0.4"
         />
        <mask
          id="mask0_2190_136710"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="30"
          height="30"
        >
          <rect width="30" height="30" rx="5" fill="#0D111A" />
        </mask>
        <g mask="url(#mask0_2190_136710)">
          <rect
            width="30"
            height="30"
            fill="url(#pattern-2190:136710-0)"
           />
        </g>
        <defs>
          <pattern
            id="pattern-2190:136710-0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_2190_136710"
              transform="scale(0.00166667)"
             />
          </pattern>
          <image
            id="image0_2190_136710"
            width="600"
            height="600"
            xlinkHref="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/760dcb97-16a1-40d0-ae9d-0d806739b5ed.webp"
           />
        </defs>
      </svg>
    </div>
  );
}

AvatarImage1.defaultProps = {
  className: "",
};

interface AvatarImage1Props {
  className: string;
}


