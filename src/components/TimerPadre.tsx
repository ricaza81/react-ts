import { useState } from 'react';
import { Timer } from './Timer';

export const TimerPadre = () => {
	
const [millisegundos, setMillisegundos] = useState(1000);

	return (
		<>
			<h3 className="mt-5">useEffect - UseRef</h3>
			<span>Milisegundos { millisegundos }</span>

			<button
				onClick={ () => setMillisegundos(1000) }
				className="btn btn-outline-primary mt-2">1000
			</button>

			<button
				onClick={ () => setMillisegundos(2000) }
				className="btn btn-outline-primary mt-2">2000
			</button>


			<Timer milisegundos = { millisegundos } />
		</>
	)
}