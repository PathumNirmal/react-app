import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <AiFillHeart size={30} color="#ff6b81" onClick={toggle} />;
  return <AiOutlineHeart size={30} color="#ff6b81" onClick={toggle} />;
};

export default Like;
