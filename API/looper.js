const { GetTodos, deleteTodo } = require('./todoUtils');
const cron = require('node-cron');
const api_base = 'http://localhost:3001';
const habits = ["meditating", "working out", "reading"]
const [todos, setTodos] = useState([]);
const GetTodos = () => {
    fetch(api_base + '/todos')
        .then(res => res.json())
        .then(data => setTodos(data))
        .catch((err) => console.error("Error: ", err));
}
const deleteTodo = async id => {
    const data = await fetch(api_base + '/todo/delete/' + id, { method: "DELETE" }).then(res => res.json());

    setTodos(todos => todos.filter(todo => todo._id !== data.result._id));
}

cron.schedule('25 0 * * *', () => {
    console.log("TIMe")
    const currtodos = GetTodos();
    for (let i = 0; i < currtodos.length; i++) {
        deleteTodo(currtodo[i]._id)
    }

    for (let i = 0; i < habits.length; i++) {
        const data = fetch(api_base + "/todo/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({
                text: habits[i]
            })
        }).then(res => res.json());
    } 
}, {
    timezone: 'America/Toronto' // Set your timezone (e.g., 'America/New_York')
});