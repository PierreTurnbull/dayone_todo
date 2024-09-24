import emotionStyled from "@emotion/styled";
import { ForwardedRef, forwardRef } from "react";
import { Tooltip } from "../Tooltip/Tooltip";

const Filter = emotionStyled.i<{ isActive: boolean }>`
    height: 28px;
    aspect-ratio: 1;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    ${({ isActive }) => {
        if (isActive) {
            return `
                background-color: #DDD;
            `;
        }
    }}
    &:hover {
        background-color: #EEE;
    }
`;

type TQueryButtonProps = {
    label: string;
    iconName: string;
    isActive?: boolean;
    onClick: () => void;
}

/**
 * A query button is a button used to control the state of a query, which includes filters, order, etc.
 */
export const QueryButton = forwardRef((
    {
        label,
        iconName,
        isActive = false,
        onClick,
    }: TQueryButtonProps,
    ref: ForwardedRef<HTMLElement>,
) => {
    return (
        <Tooltip
            title={label}
        >
            <Filter
                ref={ref}
                className={`fas fa-${iconName}`}
                isActive={isActive}
                onClick={onClick}
            />
        </Tooltip>
    );
});