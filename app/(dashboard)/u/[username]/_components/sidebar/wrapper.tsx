"use client"

import React from 'react'
import { cn } from "@/lib/utils"
import { useCreatorSidebar } from '@/store/use-creater-sidebar'

type WrapperProps = {
    children: React.ReactNode

}


export const Wrapper = ({ children }: WrapperProps) => {

    const { collapsed } = useCreatorSidebar(state => state)
    return (
        <aside className={cn("fixed left-0 flex-col h-full bg-background border-r border-[#2D2E35] z-50", collapsed ? "w-[70px]" :
            "lg:w-60 w-[70px]")}>
            {children}
        </aside>
    )
}

