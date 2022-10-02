import { MouseEventHandler } from "react";

interface Props {
  type?: "button" | "submit" | "reset";
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  fullWidth?: boolean;
  secondary?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<Props> = ({
  type = "button",
  label,
  fullWidth,
  onClick,
  secondary,
  icon,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${fullWidth ? "w-full" : "w-auto"} rounded-lg ${
        secondary
          ? "bg-gray-300 focus:ring-gray-400 dark:bg-gray-700 dark:focus:ring-gray-800"
          : "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      } flex items-center px-5 py-2.5 text-center text-sm font-medium focus:outline-none focus:ring-4`}
    >
      {icon}
      <span className={`${icon ? "ml-2" : ""}`}>{label}</span>
    </button>
  );
};

export default Button;
