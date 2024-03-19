import React from 'react'
import { Wrapper } from './wrapper'
import { Toggle } from './toggle'
import { Navigation } from './navigation'
const Sidebar = () => {
    return (
        <Wrapper>
            <Toggle />
            <Navigation />
            Sidebar
        </Wrapper>
    )
}

export default Sidebar
