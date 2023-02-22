import React from "react";
import '../list/List.css'

const List = ({children}) => (
    <ul>
      {children}
    </ul>
  );

  export default List;