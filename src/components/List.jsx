import Item from './Item';
import './List.css'

const List = ({todos, complete}) => {
    if(todos.length === 0){
        return (
            <div className="empty">
                All tasks completed!
            </div>
        );
    }

    return ( 
        <div className="todo-list">            
            { todos.map((todo, i) => <Item text={todo} key={i} complete={complete}/>) }
        </div>
     );
}
 
export default List;