import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import LiveBadge from "./live-badge";
import React from 'react'


const avatarSizes = cva(
    "",
    {

        variants: {
            size: {
                default: "h-8 w-8",
                lg: "h-14 w-14"
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
)

type UserAvatarProps
    =
    {
        imageUrl: string,
        username: string,
        isLive?: boolean,
        showBadge?: boolean,
    } & VariantProps<typeof avatarSizes>


export const UserAvatar = ({ imageUrl, isLive, size, username, showBadge }: UserAvatarProps) => {
    const canShowBadge = showBadge && isLive
    return (
        <div className=" relative">
            <Avatar className={cn(isLive && "ring-2 ring-rose-500 border-background", avatarSizes({ size })
            )}>
                <AvatarImage src={imageUrl} className="object-cover" />
                <AvatarFallback>
                    {username[0].toUpperCase()}
                    {username[username.length - 1].toUpperCase()}
                </AvatarFallback>
            </Avatar>
            {
                canShowBadge && (
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                        <LiveBadge />
                    </div>
                )
            }

        </div>
    )
}


type UserAvatarSkeletonProps = {

} & VariantProps<typeof avatarSizes>

export const UserAvatarSkeleton = ({
    size,
}: UserAvatarSkeletonProps) => {
    return (
        <Skeleton className={cn("rounded-full",
            avatarSizes({ size })
        )} />

    )
}