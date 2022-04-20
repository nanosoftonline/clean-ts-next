import { useEffect } from "react";
import useViewModel from "./view-model";
import {
    AppBar,
    Box,
    Button,
    Container,
    FormControl, FormGroup, FormHelperText, IconButton, Input, InputLabel, TextField, Toolbar, Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router'
import { ChevronLeft } from "@mui/icons-material";

export default function TodoListView() {
    const router = useRouter()
    const { title, save, onChange } = useViewModel();



    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        onClick={router.back}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <ChevronLeft />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        New Todo
                    </Typography>
                    <Button color="inherit" onClick={() => {
                        save()
                        router.back()
                    }}>Save</Button>
                </Toolbar>
            </AppBar>
            <Container style={{ marginTop: 20 }}>
                <FormControl>
                    <InputLabel htmlFor="my-input">Title</InputLabel>
                    <Input value={title} id="my-input" aria-describedby="my-helper-text" onChange={e => onChange(e.target.value)} />
                    <FormHelperText id="my-helper-text">New Todo Title</FormHelperText>
                </FormControl>

            </Container>
        </Box>
    );
}