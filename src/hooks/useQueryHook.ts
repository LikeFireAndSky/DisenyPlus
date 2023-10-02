import { useQuery } from '@tanstack/react-query';

const queryOptions = {
	staleTime: 5000,
	cacheTime: 1000 * 60,
};

const useQueryHook = (queryKey: string, queryFn: () => Promise<any>) => {
	const { data, isLoading, error } = useQuery(
		[queryKey],
		queryFn,
		queryOptions,
	);
	return { data, isLoading, error };
};

export default useQueryHook;
