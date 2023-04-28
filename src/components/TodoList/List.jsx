import React, { useState } from "react";
import style from './List.module.css'

const List = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(props.title);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    props.editProductTitle(props.id, title);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className={style.element}>
        <input type="text" maxlength="28" value={title} onChange={handleTitleChange} />
        <div>
            <button className={style.button_save} onClick={handleSave}>Save</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`${style.element} ${props.isDone ? `${style.is_done}` : ''}`}>
        <input type="checkbox" checked={props.isDone} onChange={(e) => props.statusProduct(props.id, e.currentTarget.checked)} />
        <span onClick={handleEdit}>{props.title}</span>
        <div className={style.element_button}>
            <button className={style.button_delete} onClick={() => props.RemoveProduct(props.id)}>X</button>
        </div>
      </div>
    );
  }
};

export default List;