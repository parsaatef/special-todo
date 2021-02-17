import { TodoStatus } from "types/todo";

export const getTodoStatuses = [
    {
        text: 'All',
        value: TodoStatus.ALL
    },
    {
        text: 'Yes',
        value: TodoStatus.COMPLETED
    },
    {
        text: 'No',
        value: TodoStatus.UNCOMPLETED
    } 
];