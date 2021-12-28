import { useState} from 'react';

interface User{
	uid: string;
	name: string;
}

const tempUser:User = {
	uid: '123456',
	name: 'Zetass'
}

export const User = () => {
	
	//const [user, setUser] = useState<User>(tempUser);
	const [user, setUser] = useState<User>();

	const login = () => {
		setUser({
			uid: '123ABC',
			name: 'Ricardo Z'
		})
	}

	return (
		<div>
			<h3 className="mt-5">Counter: useState</h3>

			<button
			onClick={ login }
			className="btn btn-outline-success">Usuario
			</button>

			{
				(!user)
				?<pre> No hay usuario </pre>
				:<pre> { JSON.stringify( user ) } </pre>
			}

		</div>
	)
}