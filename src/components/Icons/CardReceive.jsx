const CardReceive = ({
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
          d="M19.97 8.75h-2.94c-1.27 0-2.03-.76-2.03-2.03V3.78c0-1.27.76-2.03 2.03-2.03h2.94c1.27 0 2.03.76 2.03 2.03v2.94c0 1.27-.76 2.03-2.03 2.03Zm.22-3.31a.62.62 0 0 0-.44-.18.62.62 0 0 0-.44.18l-.18.18V3.38c0-.35-.28-.63-.63-.63s-.63.28-.63.63v2.24l-.18-.18a.628.628 0 0 0-.88 0c-.24.24-.24.64 0 .88l1.25 1.25c.05.05.12.09.19.12.02.01.04.01.06.02.05.02.1.03.16.03h.06c.07 0 .13-.01.2-.04h.02c.07-.03.13-.07.18-.12.01-.01.01-.01.02-.01l1.25-1.25c.24-.24.24-.64-.01-.88ZM2 11.46v5c0 2.29 1.85 4.14 4.14 4.14h11.71c2.29 0 4.15-1.86 4.15-4.15v-4.99c0-.67-.54-1.21-1.21-1.21H3.21c-.67 0-1.21.54-1.21 1.21Zm6 5.79H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75Zm6.5 0h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM13.5 4.608v2.93c0 .67-.54 1.21-1.21 1.21H3.21c-.68 0-1.21-.56-1.21-1.23.01-1.13.46-2.16 1.21-2.91S5 3.398 6.14 3.398h6.15c.67 0 1.21.54 1.21 1.21Z"
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
          d="M2 8.5h12.5M6 16.5h2M10.5 16.5h4"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M2 11.06V7.89c0-3.51.89-4.39 4.44-4.39h8.06M22 14.031v2.08c0 3.51-.89 4.39-4.44 4.39H6.44c-3.55 0-4.44-.88-4.44-4.39v-1.08M20 3.5v6l2-2M20 9.5l-2-2"
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
          d="M20.97 8h-2.94C16.76 8 16 7.24 16 5.97V3.03C16 1.76 16.76 1 18.03 1h2.94C22.24 1 23 1.76 23 3.03v2.94C23 7.24 22.24 8 20.97 8Zm.22-3.31a.62.62 0 0 0-.44-.18.62.62 0 0 0-.44.18l-.18.18V2.63c0-.35-.28-.63-.63-.63s-.63.28-.63.63v2.24l-.18-.18a.628.628 0 0 0-.88 0c-.24.24-.24.64 0 .88l1.25 1.25c.05.05.12.09.19.12.02.01.04.01.06.02.05.02.1.03.16.03h.06c.07 0 .13-.01.2-.04h.02c.07-.03.13-.07.18-.12.01-.01.01-.01.02-.01l1.25-1.25c.24-.24.24-.64-.01-.88Z"
          fill={color}
        ></path>
        <path
          opacity=".4"
          d="M22 7.768v1.23H2v-1.46c0-2.29 1.86-4.14 4.15-4.14H16v2.57c0 1.27.76 2.03 2.03 2.03h2.94c.4 0 .74-.07 1.03-.23Z"
          fill={color}
        ></path>
        <path
          d="M2 9v7.46c0 2.29 1.86 4.14 4.15 4.14h11.7c2.29 0 4.15-1.85 4.15-4.14V9H2Zm6 8.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75Zm6.5 0h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z"
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
          d="M2 8.5h12.5M6 16.5h2M10.5 16.5h4"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M22 14.03v2.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11V7.89c0-3.51.89-4.39 4.44-4.39h8.06M20 3.5v6l2-2M20 9.5l-2-2"
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
          d="M14.5 9.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12.5c.41 0 .75.34.75.75s-.34.75-.75.75ZM8 17.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.5 17.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z"
          fill={color}
        ></path>
        <path
          d="M17.56 21.25H6.44c-3.98 0-5.19-1.2-5.19-5.14V7.89c0-3.94 1.21-5.14 5.19-5.14h8.06c.41 0 .75.34.75.75s-.34.75-.75.75H6.44c-3.14 0-3.69.54-3.69 3.64v8.21c0 3.1.55 3.64 3.69 3.64h11.11c3.14 0 3.69-.54 3.69-3.64v-2.08c0-.41.34-.75.75-.75s.75.34.75.75v2.08c.01 3.95-1.2 5.15-5.18 5.15Z"
          fill={color}
        ></path>
        <path
          d="M20 10.25a.753.753 0 0 1-.75-.75v-6c0-.41.34-.75.75-.75s.75.34.75.75v4.19l.72-.72c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2 2a.75.75 0 0 1-.53.22Z"
          fill={color}
        ></path>
        <path
          d="M20.001 10.251c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z"
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
          d="M2 8.5h12.5M6 16.5h2M10.5 16.5h4"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M22 14.03v2.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11V7.89c0-3.51.89-4.39 4.44-4.39h8.06"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <g
          opacity=".4"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 3.5v6l2-2M20 9.5l-2-2"></path>
        </g>
      </svg>
    );
  }
};

export default CardReceive;
