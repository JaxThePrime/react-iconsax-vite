const Firstline = ({ type = "linear", size = 24, color = "currentColor", className="" }) => {
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
          d="M21 5.25h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 10.25h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 20.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM7.92 3.5H5.08C3.68 3.5 3 4.18 3 5.58v2.85c0 1.4.68 2.08 2.08 2.08h2.85c1.4 0 2.08-.68 2.08-2.08V5.58C10 4.18 9.32 3.5 7.92 3.5Z"
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
          d="M14 4.5h7M14 9.5h7M3 14.5h18M9.5 8.43V5.57C9.5 4.45 9.05 4 7.92 4H5.07C3.95 4 3.5 4.45 3.5 5.57v2.85c0 1.13.45 1.58 1.57 1.58h2.85c1.13 0 1.58-.45 1.58-1.57ZM10.05 19.5H21M3 19.5h2.98"
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
          d="M21 5.25h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75Z"
          fill={color}
        ></path>
        <path
          opacity=".4"
          d="M21 10.25h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75Z"
          fill={color}
        ></path>
        <path
          d="M21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z"
          fill={color}
        ></path>
        <path
          opacity=".4"
          d="M21 20.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM7.92 3.5H5.08C3.68 3.5 3 4.18 3 5.58v2.85c0 1.4.68 2.08 2.08 2.08h2.85c1.4 0 2.08-.68 2.08-2.08V5.58C10 4.18 9.32 3.5 7.92 3.5Z"
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
          d="M14 4.5h7M14 9.5h7M3 14.5h18M3 19.5h18M9.5 8.43V5.57C9.5 4.45 9.05 4 7.92 4H5.07C3.95 4 3.5 4.45 3.5 5.57v2.85c0 1.13.45 1.58 1.57 1.58h2.85c1.13 0 1.58-.45 1.58-1.57Z"
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
          d="M21 5.25h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 10.25h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 20.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM7.92 10.75H5.08c-1.54 0-2.33-.78-2.33-2.33V5.58c0-1.54.78-2.33 2.33-2.33h2.85c1.54 0 2.33.78 2.33 2.33v2.85c-.01 1.54-.79 2.32-2.34 2.32Zm-2.84-6c-.71 0-.83.12-.83.83v2.85c0 .71.12.83.83.83h2.85c.71 0 .83-.12.83-.83V5.58c0-.71-.12-.83-.83-.83H5.08Z"
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
          d="M14 4.5h7M14 9.5h7"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          opacity=".4"
          d="M3 14.5h18"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M3 19.5h18"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          opacity=".4"
          d="M9.5 8.43V5.57C9.5 4.45 9.05 4 7.92 4H5.07C3.95 4 3.5 4.45 3.5 5.57v2.85c0 1.13.45 1.58 1.57 1.58h2.85c1.13 0 1.58-.45 1.58-1.57Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }
};

export default Firstline;
