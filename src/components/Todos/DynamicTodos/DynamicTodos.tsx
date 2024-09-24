import { NetworkStatus } from "@apollo/client";
import emotionStyled from "@emotion/styled";
import { GetTodoListQuery } from "../../../graphql/__generated__/graphql";
import { DynamicContent } from "../../common/DynamicContent/DynamicContent";
import { QueryButtons } from "./QueryButtons/QueryButtons";
import { TodoRow } from "./TodoRow/TodoRow";
import { reloadingStatuses } from "../../../data/networkStatuses";

const TodosUl = emotionStyled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

type TContentProps = {
    todos?: GetTodoListQuery["getTodoList"];
    networkStatus: NetworkStatus;
}

export const DynamicTodos = ({
    todos,
    networkStatus,
}: TContentProps) => {
    let content: React.ReactElement | null = null;

    if (todos) {
        const isLoading = reloadingStatuses.includes(networkStatus);
    
        content = (
            <>
                <QueryButtons
                    isLoading={isLoading}
                />
                <TodosUl>
                    {
                        todos.map((todo) => (
                            <TodoRow
                                key={todo.id}
                                todo={todo}
                            />
                        ))
                    }
                </TodosUl>
            </>
        );
    }

    return (
        <DynamicContent
            networkStatus={networkStatus}
        >
            { content }
        </DynamicContent>
    );
};