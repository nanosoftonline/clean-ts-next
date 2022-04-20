import { Todo } from "../../model/todo";
import { TodoRepository } from "../../repository/todo-repository";

export interface CreateTodoUseCase {
    invoke: (todo: Todo) => Promise<void>

}

export class CreateTodo implements CreateTodoUseCase {
    private todoRepo: TodoRepository
    constructor(_todoRepo: TodoRepository) {
        this.todoRepo = _todoRepo;
    }

    async invoke(todo: Todo) {
        console.log(todo)
        return this.todoRepo.createTodo(todo)
    }
}