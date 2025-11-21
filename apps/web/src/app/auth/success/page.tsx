'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AuthSuccessPage() {
	const [isSuccess, setSuccessState] = useState<number>(0);
	const params = useSearchParams();
	const access_token = params.get('access_token');

	useEffect(() => {
		if (access_token) {
			localStorage.setItem('access_token', access_token);
			setSuccessState(1);
		} else {
			setSuccessState(-1);
		}
	}, []);

	switch (isSuccess) {
		case 0:
			return <>loading...</>;
		case 1:
			return <>Autorizado!</>;
		case -1:
			return <>No autorizado.</>;
	}
}
