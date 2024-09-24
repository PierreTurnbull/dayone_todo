
import { useQuery } from "@apollo/client";
import { useQueryVariablesContext } from "../../contexts/QueryVariables/useQueryVariablesContext";
import { GET_TODO_LIST } from "../../graphql/queries/getTodoList";
import { Page } from "../common/Page/Page";
import { DynamicTodos } from "./DynamicTodos/DynamicTodos";

export const Todos = () => {
    const queryVariablesContext = useQueryVariablesContext();

    const { data, previousData, networkStatus } = useQuery(GET_TODO_LIST, {
        variables: queryVariablesContext.gqlQueryVariables,
    });

    return (
        <Page title="Mes Todos">
            <DynamicTodos
                todos={(data ?? previousData)?.getTodoList}
                networkStatus={networkStatus}
            />
        </Page>
    );
};