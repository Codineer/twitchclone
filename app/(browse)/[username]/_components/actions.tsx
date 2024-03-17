"use client";
import { Button } from "@/components/ui/button";
import { onFollow } from "@/actions/follow";
import { useTransition } from "react";
type ActionProps = {
    isFollowing: boolean
}
export const Actions = ({ isFollowing }: ActionProps) => {
    const [isPending, startTransition] = useTransition();
    const onClick = async () => {
        startTransition(async () => {
            await onFollow("123")
        })
    }
    return (
        <Button
            disabled={isFollowing || isPending}
            onClick={onClick}
            variant={"primary"}
        >
            Follow
        </Button>
    )
} 