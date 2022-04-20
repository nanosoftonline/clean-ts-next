import { Todo } from "../../domain/model/todo";
import { TodoRepository } from "../../domain/repository/todo-repository";
import TodoDataSource from "../data-source/todo-data-source";

export class TodoRepositoryImpl implements TodoRepository {
    dataSource: TodoDataSource;

    constructor(_datasource: TodoDataSource) {
        this.dataSource = _datasource;
    }

    async getTodos(): Promise<Todo[]> {
        return this.dataSource.getTodos();
    }
}