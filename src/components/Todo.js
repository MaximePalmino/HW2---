import { useState } from "react"


const Todo = ({title, content, id, setTodo, todos, time}) => {

    const [cardState, setCardState] = useState(false)

    const deleteTodosHandler = () => {
        setTodo(
            todos.filter((todo) => todo.id !== id)
        )
    }
    const cardStateHandler = () => {
        setCardState(!cardState)
    }


    return (
        <>
        {cardState && (
            <>
                <div className="card__container-true">
                    <div  onClick={cardStateHandler}>
                    <div className="card__header">
                            <h1>{title} - Complete</h1>
                            <p>{time}</p>
                    </div>
                    <p className="content">{content}</p>
                    </div>
                    <button class="button-52 todo__button" onClick={deleteTodosHandler}>Delete</button>
                </div>
            </>
        )}
        {!cardState && (
            <>
                <div className="card__container" >
                    <div onClick={cardStateHandler}>
                        <div className="card__header">
                            <h1>{title}</h1>
                            <p>{time}</p>
                        </div>
                    <p className="content">{content}</p>
                    </div>
                    <button class="button-52 todo__button" onClick={deleteTodosHandler}>Delete</button>
                </div>
            </>
        )}
    </>
    )
}
export default Todo