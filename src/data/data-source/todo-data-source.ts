
import { Todo } from "../../domain/model/todo";

export default interface TodoDataSource {
    getTodos(): Promise<Todo[]>;
    createTodo(todo: Todo): Promise<void>
}