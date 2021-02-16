
export interface Todo {
    id: number;
    completed: boolean;
    title: string;
    userId: number;
}

export type Todos = Omit<Todo, 'userId'>[];

export interface TodoState {
    search: string;
    status: 'completed' | 'uncompleted' | 'all';
    todos: Todos
}