
export interface Todo {
    id: number;
    completed: boolean;
    title: string;
    userId: number;
}

export type Todos = Omit<Todo, 'userId'>[];

export enum TodoStatus {
    COMPLETED = 'completed',
    UNCOMPLETED = 'uncompleted',
    ALL = 'all'
};

export interface TodoState {
    search: string;
    status: TodoStatus;
    todos: Todos
}