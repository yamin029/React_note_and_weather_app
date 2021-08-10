import React, { useState, useEffect } from 'react'
import './style.css'

const getLocalData = () => {
    const list = localStorage.getItem("myTodoList");
    if (list) {
        return JSON.parse(list);
    }
    else {
        return [];
    }
}

const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [isEditedItem, setIsEditedItem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);
    // Add item function 
    const addItem = () => {
        if (!inputData) {
            alert("Please fill the data");
        }
        else if (inputData && toggleButton) {
            // console.log('target button clicked')
            setItems(
                items.map((curEle) => {
                    if (curEle.id === isEditedItem) {
                        return { ...curEle, name: inputData };
                    }
                    return curEle
                })
            )
            setInputData("");
            setIsEditedItem(null);
            setToggleButton(false);
        }
        else {
            const newInputDataID = {
                id: new Date().getTime().toString(),
                name: inputData
            };

            setItems([...items, newInputDataID]);
            setInputData("");
        }
    };
    const editItem = (index) => {
        const item_todo_edited = items.find((curEle) => {
            return curEle.id === index;
        })
        setInputData(item_todo_edited.name);
        setIsEditedItem(index);
        setToggleButton(true);

    };
    const deleteItem = (index) => {
        const updatedItems = items.filter((curEle) => {
            return curEle.id !== index;
        })
        setItems(updatedItems);
    }
    const deleteAll = () => {
        setItems([]);
    }

    useEffect(() => {
        localStorage.setItem("myTodoList", JSON.stringify(items));
    }, [items]);

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todo-logo" />
                        <figcaption>Add Your Todo List Here ✌</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder=" ✍ Add Item" className="form-control" value={inputData} onChange={(event) => { setInputData(event.target.value) }} />
                        {toggleButton ? <i className="far fa-edit add-btn" onClick={() => { addItem() }}></i> : <i className="fa fa-plus add-btn" onClick={() => { addItem() }}></i>}

                    </div>
                    {/* Show items button */}
                    <div className="showItems">

                        {items.map((curEle) => {
                            return (
                                <div className="eachItem" key={curEle.id}>
                                    <h3>{curEle.name}</h3>
                                    <div className="todo-btn">
                                        <i className="far fa-edit add-btn" onClick={() => { editItem(curEle.id) }}></i>
                                        <i className="far fa-trash-alt add-btn" onClick={() => { deleteItem(curEle.id) }}></i>
                                    </div>
                                </div>
                            );
                        })}


                    </div>
                    {/* Remove all button */}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="REMOVE ALL" onClick={deleteAll}>
                            <span>CHECK LIST</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo
