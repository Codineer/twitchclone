import React from 'react'
import { LucideIcon } from 'lucide-react'
import { useCreatorSidebar } from '@/store/use-creater-sidebar'

type NavItemProps = {
    icon: LucideIcon,
    label: string,
    href: string,
    isActive: boolean
}

export const NavItem = (
    {
        icon,
        label,
        href,
        isActive
    }
        : NavItemProps) => {
    const { collapsed } = useCreatorSidebar((state) => state)
    return (
        <div>NavItem</div>
    )
}
