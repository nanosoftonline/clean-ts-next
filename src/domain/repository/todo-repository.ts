import { Todo } from "../model/todo";

export interface TodoRepository {
    getTodos(): Promise<Todo[]>;
}