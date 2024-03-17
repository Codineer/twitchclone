"use client"

import React from 'react'
import { User } from '@prisma/client'
import { useSidebar } from '@/store/use-sidebar'
import { UserItem, UserItemSkeleton } from './user-item'

const Recommended = ({ data }: { data: User[] }) => {

    const { collapsed } = useSidebar(state => state)
    console.log(data.length)
    const showLabel = !collapsed && data.length > 0

    return (
        <div>
            {showLabel &&
                (
                    <div className='pl-6 mb-4'>
                        <p className='text-sm text-muted-foreground'>
                            Recommended
                        </p>
                    </div>
                )
            }
            <ul className='space-y-2 px-2 '>
                {
                    data.map((user) => {
                        return <UserItem
                            key={user.id}
                            username={user.username}
                            imageUrl={user.imageUrl}
                            isLive={true}
                        />
                    })

                }
            </ul>
        </div>
    )
}

export default Recommended

export const RecommendedSkeleton = () => {
    return (
        <ul>
            {[...Array(3)].map((_, i) => (
                <UserItemSkeleton key={i} />
            ))}
        </ul>
    )
}