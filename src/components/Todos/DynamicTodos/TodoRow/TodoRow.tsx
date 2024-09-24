import emotionStyled from "@emotion/styled";
import { Todo } from "../../../../graphql/__generated__/graphql";
import moment from "moment";
import { useMutation } from "@apollo/client";
import { Loader } from "../../../common/Loader/Loader";
import { Checkbox } from "../../../common/Checkbox/Checkbox";
import { UPDATE_TODO_STATUS_BY_ID } from "../../../../graphql/mutations/updateTodoStatusById";
import { Link } from "react-router-dom";

const Root = emotionStyled.li<{ isDone: boolean }>`
    padding: 12px;
    border: 1px solid #444;
    border-radius: 4px;
    position: relative;
    display: flex;
    gap: 12px;

    ${({ isDone }) => {
        if (isDone) {
            return `
                background-color: #CEC;
            `;
        }
    }}
`;

const Content = emotionStyled.div<{ isLoading: boolean }>`
    display: flex;
    gap: 16px;
    flex: 1;

    ${({ isLoading }) => {
        if (isLoading) {
            return `
                opacity: 0.5;
                pointer-events: none;
            `;
        }
    }}
`;

const StyledLoader = emotionStyled(Loader)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Meta = emotionStyled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    font-size: 12px;
    color: #AAA;
    font-style: italic;
`;  

const Details = emotionStyled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;

    @media (min-width: 600px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
    }
`;

const Title = emotionStyled(Link)`
`;

const Type = emotionStyled.p`
`;

const CreatedAt = emotionStyled.p`
`;

type TTodoRowProps = {
    todo: Todo;
};

export const TodoRow = ({
    todo,
}: TTodoRowProps) => {
    const [toggleTodo, { loading }] = useMutation(UPDATE_TODO_STATUS_BY_ID);

    return (
        <Root isDone={todo.isDone}>
            <Content isLoading={loading}>
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
                <Details>
                    <Title
                        to={`/todos/${todo.id}`}
                    >
                        {todo.title}
                    </Title>
                    <Meta>
                        <Type>{todo.type}</Type>
                        <CreatedAt>{moment(todo.createdAt).format("YYYY/MM/DD HH:MM")}</CreatedAt>
                    </Meta>
                </Details>
            </Content>
            { loading ? <StyledLoader /> : null }
        </Root>
    );
};