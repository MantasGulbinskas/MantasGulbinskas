import React from "react";

export const GreenBtn = (props) => {
    return(<button className={'bg-secondary text-white text-xl rounded-2xl w-48 h-12 mt-16 mb-20 ' + props.style }>{props.name}</button>)

}