const RepeateMusic = ({
  type = "linear",
  size = 24,
  color = "currentColor", className=""
}) => {
  if (type === "bold") {
    return (
      <svg className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M3.91 17.181c-.19 0-.38-.07-.53-.22a7.244 7.244 0 0 1-2.13-5.13c0-4.01 3.25-7.27 7.25-7.27l6.07.02-1.09-1.04a.746.746 0 0 1-.02-1.06c.29-.3.76-.31 1.06-.02l2.44 2.34c.22.21.29.54.18.82-.11.28-.39.47-.7.47l-7.94-.02c-3.17 0-5.75 2.59-5.75 5.77 0 1.53.6 2.98 1.69 4.07.29.29.29.77 0 1.06-.15.14-.34.21-.53.21ZM10 21.75a.75.75 0 0 1-.52-.21L7.04 19.2a.76.76 0 0 1-.18-.82c.11-.28.39-.47.7-.47l7.95.02c3.17 0 5.75-2.59 5.75-5.77 0-1.53-.6-2.98-1.69-4.07a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0a7.244 7.244 0 0 1 2.13 5.13c0 4.01-3.25 7.27-7.25 7.27l-6.07-.02 1.09 1.04c.3.29.31.76.02 1.06-.16.16-.35.24-.55.24Z"
          fill={color}
        ></path>
        <path
          d="M9 15.5h6c1.92 0 3.5-1.57 3.5-3.5 0-1.92-1.57-3.5-3.5-3.5H9A3.51 3.51 0 0 0 5.5 12c0 1.93 1.57 3.5 3.5 3.5Z"
          fill={color}
        ></path>
      </svg>
    );
  }
  if (type === "broken") {
    return (
      <svg className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="m9.999 20.999-2.44-2.34 7.95.02c3.57 0 6.5-2.93 6.5-6.52 0-1.79-.73-3.42-1.91-4.6M9 12h6M8.559 4.98c-3.57 0-6.5 2.93-6.5 6.52 0 1.79.73 3.42 1.91 4.6M14.058 2.66 16.498 5l-3.51-.01"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }
  if (type === "bulk") {
    return (
      <svg className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          opacity=".4"
          d="M3.66 16.931c-.19 0-.38-.07-.53-.22A7.244 7.244 0 0 1 1 11.581c0-4.01 3.25-7.27 7.25-7.27l6.07.02-1.09-1.04a.746.746 0 0 1-.02-1.06c.29-.3.76-.31 1.06-.02l2.44 2.34c.22.21.29.54.18.82-.11.28-.39.47-.7.47l-7.95-.02c-3.17 0-5.75 2.59-5.75 5.77 0 1.53.6 2.98 1.69 4.07.29.29.29.77 0 1.06-.14.14-.33.21-.52.21ZM9.75 21.5c-.19 0-.37-.07-.52-.21l-2.44-2.34a.76.76 0 0 1-.18-.82c.11-.28.39-.47.7-.47l7.95.02c3.17 0 5.75-2.59 5.75-5.77 0-1.53-.6-2.98-1.69-4.07a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0a7.244 7.244 0 0 1 2.13 5.13c0 4.01-3.25 7.27-7.25 7.27l-6.07-.02 1.09 1.04c.3.29.31.76.02 1.06-.16.16-.35.24-.55.24Z"
          fill={color}
        ></path>
        <path
          d="M9 15.5h6c1.93 0 3.5-1.58 3.5-3.5S16.93 8.5 15 8.5H9A3.51 3.51 0 0 0 5.5 12c0 1.92 1.57 3.5 3.5 3.5Z"
          fill={color}
        ></path>
      </svg>
    );
  }
  if (type === "linear") {
    return (
      <svg className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="m14 3 2.44 2.34-7.95-.02c-3.57 0-6.5 2.93-6.5 6.52 0 1.79.73 3.42 1.91 4.6M10 21l-2.44-2.34 7.95.02c3.57 0 6.5-2.93 6.5-6.52 0-1.79-.73-3.42-1.91-4.6M9 12h6"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }
  if (type === "outline") {
    return (
      <svg className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M3.91 17.181c-.19 0-.38-.07-.53-.22a7.244 7.244 0 0 1-2.13-5.13c0-4.01 3.25-7.27 7.25-7.27l6.07.02-1.09-1.04a.746.746 0 0 1-.02-1.06c.29-.3.76-.31 1.06-.02l2.44 2.34c.22.21.29.54.18.82-.11.28-.39.47-.7.47l-7.95-.02c-3.17 0-5.75 2.59-5.75 5.77 0 1.53.6 2.98 1.69 4.07.29.29.29.77 0 1.06-.14.14-.33.21-.52.21ZM10 21.75c-.19 0-.37-.07-.52-.21L7.04 19.2a.76.76 0 0 1-.18-.82c.11-.28.39-.47.7-.47l7.95.02c3.17 0 5.75-2.59 5.75-5.77 0-1.53-.6-2.98-1.69-4.07a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0a7.244 7.244 0 0 1 2.13 5.13c0 4.01-3.25 7.27-7.25 7.27l-6.07-.02 1.09 1.04c.3.29.31.76.02 1.06-.16.16-.35.24-.55.24Z"
          fill={color}
        ></path>
        <path
          d="M15 12.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z"
          fill={color}
        ></path>
      </svg>
    );
  }
  if (type === "twotone") {
    return (
      <svg className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="m13.998 3 2.44 2.34-7.95-.02c-3.57 0-6.5 2.93-6.5 6.52 0 1.79.73 3.42 1.91 4.6M9.999 20.999l-2.44-2.34 7.95.02c3.57 0 6.5-2.93 6.5-6.52 0-1.79-.73-3.42-1.91-4.6"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          opacity=".4"
          d="M9 12h6"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }
};

export default RepeateMusic;
