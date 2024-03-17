"use server"

export const onFollow = async (id: string) => {
    try {
        console.log("i m the second as an API call", id)
    }
    catch (error) {
        throw new Error("Internal Error")
    }
}