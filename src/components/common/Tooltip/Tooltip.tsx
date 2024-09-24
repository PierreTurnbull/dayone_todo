import { Tooltip as MuiTooltip } from "@mui/material";

type TTooltipProps = {
    title: string;
    children: React.ReactElement;
}

export const Tooltip = ({
    title,
    children,
}: TTooltipProps) => {
    return (
        <MuiTooltip
            title={title}
        >
            {children}
        </MuiTooltip>
    );
};