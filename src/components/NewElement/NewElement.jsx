import React, { useState } from "react"
import style from './NewElement.module.css'

const NewElement = (props) => {
    
    const [newProductTitle, setNewProductTitle] = useState('')
    const addProduct = () => {
        if(newProductTitle.trim() === '') return
        props.addProduct(newProductTitle.trim())
        setNewProductTitle('')
    }

    return(
        <div className={style.New}>
          <input maxlength="28" className={style.input} value={newProductTitle} onChange={(e) => {
                setNewProductTitle(e.currentTarget.value)
            }}/>
          <button className={style.button} onClick={() =>addProduct()}>Add</button>
        </div>
    )
}

export default NewElement