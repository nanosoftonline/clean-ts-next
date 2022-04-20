import { Todo } from "../../model/todo";
import { TodoRepository } from "../../repository/todo-repository";

export interface GetTodosUseCase {
    invoke: () => Promise<Todo[]>

}

export class GetTodos implements GetTodosUseCase {
    private todoRepo: TodoRepository
    constructor(_todoRepo: TodoRepository) {
        this.todoRepo = _todoRepo;
    }

    async invoke() {
        return this.todoRepo.getTodos()
    }
}