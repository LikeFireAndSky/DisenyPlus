import React, { useEffect } from 'react';
import axios from '../api/axios';
import { useLocation } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce';
import useQueryHook from '../hooks/useQueryHook';

const fetchSearchMovie = async (debouncedSearchTerm: string) => {
	const response = await axios.get(
		`/search/multi?include_adult=false&query=${debouncedSearchTerm}`,
	);
	return response.data.results;
};

const SearchPage = () => {
	const [searhResults, setSearchResults] = React.useState([]);

	const useQuery = () => {
		return new URLSearchParams(useLocation().search);
	};

	let query = useQuery();
	const serchTerm = query.get('q') as string;
	const debouncedSearchTerm = useDebounce(serchTerm, 1000);

	const { data, isLoading } = useQueryHook(
		'searchData',
		() => fetchSearchMovie(debouncedSearchTerm),
		{
			staleTime: 0,
			cacheTime: 1000,
		},
	);

	useEffect(() => {
		if (data) {
			console.log(data);
			setSearchResults(data);
		}
	}, [data, debouncedSearchTerm]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!serchTerm) {
		return <div>검색어를 입력해주세요.</div>;
	}

	return (
		<div>
			{searhResults.map((item: any) => (
				<div key={item.id}>{item.title}</div>
			))}
		</div>
	);
};

export default SearchPage;
