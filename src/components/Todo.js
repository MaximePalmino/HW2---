import { useEffect, useState } from "react"


const Todo = ({title, content, id, setTodo, todos, time, isDone}) => {

    const [cardState, setCardState] = useState(false)

    const deleteTodosHandler = () => {
        setTodo(
            todos.filter((todo) => todo.id !== id)
        )
    }
    const cardStateHandler = () => {
            setCardState(!cardState)

            todos.map((todo) => {if (todo.id == id) {
                todo.isDone = !todo.isDone
            }})
            console.log(todos)

    }


    return (
        <>
        {cardState && (
            <>
                <div className="card__container-true">
                    <div  onClick={cardStateHandler}>
                    <div className="card__header">
                            <h1><span className="content-true"gi>{title}</span> - Done</h1>
                            <p>{time} {isDone}</p>
                    </div>
                    <p className="content content-true">{content}</p>
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