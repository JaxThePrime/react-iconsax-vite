const Weight = ({ type = "linear", size = 24, color = "currentColor", className="" }) => {
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
          d="M17.18 5.25c-1.71 0-3.75.65-3.75 3.75v6c0 3.1 2.04 3.75 3.75 3.75s3.75-.65 3.75-3.75V9c0-3.1-2.04-3.75-3.75-3.75ZM6.82 5.25c-1.71 0-3.75.65-3.75 3.75v6c0 3.1 2.04 3.75 3.75 3.75s3.75-.65 3.75-3.75V9c0-3.1-2.04-3.75-3.75-3.75ZM13.43 11.25h-2.86v1.5h2.86v-1.5ZM22.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75ZM1.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75Z"
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
          d="M17.18 18c2.4 0 3-1.35 3-3V9c0-1.65-.6-3-3-3s-3 1.35-3 3v6c0 1.65.6 3 3 3ZM3.82 11.3V9c0-1.65.6-3 3-3s3 1.35 3 3v6c0 1.65-.6 3-3 3s-3-1.35-3-3M9.82 12h4.36M22.5 14.5v-5M1.5 14.5v-5"
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
          d="M17.18 5.25c-1.71 0-3.75.65-3.75 3.75v6c0 3.1 2.04 3.75 3.75 3.75s3.75-.65 3.75-3.75V9c0-3.1-2.04-3.75-3.75-3.75ZM6.82 5.25c-1.71 0-3.75.65-3.75 3.75v6c0 3.1 2.04 3.75 3.75 3.75s3.75-.65 3.75-3.75V9c0-3.1-2.04-3.75-3.75-3.75Z"
          fill={color}
        ></path>
        <path
          d="M13.43 11.25h-2.86v1.5h2.86v-1.5ZM22.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75ZM1.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75Z"
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
          d="M17.18 18c2.4 0 3-1.35 3-3V9c0-1.65-.6-3-3-3s-3 1.35-3 3v6c0 1.65.6 3 3 3ZM6.82 18c-2.4 0-3-1.35-3-3V9c0-1.65.6-3 3-3s3 1.35 3 3v6c0 1.65-.6 3-3 3ZM9.82 12h4.36M22.5 14.5v-5M1.5 14.5v-5"
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
          d="M17.18 18.75c-1.71 0-3.75-.65-3.75-3.75V9c0-3.1 2.04-3.75 3.75-3.75s3.75.65 3.75 3.75v6c0 3.1-2.04 3.75-3.75 3.75Zm0-12c-1.62 0-2.25.63-2.25 2.25v6c0 1.62.63 2.25 2.25 2.25s2.25-.63 2.25-2.25V9c0-1.62-.63-2.25-2.25-2.25ZM6.82 18.75c-1.71 0-3.75-.65-3.75-3.75V9c0-3.1 2.04-3.75 3.75-3.75s3.75.65 3.75 3.75v6c0 3.1-2.04 3.75-3.75 3.75Zm0-12c-1.62 0-2.25.63-2.25 2.25v6c0 1.62.63 2.25 2.25 2.25s2.25-.63 2.25-2.25V9c0-1.62-.63-2.25-2.25-2.25Z"
          fill={color}
        ></path>
        <path
          d="M14.18 12.75H9.82c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.36a.749.749 0 1 1 0 1.5ZM22.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75ZM1.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75Z"
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
          d="M17.18 18c2.4 0 3-1.35 3-3V9c0-1.65-.6-3-3-3s-3 1.35-3 3v6c0 1.65.6 3 3 3ZM6.82 18c-2.4 0-3-1.35-3-3V9c0-1.65.6-3 3-3s3 1.35 3 3v6c0 1.65-.6 3-3 3Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          opacity=".4"
          d="M9.82 12h4.36M22.5 14.5v-5M1.5 14.5v-5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }
};

export default Weight;
