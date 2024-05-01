<script>
	let user = '';
	let email = '';
	let pass = '';
	
    
    const addUser = async () => {
    fetch('api/user', {
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
};
</script>
<h1>Bruger registrering</h1>
<div><input bind:value={user} placeholder="user" /></div>
<div><input bind:value={email} placeholder="email" /></div>
<div><input bind:value={pass} placeholder="pass" /></div>

<button on:click={addUser}>Opret bruger </button>


