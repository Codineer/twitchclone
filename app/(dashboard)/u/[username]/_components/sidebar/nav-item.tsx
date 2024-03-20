import React from 'react'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import { useCreatorSidebar } from '@/store/use-creater-sidebar'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'
type NavItemProps = {
    icon: LucideIcon,
    label: string,
    href: string,
    isActive: boolean
}

export const NavItem = (
    {
        icon: Icon,
        label,
        href,
        isActive
    }
        : NavItemProps) => {
    const { collapsed } = useCreatorSidebar((state) => state)
    console.log(label)
    return (
        <Button
            asChild
            variant={"ghost"}
            className={cn("w-full h-12", collapsed ? "justify-start" : "justify-start", isActive && "bg-accent")}
        >
            <Link href={href}>
                <div className='flex items-center gap-x-4'>
                    <Icon className={cn("h-4 w-4", collapsed ? "mr-0" : "mr-2")}>
                    </Icon>
                    {!collapsed && (
                        <span>
                            {label}
                        </span>
                    )}
                </div>
            </Link>
        </Button>
    )
}

export const NavItemSkeleton = () => {
    return (
        <li className='flex gap-1 items-center gap-x-4  py-2'>
            <Skeleton className='min-h-[48px] min-w-[48px] rounded-md' />
            <div className='flex-1 hidden lg:block'>
                <Skeleton className='h-6'></Skeleton>
            </div>
        </li >

    )

}

