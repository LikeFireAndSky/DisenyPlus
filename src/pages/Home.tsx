import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

import HomeLayout from '../layout/HomeLayout';
import MainView from '../components/Home/MainView';
import Category from '../components/Home/Category';
import RowCarouselWrapper from '../components/Home/RowCarouselWrapper';
import ActionRowCarousel from '../components/Home/RowCarousel';
import RomanceRowCarousel from '../components/Home/RowCarousel';
import ComedyRowCarousel from '../components/Home/RowCarousel';
import HorrorRowCarousel from '../components/Home/RowCarousel';

import requests from '../api/request';
import useQueryHook from '../hooks/useQueryHook';

// api 관련 함수
const fetchData = async (url: string) => {
	// 현재 상영중인 영화 데이터 가져오기
	const data = await axios.get(url);

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

// 해당 장르의 데이터 가져오기
const getGenreMovieData = async (url: string) => {
	const data = await axios.get(url);
	return data;
};

// useQueryHook 옵션
const defaultQueryOptions = {
	staleTime: 1000,
	cacheTime: 1000,
};

// useQueryHook 쿼리 키
const actionQueryKey = 'action';
const romanceQueryKey = 'romance';
const comedyQueryKey = 'comedy';
const horrorQueryKey = 'horror';
const queryKey = 'movieDetail';

// Home 컴포넌트
const Home = () => {
	const [filter, setFilter] = useState(true);

	// 해당 장르의 데이터 가져오기
	const { data: actionData } = useQueryHook(
		actionQueryKey,
		() => getGenreMovieData(requests.fetchActionMovies),
		{
			staleTime: 1000,
			cacheTime: 1000,
			enabled: filter,
		},
	);

	const { data: romanceData } = useQueryHook(
		romanceQueryKey,
		() => getGenreMovieData(requests.fetchRomanceMovies),
		{
			staleTime: 1000,
			cacheTime: 1000,
			enabled: filter,
		},
	);

	const { data: comedyData } = useQueryHook(
		comedyQueryKey,
		() => getGenreMovieData(requests.fetchComedyMovies),
		{
			staleTime: 1000,
			cacheTime: 1000 * 60 * 5,
			enabled: filter,
		},
	);

	const { data: horrorData } = useQueryHook(
		horrorQueryKey,
		() => getGenreMovieData(requests.fetchHorrorMovies),
		{
			staleTime: 1000,
			cacheTime: 1000 * 60 * 5,
			enabled: filter,
		},
	);

	useEffect(() => {
		setFilter(false);
	}, [actionData, romanceData, comedyData, horrorData]);

	// 현재 상영중인 영화 데이터 가져오기
	const { data, isLoading, error } = useQueryHook(
		queryKey,
		() => fetchData(requests.fetchNowPlaying),
		defaultQueryOptions,
	);

	// 로딩, 에러 처리
	if (isLoading) return <div>로딩중...</div>;
	if (error) return <div>에러가 발생했습니다.</div>;

	return (
		<HomeLayout>
			<MainView data={data} />
			<Category />
			<RowCarouselWrapper>
				<ActionRowCarousel data={actionData} />
				<RomanceRowCarousel data={romanceData} />
				<ComedyRowCarousel data={comedyData} />
				<HorrorRowCarousel data={horrorData} />
			</RowCarouselWrapper>
		</HomeLayout>
	);
};

export default Home;
