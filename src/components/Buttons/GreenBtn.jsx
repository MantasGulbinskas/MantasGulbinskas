import React from "react";

export const GreenBtn = (props) => {
    return(<button className={'bg-secondary text-white text-xl rounded-2xl w-48 max-sm:h-10 md:h-12 mb-20 ' + props.styles }>{props.name}</button>)

}