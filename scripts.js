let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}
const populateTodos = () => {
    for (i=0; i<arrayOfTodos.length; i++){
        const list = document.getElementById("todo-list")
        const li = document.createElement("li")
        const text = document.createTextNode(arrayOfTodos[i].title)
        li.appendChild(text)
        list.appendChild(li)
    }
}

const filterTodos = () => {
    reset()
    const input = document.getElementById("userID").value
    const filterarray = arrayOfTodos.filter(result=>result.userId==input) 
    console.log (filterarray)
    for (i=0; i<filterarray.length; i++){
        const list = document.getElementById("todo-list")
        const li = document.createElement("li")
        const text = document.createTextNode(filterarray[i].title)
        li.appendChild(text)
        list.appendChild(li)
    }
    // filteredTodos = filterarray
}

    const removeTodos = () => {
        reset()
        const input = document.getElementById("userID").value
        const filterarray = arrayOfTodos.filter(result=>result.userId!=input) 
        console.log (filterarray)
        for (i=0; i<filterarray.length; i++){
            const list = document.getElementById("todo-list")
            const li = document.createElement("li")
            const text = document.createTextNode(filterarray[i].title)
            li.appendChild(text)
            list.appendChild(li)
        }
    } 

    completeTodos = () => {
        reset()
        const filterarray = arrayOfTodos.filter(result=>result.completed) 
        console.log (filterarray)
        for (i=0; i<filterarray.length; i++){
            const list = document.getElementById("todo-list")
            const li = document.createElement("li")
            const text = document.createTextNode(filterarray[i].title)
            li.appendChild(text)
            list.appendChild(li)
        }
    }

    incompleteTodos = () => {
        reset()
        const filterarray = arrayOfTodos.filter(result=>!result.completed) 
        console.log (filterarray)
        for (i=0; i<filterarray.length; i++){
            const list = document.getElementById("todo-list")
            const li = document.createElement("li")
            const text = document.createTextNode(filterarray[i].title)
            li.appendChild(text)
            list.appendChild(li)
        }
    }


const reset = () => {
    const list = document.getElementById("todo-list")
    list.innerHTML = ""
}

// const filteredTodos = []


// Added Content
// const form = document.querySelector ("container")
// form.addEventListener("submit", e -> {
// e.preventDefault();
// onlanguagechange.innerHTML -""
// })

// const result = words.filter((word) => word.length <10);