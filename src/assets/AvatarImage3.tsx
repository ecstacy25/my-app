export default function AvatarImage3(props: AvatarImage3Props) {
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
          fill="#8833FF"
          fillOpacity="0.4"
         />
        <mask
          id="mask0_2190_136702"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="30"
          height="30"
        >
          <rect width="30" height="30" rx="5" fill="#0D111A" />
        </mask>
        <g mask="url(#mask0_2190_136702)">
          <rect
            width="30"
            height="30"
            fill="url(#pattern-2190:136702-0)"
           />
        </g>
        <defs>
          <pattern
            id="pattern-2190:136702-0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_2190_136702"
              transform="scale(0.00166667)"
             />
          </pattern>
          <image
            id="image0_2190_136702"
            width="600"
            height="600"
            xlinkHref="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/26bf0a28-7a2c-406a-9aeb-1e947d553eb5.webp"
           />
        </defs>
      </svg>
    </div>
  );
}

AvatarImage3.defaultProps = {
  className: "",
};

interface AvatarImage3Props {
  className: string;
}


