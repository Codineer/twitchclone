"use client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { onFollow, onUnFollow } from "@/actions/follow";
import { useTransition } from "react";
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

    return (
        <Button
            disabled={isPending}
            onClick={onClick}
            variant={"primary"}
        >
            {isFollowing ? "unfollow" : "follow"}
        </Button>
    )

}