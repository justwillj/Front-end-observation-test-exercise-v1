import React from "react"
import Button from "../button/Button";

const NumberMapper= ({num}, {className}) =>{
    const shuffleButton = () => {};
    return (
        <div className={className}>
            {num.map(({id,number})=>
                <Button
                key={id}
                type="button"
                value={number}
                onClick={shuffleButton}
              />
                )}
        </div>
    )

}
export default NumberMapper
