import React, {useState, useEffect} from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import FilterButtons from './components/FilterButtons/FilterButtons'
import { v4 } from "uuid";
import { state } from './state/state';
import NewElement from './components/NewElement/NewElement';

function App() {

  const [list, setList] = useState(() => {
    const storedList = localStorage.getItem('list');
    return storedList ? JSON.parse(storedList) : state;
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const RemoveProduct = (id) => {
    let removelist = list.filter(el => el.id !== id)
    setList(removelist)
  }

  const addProduct = (title) => {
    let newProduct = {id: v4(), title: title, isDone: false}
    let newListProduct = [...list, newProduct]
    setList(newListProduct)
  }

  const statusProduct = (id, isDone) => {
    let listsStat = list.find(el => el.id === id)
    if(listsStat){listsStat.isDone = isDone}
    setList([...list])
  }
  const editProductTitle = (id, title) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: title
          };
        } else {
          return item;
        }
      })
    );
  };

  let filteredElements = list
  if(filter === 'done'){
    filteredElements = list.filter(f => f.isDone === true)
  }
  if(filter === 'active'){
    filteredElements = list.filter(f => f.isDone === false)
  }

  const listFilter = (value) => {
    setFilter(value)
  }

  return (<div className="main">
      <h1>What to buy?</h1>
      <div className='TodoList'>
        <FilterButtons filter={filter} listFilter={listFilter}/>
        <TodoList editProductTitle={editProductTitle} List={filteredElements} statusProduct={statusProduct} RemoveProduct={RemoveProduct}/>
        <NewElement addProduct={addProduct}/>
      </div>
    </div>
  );
}

export default App;
