const ArrowLeft2 = ({ type = "linear", size = 24, color = "currentColor", className="" }) => {
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
          fill={color}
          d="M13.978 5.319l-3.21 3.21-1.97 1.96a2.13 2.13 0 000 3.01l5.18 5.18c.68.68 1.84.19 1.84-.76V6.079c0-.96-1.16-1.44-1.84-.76z"
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
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M11.19 7.94l-2.62 2.62c-.77.77-.77 2.03 0 2.8l6.52 6.52M15.09 4.04l-1.04 1.04"
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
          fill={color}
          d="M10.77 8.52l5.05 3.79v5.61c0 .96-1.16 1.44-1.84.76L8.8 13.51a2.13 2.13 0 010-3.01l1.97-1.98z"
          opacity=".4"
        ></path>
        <path
          fill={color}
          d="M15.82 6.08v6.23l-5.05-3.79 3.21-3.21c.68-.67 1.84-.19 1.84.77z"
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
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"
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
          fill={color}
          d="M15 20.67c-.19 0-.38-.07-.53-.22l-6.52-6.52a2.74 2.74 0 010-3.86l6.52-6.52c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6.52 6.52c-.48.48-.48 1.26 0 1.74l6.52 6.52c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22z"
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
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"
        ></path>
      </svg>
    );
  }
};

export default ArrowLeft2;
