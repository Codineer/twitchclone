"use client"
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react'
import { Hint } from '@/components/hint'
import { useSidebar } from '@/store/use-sidebar'
import React from 'react'
import { Button } from '@/components/ui/button'
export const Toggle = () => {
    const {
        collapsed, onExpand, onCollapse
    } = useSidebar((state) => state);
    const label = collapsed ? "Expand" : "Collapse";
    return (
        <>
            {
                collapsed && (
                    <div className='hidden lg:flex w-full items-center justify-center'>
                        <Button onClick={onExpand} variant={"ghost"}
                            className='h-auto p-2'>
                            <ArrowRightFromLine className='h-4 w-4' />
                        </Button>
                    </div>
                )
            }
            {!collapsed && (
                <div className=' p-3 pl6 mb-3 flex items-center w-full transition'>
                    <p className='font-semibold text-primary'>
                        For you
                    </p>
                    <Hint label={label} side="right" asChild>
                        <Button className='h-auto p-2 ml-auto' variant={"ghost"} onClick={onCollapse}>
                            <ArrowLeftFromLine className='h-4 w-4' />
                        </Button>

                    </Hint>
                </div >
            )}
        </>
    )
}
