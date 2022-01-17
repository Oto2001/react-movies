import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import '../style/movie.css';

function MovieCard({ photo, title, rating, overview }) {
	return (
		<Card style={{ width: '25rem' }} className="card">
			<Card.Img
				variant="top"
				src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2' + photo}
				style={{ width: '100%' }}
			/>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{overview}</Card.Text>
				<Card.Text
					style={{
						display: 'inline',
						padding: '0.8rem 1.2rem',
						borderRadius: '20px',
						backgroundColor: 'yellow',
					}}
					variant="info"
				>
					{rating}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default MovieCard;
