import React, { useEffect, useState } from 'react';
import './app.css';
import axios from 'axios';
import MovieCard from './components/MovieCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const client = axios.create({
	baseURL: 'https://api.themoviedb.org/3/discover',
});

function App() {
	const [page, setPage] = useState(1);
	const [movies, setMovies] = useState([]);
	async function getMovies() {
		const response = await client.get(
			`/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=${page}`
		);
		setMovies(response.data.results);
	}

	useEffect(() => {
		getMovies();
		window.scrollTo(0, 0);
	}, [page]);

	return (
		<div style={{ width: '80%', margin: 'auto' }}>
			<div
				style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}
			>
				{movies.map((item) => {
					return (
						<MovieCard
							key={item.id}
							title={item.original_title}
							overview={item.overview}
							rating={item.vote_average}
							photo={item.poster_path}
						/>
					);
				})}
			</div>
			<div className="pages-wrapper">
				<button className="pages" onClick={() => setPage(page > 1 ? page - 1 : page)}>
					<FontAwesomeIcon className="switch-right" icon={faAngleLeft} />
				</button>
				<button className="pages" onClick={() => setPage(page + 1)}>
					<FontAwesomeIcon className="switch-left" icon={faAngleRight} />
				</button>
			</div>
		</div>
	);
}

export default App;
