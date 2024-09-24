import emotionStyled from "@emotion/styled";
import { Popover as MuiPopover } from "@mui/material";

const Root = emotionStyled.div`
    padding: 12px;
`;

type TPopoverProps = {
    children: React.ReactNode;
    anchorEl: HTMLDivElement | null;
    onClose: () => void;
}

export const Popover = ({
    children,
    anchorEl,
    onClose,
}: TPopoverProps) => {
    return (
        <MuiPopover
            open={anchorEl !== null}
            anchorEl={anchorEl}
            onClose={onClose}
        >
            <Root>
                {children}
            </Root>
        </MuiPopover>
    );
};