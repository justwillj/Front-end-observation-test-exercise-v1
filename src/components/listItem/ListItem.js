import React from "react";
import Button from "../button/Button.js";
import List from "../list/List.js"

const ListItem = ({buttonKey, buttonType, buttonValue, buttonOnClick, buttonClassName}) => {
    return (
        <li>
            <Button key={buttonKey} type={buttonType} value={buttonValue} onClick={buttonOnClick} className={buttonClassName}/>
        </li>
    )
}
export default ListItem;