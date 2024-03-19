import { db } from "@/lib/db";
import { getSelf } from "./auth-service";

export const getRecommended = async () => {
    let userId;
    try {
        const self = await getSelf()
        userId = self.id
    } catch {
        userId = null
    }
    let users: any = []
    if (userId) {
        users = await db.user.findMany({
            where: {
                AND: [
                    {
                        NOT: {
                            id: userId
                        }
                    },
                    {
                        NOT: {
                            followedBy: {
                                some: {
                                    followerId: userId
                                }
                            }
                        }
                    },
                    {
                        NOT: {
                            blocking: {
                                some: {
                                    blockedId: userId
                                }
                            }
                        }
                    }
                ]
            }
        })
    } else {

        users = await db.user.findMany({
            orderBy:
            {
                createdAt: "desc"
            }
        })
    }

    return users
}   