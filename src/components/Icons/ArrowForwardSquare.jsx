const ArrowForwardSquare = ({
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
          fill={color}
          d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm1.34 7.72l-1.57 1.57c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l.26-.26h-5.08c-1.28 0-2.33 1.04-2.33 2.33s1.04 2.33 2.33 2.33H15c.41 0 .75.34.75.75s-.34.75-.75.75h-4.92c-2.11 0-3.83-1.72-3.83-3.83 0-2.11 1.72-3.83 3.83-3.83h5.15l-.33-.32a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l1.57 1.57c.29.3.29.77 0 1.06z"
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
          d="M15 15.38h-4.92C8.38 15.38 7 14 7 12.3c0-1.7 1.38-3.08 3.08-3.08h6.77"
        ></path>
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.43 10.77L17 9.19l-1.57-1.57"
        ></path>
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M2 14v1c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
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
          d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z"
          opacity=".4"
        ></path>
        <path
          fill={color}
          d="M17.53 8.66l-1.57-1.57a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l.33.33h-5.15c-2.11 0-3.83 1.72-3.83 3.83 0 2.11 1.72 3.83 3.83 3.83H15c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-4.92c-1.28 0-2.33-1.04-2.33-2.33s1.04-2.33 2.33-2.33h5.08l-.26.26c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l1.57-1.57c.29-.3.29-.77 0-1.07z"
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
          strokeWidth="1.5"
          d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
        ></path>
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M15 15.38h-4.92C8.38 15.38 7 14 7 12.3c0-1.7 1.38-3.08 3.08-3.08h6.77"
        ></path>
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.43 10.77L17 9.19l-1.57-1.57"
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
          d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"
        ></path>
        <path
          fill={color}
          d="M15 16.13h-4.92c-2.11 0-3.83-1.72-3.83-3.83 0-2.11 1.72-3.83 3.83-3.83h6.77c.41 0 .75.34.75.75s-.34.75-.75.75h-6.77c-1.28 0-2.33 1.04-2.33 2.33s1.04 2.33 2.33 2.33H15c.41 0 .75.34.75.75s-.34.75-.75.75z"
        ></path>
        <path
          fill={color}
          d="M15.431 11.52c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l1.04-1.04-1.04-1.04a.755.755 0 010-1.06c.29-.29.77-.29 1.06 0l1.57 1.57c.29.29.29.77 0 1.06l-1.57 1.57c-.15.14-.34.22-.53.22z"
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
          strokeWidth="1.5"
          d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
        ></path>
        <g opacity=".4">
          <path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            d="M15 15.38h-4.92C8.38 15.38 7 14 7 12.3c0-1.7 1.38-3.08 3.08-3.08h6.77"
          ></path>
          <path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M15.43 10.77L17 9.19l-1.57-1.57"
          ></path>
        </g>
      </svg>
    );
  }
};

export default ArrowForwardSquare;
