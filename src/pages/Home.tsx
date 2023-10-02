import React from 'react';
import axios from '../api/axios';

import HomeLayout from '../layout/HomeLayout';
import MainView from '../components/Home/MainView';
import requests from '../api/request';

import useQueryHook from '../hooks/useQueryHook';

const fetchData = async () => {
	// 현재 상영중인 영화 데이터 가져오기
	const data = await axios.get(requests.fetchNowPlaying);

	const movieId =
		data.data.results[Math.floor(Math.random() * data.data.results.length - 1)]
			.id;

	// 영화 상세 정보 가져오기
	const { data: movieDetail } = await axios.get(`/movie/${movieId}`, {
		params: {
			append_to_response: 'Videos',
		},
	});

	return movieDetail;
};

const Home = () => {
	const queryKey = 'movieDetail';

	const { data, isLoading, error } = useQueryHook(queryKey, fetchData);

	if (isLoading) return <div>로딩중...</div>;
	if (error) return <div>에러가 발생했습니다.</div>;

	console.log(data);

	return (
		<HomeLayout>
			<MainView data={data} />
		</HomeLayout>
	);
};

export default Home;
