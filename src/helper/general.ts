import { TodoStatus } from "types/todo";
import { toast } from 'react-toastify';
import {
    ToastContent,
    ToastOptions,
    Id
} from 'react-toastify/dist/types';

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

export const uniqueToast = (toastId: Id, content: ToastContent, options?: Omit<ToastOptions, 'toastId'>) => {
    if (!toast.isActive(toastId)) {
        toast(content, {
            toastId,
            ...options
        });
    }
};