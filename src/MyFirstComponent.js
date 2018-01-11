import React from 'react'

const MyFirstComponent = ({name, showName}) => (
    <div>
        Hello World {showName ? name : null}!
    </div>
)

//function component should return JSX or null

export default MyFirstComponent
