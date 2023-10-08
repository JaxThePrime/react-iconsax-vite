const Flash = ({ type = "linear", size = 24, color = "currentColor", className="" }) => {
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
          d="M17.91 10.72h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-.8.91-6.77 7.7c-.93 1.05-.54 1.91.86 1.91h3.09v7.2c0 1.68.91 2.02 2.02.76l.8-.91 6.77-7.7c.93-1.05.54-1.91-.86-1.91Z"
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
          d="M14.82 7.02v-3.5c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.93 1.05-.54 1.92.87 1.92h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09"
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
          d="M12 3.672v16.66l-.8.91c-1.11 1.26-2.02.92-2.02-.76v-7.2H6.09c-1.4 0-1.79-.86-.86-1.91l6.77-7.7Z"
          fill={color}
        ></path>
        <path
          opacity=".4"
          d="M18.77 12.63 12 20.33V3.67l.8-.91c1.11-1.26 2.02-.92 2.02.76v7.2h3.09c1.4 0 1.79.86.86 1.91Z"
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
          d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z"
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
          d="M9.99 22.75c-.2 0-.36-.04-.48-.09-.4-.15-1.08-.64-1.08-2.19v-6.45H6.09c-1.34 0-1.82-.63-1.99-1-.17-.38-.32-1.15.56-2.16l7.57-8.6c1.02-1.16 1.85-1.08 2.25-.93.4.15 1.08.64 1.08 2.19v6.45h2.34c1.34 0 1.82.63 1.99 1 .17.38.32 1.15-.56 2.16l-7.57 8.6c-.71.81-1.33 1.02-1.77 1.02Zm3.94-20.01c-.03.04-.24.14-.57.52l-7.57 8.6c-.28.32-.32.52-.32.56.02.01.2.11.62.11h3.09c.41 0 .75.34.75.75v7.2c0 .5.09.72.13.78.03-.04.24-.14.57-.52l7.57-8.6c.28-.32.32-.52.32-.56-.02-.01-.2-.11-.62-.11h-3.09c-.41 0-.75-.34-.75-.75v-7.2c.01-.5-.09-.71-.13-.78Z"
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
          d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z"
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

export default Flash;
