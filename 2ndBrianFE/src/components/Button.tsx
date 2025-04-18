import { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    text: string;
    startIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
}

const variantClasses = {
    "primary": "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500",
    "secondary": "bg-purple-100 text-purple-700 hover:bg-purple-200 focus:ring-purple-300",
};

const defaultStyles = `
  inline-flex items-center justify-center
  font-medium rounded-md px-4 py-2
  focus:outline-none focus:ring-2 focus:ring-offset-2
  transition ease-in duration-150

`;


export function Button({variant, text, startIcon, onClick, fullWidth, loading}: ButtonProps) {
    return <button onClick={onClick} className={variantClasses[variant] + " " + defaultStyles + `${fullWidth ? " w-full flex justify-center items-center" : ""} ${loading ? "opacity-45	" : "" }`} disabled={loading}>
        <div className="pr-2">
            {startIcon}
        </div>
        {text}
    </button>
}