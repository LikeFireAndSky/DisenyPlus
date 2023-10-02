import React from 'react';
import { ThemeProvider } from '@material-tailwind/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

type ProviderProps = {
	children: React.ReactNode;
};

const Provider = ({ children }: ProviderProps) => {
	const queryClient = new QueryClient();

	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<RecoilRoot>
					<ThemeProvider>{children}</ThemeProvider>
					<ReactQueryDevtools initialIsOpen={false} />
				</RecoilRoot>
			</QueryClientProvider>
		</BrowserRouter>
	);
};

export default Provider;
