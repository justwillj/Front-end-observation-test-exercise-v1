import React from "react"

const NumberMapper= ({num}) =>{
    return (
        <div>
            {num.map(({id,number})=>
                (<h2 
                key={id}>{number}
                </h2>)
                )}
        </div>
    )

}
export default NumberMapper
