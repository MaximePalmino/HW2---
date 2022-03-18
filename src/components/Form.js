import { useState } from "react"


const Form = ({todo, setTodo}) => {

    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
    }
      
    const d = new Date();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let s = addZero(d.getSeconds());
    let time = h + ":" + m + ":" + s;


    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [errorTitle, setErrorTitle] = useState('')

    const titleHandler = (e) => {
        setTitle(e.target.value)
    }
    const contentHandler = (e) => {
        setContent(e.target.value)
    }
    const submitFormHandler = (e) => {
        e.preventDefault()
        if (title == '') {
            setErrorTitle('Title is required')
        } else {
            setErrorTitle('')
            setTodo([...todo, {title: title, content: content, id: Math.random(), time: time, isDone: false}])
        }

    }


    return (

        <>
            <form>
                <div className="form__header-container">
                    <h1 className="form__title">My Todo App</h1>
                    <p>This application allows you to create a maximum of 3 tasks for maximum productivity. When a task is finished, you can either delete it or click on it to mark it as "done". Have a nice day!</p>
                </div>
                <div class="form__group field">
                    <input onChange={titleHandler} type="input" class="form__field" placeholder={titleHandler} name="title" required />
                    <label for="title" class="form__label">My task*</label>
                    {errorTitle && <div className="error"> {errorTitle} </div>}
                </div>
                <div class="form__group field">
                    <input onChange={contentHandler} type="input" class="form__field" placeholder="Content" name="content" required />
                    <label for="content" class="form__label">Details</label>
                 </div>
                {
                todo.length == 3 ? <button class="button-52" role="button" disabled>That's enough task for the day :)</button> 
                :  <button onClick={submitFormHandler} class="button-52" role="button">Send a task right now !!</button>
                }
            </form>
        </>
    )


}

export default Form