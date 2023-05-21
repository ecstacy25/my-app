export default function AvatarImage5(props: AvatarImage5Props) {
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
          fill="#3361FF"
          fillOpacity="0.3"
         />
        <mask
          id="mask0_2190_136695"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="30"
          height="30"
        >
          <rect width="30" height="30" rx="5" fill="#0D111A" />
        </mask>
        <g mask="url(#mask0_2190_136695)">
          <rect
            width="30"
            height="30"
            fill="url(#pattern-2190:136695-0)"
           />
        </g>
        <defs>
          <pattern
            id="pattern-2190:136695-0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_2190_136695"
              transform="scale(0.00166667)"
             />
          </pattern>
          <image
            id="image0_2190_136695"
            width="600"
            height="600"
            xlinkHref="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/32b89f43-024c-4d8f-af27-5d6a51077dba.webp"
           />
        </defs>
      </svg>
    </div>
  );
}

AvatarImage5.defaultProps = {
  className: "",
};

interface AvatarImage5Props {
  className: string;
}


