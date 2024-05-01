<script>
	import { Input, Button } from '@sveltestrap/sveltestrap';

	

	let username = '';
	let password = '';

	const login = async () => {
		const response = await fetch('/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password })
		});
		const result = await response.text();
		if (response.status === 200) {
			window.location = '/dashboard';
		} else {
			alert('Forkert brugernavn eller password');
		}
	};
</script>

<h1>Login</h1>

<form on:submit|preventDefault={login}>
  <label for="username">Brugernavn:</label>
  <input type="text" id="username" bind:value={username} required>

  <label for="password">Kodeord:</label>
  <input type="password" id="password" bind:value={password} required>

  <button type="submit">Indtast</button>
</form>