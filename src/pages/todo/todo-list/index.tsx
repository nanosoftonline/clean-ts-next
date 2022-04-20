import { useEffect } from "react";
import useViewModel from "./view-model";
import Link from "next/link";
import {
    List,
    ListItem,
    ListItemIcon,
    Checkbox,
    ListItemText,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Button,
    AppBar,
    Container,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function TodoListView() {
    const { getTodos, todos } = useViewModel();

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Todo List
                    </Typography>
                    <Link href={"/todo/todo-new"}><a>Add a Todo</a></Link>
                </Toolbar>
            </AppBar>
            <Container>
                <List>
                    {todos.map((todo, i) => {
                        return (
                            <ListItem key={i}>
                                <ListItemIcon>
                                    <Checkbox checked={todo.isComplete} />
                                </ListItemIcon>
                                <ListItemText primary={todo.title} />
                            </ListItem>
                        );
                    })}
                </List>
            </Container>
        </Box>

    );
}