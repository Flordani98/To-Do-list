export interface IUser{
    id: number | null;
    email: string | null;
    password: string | null;
}

export interface ITask{
    id: number | null;
    description: string | null;
    priority: number | null;
    done: boolean | null;
}