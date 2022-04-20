import { Todo } from "../../../domain/model/todo";
import TodoDataSource from "../todo-data-source";
import { TodoAPIEntity } from "./entity/todo-api-entity";

const BASE_URL = "https://jsonplaceholder.typicode.com";


export default class TodoAPIDataSourceImpl implements TodoDataSource {

    async createTodo(todo: Todo): Promise<void> {
        await fetch(`${BASE_URL}/todos`, { method: "POST" })
    }
    async getTodos(): Promise<Todo[]> {
        let response = await fetch(`${BASE_URL}/todos`);
        let data = await response.json();
        return data.map((item) => ({
            id: item.id,
            title: item.title,
            isComplete: item.completed,
        }));
    }
}