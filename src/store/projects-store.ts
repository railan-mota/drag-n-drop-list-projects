import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { project } from "../models/store";

type projectState = {
    projects: project[];
};

const p1: project = {
    title: "DnD React-TypeScript Project",
    description: "Project of DnD Projects",
    people: 1,
    isFinished: false,
    id: `234`,
};

const initialState: projectState = {
    projects: [p1],
};

const projectSlice = createSlice({
    name: "projects",
    initialState: initialState,
    reducers: {
        add(state, action: PayloadAction<project>) {
            state.projects.push(action.payload);
        },
        finished(state, action: PayloadAction<string>) {
            const index = state.projects.findIndex(
                (project) => project.id === action.payload
            );
            console.log("rodei");
            console.log(state.projects[index]);
            console.log(index);
            state.projects[index].isFinished = true;
        },
        notFinished(state, action: PayloadAction<string>) {
            const index = state.projects.findIndex(
                (project) => project.id === action.payload
            );
            state.projects[index].isFinished = false;
        },
    },
});

export const store = configureStore({
    reducer: {
        projects: projectSlice.reducer,
    },
});

export const { add, finished, notFinished } = projectSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
