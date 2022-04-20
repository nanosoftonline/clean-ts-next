import { useState } from "react";
import TodoAPIDataSourceImpl from "../../data/data-source/api/todo-api-data-source";
import { TodoRepositoryImpl } from "../../data/repository/todo-repository-impl";
import { Todo } from "../../domain/model/todo";
import { GetTodos } from "../../domain/use-case/todo/get-todos";

export default function TodoListViewModel() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const UseCase = new GetTodos(
        new TodoRepositoryImpl(new TodoAPIDataSourceImpl())
    );

    async function getTodos() {
        setTodos(await UseCase.invoke());
    }

    return {
        getTodos,
        todos,
    };
}