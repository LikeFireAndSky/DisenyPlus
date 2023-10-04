import { useQuery } from '@tanstack/react-query';
import { QueryOptions } from './hooks.type';

const useQueryHook = (
	queryKey: string,
	queryFn: () => Promise<any>,
	queryOptions: QueryOptions,
) => {
	const { data, isLoading, error } = useQuery(
		[queryKey],
		queryFn,
		queryOptions,
	);
	return { data, isLoading, error };
};

export default useQueryHook;
