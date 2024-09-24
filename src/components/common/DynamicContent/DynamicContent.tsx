import { NetworkStatus } from "@apollo/client";
import emotionStyled from "@emotion/styled";
import { reloadingStatuses } from "../../../data/networkStatuses";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { LoadingMessage } from "./LoadingMessage/LoadingMessage";

const Root = emotionStyled.div<{ isLoading: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;

    ${({ isLoading }) => {
        if (isLoading) {
            return `
                opacity: 0.5;
                pointer-events: none;
            `;
        }
    }}
`;

type TDynamicContentProps = {
    children: React.ReactElement | null;
    networkStatus: NetworkStatus;
}

/**
 * A dynamic content is a content that can be displayed in different states.
 * It can be, in order of descending priority: error, loading, or content.
 * Loading and content are displayed concurrently when refreshing the data.
 * @param children The content to display
 * @param networkStatus The network status of the content
 * @returns 
 */
export const DynamicContent = ({
    children,
    networkStatus,
}: TDynamicContentProps) => {
    const isLoading = networkStatus === NetworkStatus.loading;
    const isReloading = reloadingStatuses.includes(networkStatus);
    const hasError = networkStatus === NetworkStatus.error;

    if (hasError) {
        return <ErrorMessage />;
    }

    return (
        <Root
            isLoading={isReloading}
        >
            { isLoading ? <LoadingMessage /> : children }
            { isReloading ? <Loader /> : null }
        </Root>
    );
};