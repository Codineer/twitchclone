import { User } from '@prisma/client'
import { Wrapper } from './wrapper'
import { Toggle } from './toggle'
import Recommended,
{ RecommendedSkeleton }
    from './recommended'
import { Following, FollowingSkeletion } from './following'
import { getRecommended } from '@/lib/recommended-service'
import { getFollowedUsers } from '@/lib/follow-service'

const Sidebar = async () => {
    const recommended: User[] = await getRecommended();
    const following = await getFollowedUsers()
    return (

        <Wrapper>
            <Toggle />
            <div className='space-y-4 pt-4 lg:pt-0'>
                <Following data={following} />
                <Recommended data={recommended} />
            </div>
        </Wrapper>

    )
}

export default Sidebar
export const SidebarSkeleton = () => {
    return (
        <aside className='fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50'>
            <FollowingSkeletion />
            <RecommendedSkeleton />
        </aside>
    )
}
