import emotionStyled from "@emotion/styled";

const Root = emotionStyled.label`
    display: flex;
    align-items: center;
    cursor: pointer;

    & > input {
        display: none;
    }
`;

const FakeCheckbox = emotionStyled.div`
    width: 20px;
    height: 20px;
    border: 1px solid #444;
    border-radius: 4px;
    background-color: #FFF;
    transition: all 0.2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Icon = emotionStyled.i`
`;

type TCheckboxProps = {
    isChecked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({
    isChecked,
    onChange,
}: TCheckboxProps) => {
    return (
        <Root>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={onChange}
            />
            <FakeCheckbox>
                {
                    isChecked
                        ? <Icon className="fas fa-check" />
                        : null
                }
            </FakeCheckbox>
        </Root>
    );
};