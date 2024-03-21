"use server";
import { revalidatePath } from "next/cache";
import { Stream } from "@prisma/client";
import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";
export const updateStream = async (values: Partial<Stream>) => {
    try {
        const self = await getSelf();
        const selfstream = await db.stream.findUnique({
            where: {
                userId: self.id
            }
        });
        if (!selfstream) {
            throw new Error("Stream Not Found")
        }
        const valueData = {
            names: values.name,
            isChatEnabled: values.isChatEnabled,
            isChatFollowersOnly: values.isChatFollowersOnly,
            isChatDelayed: values.isChatDelayed
        }
        const stream = await db.stream.update({
            where: {
                id: selfstream.id
            },
            data: {
                ...valueData
            }
        })
        revalidatePath(`/u/${self.username}/chat`);
        revalidatePath(`u/${self.username}`);
        revalidatePath(`/${self.username}`)
        return stream
    } catch (error) {
        throw new Error("Internal Error")
    }
}

