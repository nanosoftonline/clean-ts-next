import { Todo } from "../model/todo";

export interface TodoRepository {
    getTodos(): Promise<Todo[]>;
    createTodo(todo: Todo): Promise<void>;
}