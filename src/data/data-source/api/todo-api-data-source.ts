import { Todo } from "../../../domain/model/todo";
import TodoDataSource from "../todo-data-source";
import { TodoAPIEntity } from "./entity/todo-api-entity";

const BASE_URL = "https://jsonplaceholder.typicode.com";

interface TypedResponse<T = any> extends Response {
    json<P = T>(): Promise<P>;
}

function myFetch<T>(...args: any): Promise<TypedResponse<T>> {
    return fetch.apply(window, args);
}

export default class TodoAPIDataSourceImpl implements TodoDataSource {
    async getTodos(): Promise<Todo[]> {
        let response = await myFetch<TodoAPIEntity[]>(`${BASE_URL}/todos`);
        let data = await response.json();
        return data.map((item) => ({
            id: item.id,
            title: item.title,
            isComplete: item.completed,
        }));
    }
}