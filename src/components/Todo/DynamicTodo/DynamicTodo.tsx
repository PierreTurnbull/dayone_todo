import { NetworkStatus, useMutation } from "@apollo/client";
import { GetTodoByIdQuery } from "../../../graphql/__generated__/graphql";
import { DynamicContent } from "../../common/DynamicContent/DynamicContent";
import emotionStyled from "@emotion/styled";
import { Checkbox } from "../../common/Checkbox/Checkbox";
import { UPDATE_TODO_STATUS_BY_ID } from "../../../graphql/mutations/updateTodoStatusById";
import { Loader } from "../../common/Loader/Loader";
import moment from "moment";

const Root = emotionStyled.div`
    position: relative;
`;

const Content = emotionStyled.div<{ isLoading: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 16px;

    ${({ isLoading }) => {
        if (isLoading) {
            return `
                opacity: 0.5;
                pointer-events: none;
            `;
        }
    }}
`;

const Row = emotionStyled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
`;

const Label = emotionStyled.span`
    font-weight: bold;
`;

const Value = emotionStyled.span`
    color: #333;
`;

type TDynamicTodoProps = {
    todo?: GetTodoByIdQuery["getTodoById"];
    networkStatus: NetworkStatus;
}

export const DynamicTodo = ({
    todo,
    networkStatus,
}: TDynamicTodoProps) => {
    const [toggleTodo, { loading }] = useMutation(UPDATE_TODO_STATUS_BY_ID);

    let content: React.ReactElement | null = null;

    if (todo) {
        content = (
            <Root>
                <Content
                    isLoading={loading}
                >
                    <Row>
                        <Label>Id : </Label>
                        <Value>{todo.id}</Value>
                    </Row>
                    <Row>
                        <Label>Titre : </Label>
                        <Value>{todo.title}</Value>
                    </Row>
                    <Row>
                        <Label>Texte : </Label>
                        <Value>{todo.text}</Value>
                    </Row>
                    <Row>
                        <Label>Is done : </Label>
                        <Checkbox
                            isChecked={todo.isDone}
                            onChange={(event) => {
                                if (loading) return;
                                toggleTodo({
                                    variables: {
                                        id: todo.id,
                                        isDone: event.target.checked,
                                    },
                                });
                            }}
                        />
                    </Row>
                    <Row>
                        <Label>Date de création : </Label>
                        <Value>{moment(todo.createdAt).format("YYYY/MM/DD HH:MM")}</Value>
                    </Row>
                    <Row>
                        <Label>Type : </Label>
                        <Value>{todo.type}</Value>
                    </Row>
                </Content>
                { loading ? <Loader /> : null }
            </Root>
        );
    }

    return (
        <DynamicContent networkStatus={networkStatus}>
            {content}
        </DynamicContent>
    );
};