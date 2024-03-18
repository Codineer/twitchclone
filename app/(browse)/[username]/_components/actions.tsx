"use client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { onFollow, onUnFollow } from "@/actions/follow";
import { useTransition } from "react";
import { onBlock } from "@/actions/block";
type ActionProps = {
    isFollowing: boolean,
    userId: string
}
export const Actions = ({ isFollowing, userId }: ActionProps) => {
    const [isPending, startTransition] = useTransition();
    const handleFollow = async () => {
        startTransition(async () => {
            try {
                const data = await onFollow(userId)
                toast.success(`You are now following ${data.following.username}`)
            }
            catch (err) {
                toast.error("Something Went Wrong!")

            }
        }
        )
    }
    const handleUnfollow = async () => {
        startTransition(async () => {
            try {
                const data = await onUnFollow(userId)
                toast.success(`You unfollowed ${data.following.username}`)
            }
            catch (err) {
                toast.error("Something Went Wrong!")

            }
        }
        )
    }

    const onClick = () => {
        if (isFollowing) {
            handleUnfollow()
        } else {
            handleFollow()
        }
    }

    const handleBlock = () => {
        startTransition(async () => {

            try {
                const data = await onBlock(userId)
                toast.success("Blocked the User " + `${data.blocked.username}`)
            } catch (error) {
                toast.error("something went wrong")
            }
        })
    }

    return (
        <>
            <Button
                disabled={isPending}
                onClick={onClick}
                variant={"primary"}
            >
                {isFollowing ? "unfollow" : "follow"}
            </Button>
            <Button onClick={handleBlock} disabled={isPending}>
                Block User
            </Button>
        </>
    )

}