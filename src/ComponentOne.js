import React from 'react'
import ComponentTwo from "./ComponentTwo";

const ComponentOne = (props) => (
    <div>
        <ComponentTwo text={props.text}/>
    </div>
)

export default ComponentOne