import React from "react"
import Button from "../button/Button";

const NumberMapper= ({num}, {className}, {buttonOnClick}) =>{
    return (
        <div className={className}>
            {num.map(({id,number})=>
                <Button
                key={id}
                type="button"
                value={number}
                onClick={buttonOnClick}
              />
                )}
        </div>
    )

}
export default NumberMapper
