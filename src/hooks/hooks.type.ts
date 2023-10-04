export type QueryOptions = {
	staleTime?: number;
	cacheTime?: number;
	refetchOnWindowFocus?: boolean;
	refetchOnMount?: boolean;
	refetchOnReconnect?: boolean;
	refetchInterval?: number;
	refetchIntervalInBackground?: boolean;
	enabled?: boolean;
	keepPreviousData?: boolean;
};
