import { NetworkStatus } from "@apollo/client";

/**
 * All network statuses corresponding to reloading data.
 */
export const reloadingStatuses = [
    NetworkStatus.setVariables,
    NetworkStatus.refetch,
    NetworkStatus.fetchMore,
    NetworkStatus.poll,
];