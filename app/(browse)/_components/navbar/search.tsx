"use client";
import qs from "query-string";
import { useState } from "react";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Search = () => {
    const router = useRouter();
    const [value, setValue] = useState('')
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value) return;
        const url = qs.stringifyUrl({
            url: "/search",
            query: { term: value },
        }, { skipEmptyString: true })
        //localhost:3000:?term=value
        router.push(url)
        //

    }

    const clearInput = () => {
        setValue('');
    };

    return (
        <div>

            <form onSubmit={onSubmit} className="w-full relative lg:w-[400px] flex items-center">

                <Input placeholder="Search"
                    value={value}
                    className="rounded-r-none focus-visible:ring-0
                    focus-visible:ring-transparent focus-visible:ring-offset-0"
                    onChange={(e) => setValue(e.target.value)}
                ></Input>
                {
                    value && <div
                        className="absolute top-2.5 right-14 h-5 w-5 text-muted-foreground transition hover:opacity-75 cursor-pointer"
                        onClick={clearInput}
                    >
                        <X />
                    </div>
                }
                <Button type="submit" size={"sm"} variant={"secondary"} className="rounded-l-none">
                    <SearchIcon className="h-5 w-5 text-muted-foreground" />
                </Button>

            </form>

        </div>
    )
}