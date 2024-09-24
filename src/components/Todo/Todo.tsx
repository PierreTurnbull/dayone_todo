import { useQuery } from "@apollo/client";
import emotionStyled from "@emotion/styled";
import { Link, useParams } from "react-router-dom";
import { GET_TODO_BY_ID } from "../../graphql/queries/getTodoById";
import { Page } from "../common/Page/Page";
import { DynamicTodo } from "./DynamicTodo/DynamicTodo";

const Content = emotionStyled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Todo = () => {
    const { id } = useParams();

    if (id === undefined) throw new Error("Missing id");

    const { data, previousData, networkStatus } = useQuery(GET_TODO_BY_ID, {
        variables: {
            id: id,
        },
    });

    return (
        <Page title={`Todo ${id}`}>
            <Content>
                <Link to="/todos">Revenir à la liste des todos</Link>
                <DynamicTodo
                    todo={(data ?? previousData)?.getTodoById}
                    networkStatus={networkStatus}
                />
            </Content>
        </Page>
    );
};