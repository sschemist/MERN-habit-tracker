// todoUtils.js
import fetch from 'node-fetch';

const api_base = 'http://localhost:3001';

export const GetTodos = async () => {
    try {
        const response = await fetch(api_base + '/todos');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching todos:", error);
        return [];
    }
}

export const deleteTodo = async id => {
    try {
        await fetch(api_base + '/todo/delete/' + id, { method: "DELETE" });
        console.log("Deleted todo with ID:", id);
    } catch (error) {
        console.error("Error deleting todo:", error);
    }
}

// Other functions...
