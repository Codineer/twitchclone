"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
import { NavItem } from './nav-item'

import {
    Fullscreen,
    KeyRound,
    MessageSquare,
    Users
} from 'lucide-react'

export const Navigation = () => {
    const pathname = usePathname()
    const { user } = useUser()
    const routes = [
        {
            label: "Stream",
            href: `/u/${user?.username}`,
            icon: Fullscreen
        },
        {
            label: "Keys",
            href: `/u/${user?.username}/keys`,
            icon: KeyRound
        },
        {
            label: "Chat",
            href: `/u/${user?.username}/chat`,
            icon: MessageSquare
        },
        {
            label: "Community",
            href: `/u/${user?.username}/community`,
            icon: Users
        },

    ]

    return (
        <ul className=''>
            {routes.map(route => (
                <NavItem
                    key={route.href}
                    label={route.label}
                    icon={route.icon}
                    href={route.href}
                    isActive={pathname === route.href}
                />

            ))}

        </ul>
    )
}
