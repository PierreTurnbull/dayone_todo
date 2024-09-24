import { TodoTypes } from "../graphql/__generated__/graphql";
import { TTodoPriorityTypes } from "../types/todoQueryVariables/todoQueryVariables";

export const availableTypes: TodoTypes[] = [
    TodoTypes.Communication,
    TodoTypes.Marketing,
    TodoTypes.Rh,
    TodoTypes.Tech,
];

export const priorityTypes: TTodoPriorityTypes[] = [
    TodoTypes.Communication,
    TodoTypes.Marketing,
];