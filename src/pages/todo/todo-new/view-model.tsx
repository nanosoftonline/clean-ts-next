import { useState } from "react";
import DataSource from "../../../data/data-source/local-storage/todo-ls-data-source";
import { TodoRepositoryImpl } from "../../../data/repository/todo-repository-impl";
import { Todo } from "../../../domain/model/todo";
import { CreateTodo } from "../../../domain/use-case/todo/create-todo";

export default function TodoListViewModel() {
    const [title, setTitle] = useState("");

    const UseCase = new CreateTodo(
        new TodoRepositoryImpl(new DataSource())
    );

    async function onChange(text) {
        setTitle(text);
    }

    async function save() {
        UseCase.invoke({ id: null, isComplete: false, title })
    }

    return {
        save,
        onChange,
        title,
    };
}