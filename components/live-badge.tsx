import { cn } from "@/lib/utils"

type LiveBadgeProps = {
    className?: string
}

import React from 'react'

const LiveBadge = ({ className }: LiveBadgeProps) => {
    return (
        <div className={cn("bg-rose-500 text-center px-1.5 rounded-md uppercase text-[10px] border border-background font-semibold", className)}>
            Live
        </div>
    )
}

export default LiveBadge
