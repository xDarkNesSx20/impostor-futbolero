import {baseStyles, variantStyles} from "../../utils/constants.ts";
import type {ReactNode} from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void
    disabled?: boolean
    variant?: 'primary' | 'secondary' | 'danger' | 'success'
    type?: 'button' | 'submit'
    fullWidth?: boolean
}

export default function Button({
                                   children, onClick, variant = 'primary',
                                   disabled = false, type = 'button', fullWidth = false
                               }: ButtonProps) {
    const widthClass: string = fullWidth ? "w-full" : ""

    return (
        <button type={type} onClick={onClick} disabled={disabled}
                className={`${baseStyles} ${variantStyles[variant]} ${widthClass}`}>
            {children}
        </button>
    )
}