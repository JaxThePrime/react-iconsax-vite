const Chainlink = ({ type = "linear", size = 24, color = "currentColor", className="" }) => {
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
          d="M3 8.181v7.65c0 .65.46 1.43 1.03 1.75l7 3.89c.53.3 1.41.3 1.94 0l7-3.89c.57-.31 1.03-1.1 1.03-1.75v-7.65c0-.65-.46-1.43-1.03-1.75l-7-3.89c-.53-.3-1.41-.3-1.94 0l-7 3.89c-.57.31-1.03 1.1-1.03 1.75z"
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
          d="M3 12.661v3.16c0 .65.46 1.43 1.03 1.75l7 3.89c.53.3 1.41.3 1.94 0l7-3.89c.57-.31 1.03-1.1 1.03-1.75v-7.64c0-.65-.46-1.43-1.03-1.75l-7-3.89c-.53-.3-1.41-.3-1.94 0l-7 3.89c-.57.31-1.03 1.1-1.03 1.75"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
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
          d="M3 8.181v7.65c0 .65.46 1.43 1.03 1.75l7 3.89c.53.3 1.41.3 1.94 0l7-3.89c.57-.31 1.03-1.1 1.03-1.75v-7.65c0-.65-.46-1.43-1.03-1.75l-7-3.89c-.53-.3-1.41-.3-1.94 0l-7 3.89c-.57.31-1.03 1.1-1.03 1.75Z"
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
          d="M3 8.2v7.6c0 .7.4 1.4 1 1.7l7 3.9c.6.3 1.3.3 1.9 0l7-3.9c.6-.4 1-1 1-1.7V8.2c0-.7-.4-1.4-1-1.7l-7-3.9c-.6-.3-1.3-.3-1.9 0L4 6.4c-.6.4-1 1.1-1 1.8Z"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
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
          d="M12 22.43c-.48 0-.95-.11-1.34-.32l-7-3.89c-.81-.45-1.41-1.48-1.41-2.4V8.18c0-.92.61-1.96 1.42-2.4l7-3.89c.76-.42 1.91-.42 2.67 0l7 3.89c.81.45 1.41 1.48 1.41 2.4v7.65c0 .92-.61 1.96-1.42 2.4l-7 3.89c-.37.21-.85.31-1.33.31Zm0-19.36c-.23 0-.45.04-.61.13l-7 3.89c-.33.18-.64.71-.64 1.09v7.65c0 .38.31.91.64 1.09l7 3.89c.31.17.91.17 1.21 0l7-3.89c.33-.18.64-.71.64-1.09V8.18c0-.38-.31-.91-.64-1.09l-7-3.89c-.15-.09-.37-.13-.6-.13Z"
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
          d="M3 8.181v7.65c0 .65.46 1.43 1.03 1.75l7 3.89c.53.3 1.41.3 1.94 0l7-3.89c.57-.31 1.03-1.1 1.03-1.75v-7.65c0-.65-.46-1.43-1.03-1.75l-7-3.89c-.53-.3-1.41-.3-1.94 0l-7 3.89c-.57.31-1.03 1.1-1.03 1.75Z"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }
};

export default Chainlink;
