import emotionStyled from "@emotion/styled";
import { TodoTypes } from "../../../../../../graphql/__generated__/graphql";
import { TTodoQueryVariables } from "../../../../../../types/todoQueryVariables/todoQueryVariables";
import { Checkbox } from "../../../../../common/Checkbox/Checkbox";

const Root = emotionStyled.li`
    display: flex;
    align-items: center;
    gap: 8px;
`;

type TTypeChoiceProps = {
    type: TodoTypes;
    queryVariables: TTodoQueryVariables;
    setQueryVariables: React.Dispatch<React.SetStateAction<TTodoQueryVariables>>;
}

export const TypeChoice = ({
    type,
    queryVariables,
    setQueryVariables,
}: TTypeChoiceProps) => {
    const isActive = queryVariables.filters.types.includes(type);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setQueryVariables(prev => {
        const newQueryVariables = structuredClone(prev);

        const key = newQueryVariables.filters.types.indexOf(type);

        if (key === -1 && event.target.checked === true) {
            newQueryVariables.filters.types.push(type);
        } else if (key !== -1 && event.target.checked === false) {
            newQueryVariables.filters.types.splice(key, 1);
        }

        return newQueryVariables;
    });

    return (
        <Root>
            <Checkbox
                isChecked={isActive}
                onChange={onChange}
            />
            <p>{type}</p>
        </Root>
    );
};