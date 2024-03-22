import { currentUser } from '@clerk/nextjs'
import React from 'react'
import { getUserByUsername } from '@/lib/user-service'
import { StreamPlayer } from '@/components/stream-player/stream-player'


type CreatorPageProps = {
    params: {
        username: string
    }
}
const CreatorPage = async ({ params }: CreatorPageProps) => {
    const externalUser = await currentUser()
    const user = await getUserByUsername(params.username)

    if (!user || user.externalUserId !== externalUser?.id || !user.stream) {
        throw new Error("unauthorized")
    }

    return (
        <div className='h-full'>
            <div>
                <StreamPlayer
                    user={user}
                    stream={user.stream}
                    isFollowing
                />
            </div>
        </div>
    )
}

export default CreatorPage
