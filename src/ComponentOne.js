import React from 'react'
import ComponentTwo from "./ComponentTwo";

const ComponentOne = (props)  => {
    return (<div>
            <ComponentTwo text={props.text}/>
        </div>

)
}

export default ComponentOne