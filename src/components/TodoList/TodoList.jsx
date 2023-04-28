import React from "react"
import List from "./List"

const TodoList = (props) => {
    return(
        <div className="lists">
            {props.List.map((el) => {
                return (
                    <List
                        key={el.id}
                        id={el.id}
                        title={el.title}
                        isDone={el.isDone}
                        statusProduct={props.statusProduct}
                        RemoveProduct={props.RemoveProduct}
                        editProductTitle={props.editProductTitle}
                    />
                );
            })}
        </div>
    )
  }

export default TodoList