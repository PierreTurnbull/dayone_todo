import { TodoTypes } from "../../graphql/__generated__/graphql";

export const initialQueryVariables = {
    orderBy: null,
    filters: {
        types: [
            TodoTypes.Communication,
            TodoTypes.Marketing,
            TodoTypes.Rh,
            TodoTypes.Tech,
        ],
        isDone: false,
        usesPriorityTypes: false,
    },
};