import React from "react"
import { Logo } from "./_components/logo"
export default function AuthLayout(
    {
        children
    }: { children: React.ReactNode }
) {
    return (
        <div className="h-screen flex items-center flex-col justify-center gap-6">
            <Logo />
            {children}
        </div>
    )
};

