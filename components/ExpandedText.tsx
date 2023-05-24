import React, { useState } from "react";

interface Props {
  children: string;
  maxChar?: number;
}

const ExpandedText = ({ children, maxChar = 100 }: Props) => {
  const [isExpanded, setExpand] = useState(false);

  if (children.length <= maxChar) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChar);
  return (
    <p>
      {text}...
      <button onClick={() => setExpand(!isExpanded)}>
        {isExpanded ? "less" : "more"}
      </button>
    </p>
  );
};

export default ExpandedText;
