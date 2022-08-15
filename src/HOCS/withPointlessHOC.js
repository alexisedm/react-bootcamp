import React from 'react';

export function withPointlessHOC(component){

    const Component = component

    return function(props){
        return(
            <Component favortieNumber={22} {...props} />
        )

    }
}