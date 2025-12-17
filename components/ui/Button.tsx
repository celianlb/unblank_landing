"use client";
import React from "react";

interface BaseButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    href?: never;
  };

type ButtonAsLink = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses = "inline-block font-semibold text-center transition-all border-2 border-black cursor-pointer no-underline";

  const variantClasses = {
    primary: "bg-[#FF506F] text-black hover:bg-[#FF6080] active:bg-[#FF506F]",
    secondary: "bg-white text-black hover:bg-gray-100 active:bg-white",
    outline: "bg-[#FEF8EE] text-black hover:bg-[#FFE3E8] active:bg-[#FEF8EE]",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-4 py-2.5 text-base rounded-xl",
    lg: "px-6 py-3 text-base rounded-xl",
  };

  const shadowClasses = "shadow-[4px_4px_0px_0px_rgba(13,13,13,1)] hover:shadow-[4px_4px_0px_0px_rgba(13,13,13,1)] active:shadow-[2px_2px_0px_0px_rgba(13,13,13,1)] active:translate-x-[2px] active:translate-y-[2px]";

  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${shadowClasses} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    return (
      <a href={href} className={allClasses} {...(anchorProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={allClasses} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
