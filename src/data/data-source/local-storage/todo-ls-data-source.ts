import { Todo } from "../../../domain/model/todo";
import TodoDataSource from "../todo-data-source";
import { TodoLSEntity } from "./entity/todo-ls-entity";





export default class TodoAPIDataSourceImpl implements TodoDataSource {
    async getTodos(): Promise<Todo[]> {
        let data = []
        let dataString = window.localStorage.getItem("todos")
        if (dataString) {
            data = JSON.parse(dataString)
        }
        return data.map((item: TodoLSEntity) => ({
            id: item.id,
            title: item.title,
            isComplete: item.completed,
        }));
    }

    async createTodo(todo: Todo): Promise<void> {
        let data = [];
        let dataString = window.localStorage.getItem("todos")
        if (dataString) {
            data = JSON.parse(dataString || "[]")
        }
        data.push(todo)
        window.localStorage.setItem("todos", JSON.stringify(data))
    }
}