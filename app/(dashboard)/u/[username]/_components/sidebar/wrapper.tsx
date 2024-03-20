"use client"

import React from 'react'
import { cn } from "@/lib/utils"
import { useCreatorSidebar } from '@/store/use-creater-sidebar'
import { NavigationSkeleton } from './navigation'
import { useIsClient } from 'usehooks-ts'

type WrapperProps = {
    children: React.ReactNode

}


export const Wrapper = ({ children }: WrapperProps) => {
    const isClient = useIsClient()
    const { collapsed } = useCreatorSidebar(state => state)

    if (!isClient) return (
        <aside className="p-2 fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
            <NavigationSkeleton />
        </aside>
    );
    return (
        <aside className={cn(" p-2 fixed left-0 flex-col h-full bg-background border-r border-[#2D2E35] z-50", collapsed ? "w-[70px]" :
            "lg:w-60 w-[70px]")}>
            {children}
        </aside>
    )
}

