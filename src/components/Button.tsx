interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger"; // ? danne meka optional value ekak kyanna
  onClick: () => void;
}

const Button = ({ children, onClick, color }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
