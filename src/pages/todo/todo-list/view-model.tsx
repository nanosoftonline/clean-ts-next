import { useState } from "react";
import DataSource from "../../../data/data-source/local-storage/todo-ls-data-source"
import { TodoRepositoryImpl } from "../../../data/repository/todo-repository-impl";
import { Todo } from "../../../domain/model/todo";
import { GetTodos } from "../../../domain/use-case/todo/get-todos";

export default function TodoListViewModel() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const UseCase = new GetTodos(
        new TodoRepositoryImpl(new DataSource())
    );

    async function getTodos() {
        setTodos(await UseCase.invoke());
    }

    return {
        getTodos,
        todos,
    };
}