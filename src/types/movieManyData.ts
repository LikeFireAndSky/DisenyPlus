export interface Root {
	data: Data;
	status: number;
	statusText: string;
	headers: Headers;
	config: Config;
	request: Request;
}

export interface Data {
	page: number;
	results: Result[];
	total_pages: number;
	total_results: number;
}

export interface Result {
	adult: boolean;
	backdrop_path?: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface Headers {
	'access-control-allow-origin': string;
	'access-control-expose-headers': string;
	age: string;
	'alt-svc': string;
	'cache-control': string;
	'content-encoding': string;
	'content-type': string;
	date: string;
	server: string;
	vary: string;
	via: string;
	'x-amz-cf-id': string;
	'x-amz-cf-pop': string;
	'x-cache': string;
}

export interface Config {
	transitional: Transitional;
	adapter: string[];
	transformRequest: any[];
	transformResponse: any[];
	timeout: number;
	xsrfCookieName: string;
	xsrfHeaderName: string;
	maxContentLength: number;
	maxBodyLength: number;
	env: Env;
	headers: Headers2;
	baseURL: string;
	params: Params;
	method: string;
	url: string;
}

export interface Transitional {
	silentJSONParsing: boolean;
	forcedJSONParsing: boolean;
	clarifyTimeoutError: boolean;
}

export interface Env {}

export interface Headers2 {
	Accept: string;
}

export interface Params {
	api_key: string;
	language: string;
}

export interface Request {}
