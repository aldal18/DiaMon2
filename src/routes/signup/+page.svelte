<script>
	import { onMount } from 'svelte';

	let user = '';
	let email = '';
	let pass = '';
	

	const fetchUsers = async () => {
		const res = await fetch('api/user');
		users = await res.json();
	};

	const addUser = async () => {
		const res = await fetch('api/user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: user,
				email: email,
				pass: pass
			})
		});
		if (res.status === 409) {
			alert('Brugernavnet er allerede i brug');
		} else if (res.status === 201) {
			alert('Brugeren er oprettet');
			user = email = pass = '';
			fetchUsers();
		} else {
			alert('Der skete en fejl');
		}
	};
	const deleteUser = async (email) => {
		const res = await fetch('api/user', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email
			})
		});
		if (res.status === 200) {
			alert('Brugeren er slettet');
			fetchUsers();
		} else {
			alert('Der skete en fejl');
		}
	};
	onMount(fetchUsers);
</script>

<h1>Indtast dine oplysninger</h1>
<div><input bind:value={user} placeholder="user" /></div>
<div><input bind:value={email} placeholder="email" /></div>
<div><input bind:value={pass} placeholder="pass" /></div>
<button on:click={addUser}>Opret bruger</button>

