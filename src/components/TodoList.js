import Todo from "./Todo"

const TodoList = ({todos, setTodo}) => {

    return (
        <>
        {todos.slice(0,3).map((todo) => (
             <Todo title={todo.title} content={todo.content} id={todo.id} setTodo={setTodo} todos={todos} time={todo.time} />

        ))}
        </>

    )
}

export default TodoList