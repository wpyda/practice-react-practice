import React from 'react'
import ComponentOne from "./ComponentOne";

const ComponentTwo = (props)  => {
    return (<div>
            <ComponentOne text={props.text}/>
        </div>

)
}

export default ComponentTwo