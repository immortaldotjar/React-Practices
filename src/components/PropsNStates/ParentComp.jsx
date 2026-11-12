import React, { useState } from 'react'

import ChildComp from './ChildComp'

const ParentComp = () => {
    const [count, setCount] = useState(0)

    return (
        <>
        
            <ChildComp count={count} countfunc={setCount}/>

        </>
    )

}

export default ParentComp