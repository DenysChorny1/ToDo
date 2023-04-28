import style from './FilterButtons.module.css'

const FilterButtons = (props) => {
    return(
        <div className={style.Buttons}>
          <button className={props.filter === 'all' ? `${style.active}` : ''} onClick={() => props.listFilter('all')}>All</button>
          <button className={props.filter === 'active' ? `${style.active}` : ''} onClick={() => props.listFilter('active')}>Active</button>
          <button className={props.filter === 'done' ? `${style.active}` : ''} onClick={() => props.listFilter('done')}>Done</button>
        </div>
    )
}

export default FilterButtons