export default function AvatarImage4(props: AvatarImage4Props) {
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
          fill="#FF6633"
          fillOpacity="0.4"
         />
        <mask
          id="mask0_2190_136698"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="30"
          height="30"
        >
          <rect width="30" height="30" rx="5" fill="#0D111A" />
        </mask>
        <g mask="url(#mask0_2190_136698)">
          <rect
            width="30"
            height="30"
            fill="url(#pattern-2190:136698-0)"
           />
        </g>
        <defs>
          <pattern
            id="pattern-2190:136698-0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_2190_136698"
              transform="scale(0.00166667)"
             />
          </pattern>
          <image
            id="image0_2190_136698"
            width="600"
            height="600"
            xlinkHref="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/7fd08564-134a-4919-886c-7788c3fe05e1.webp"
           />
        </defs>
      </svg>
    </div>
  );
}

AvatarImage4.defaultProps = {
  className: "",
};

interface AvatarImage4Props {
  className: string;
}


