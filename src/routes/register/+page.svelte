<script>
    let user = '';
    let email = '';
    let pass = '';

    const addUser = async () => {
        try {
            const response = await fetch('api/user', {
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
            
            if (response.ok) {
                alert('Registreringen Lykkedes!');
                user = '';
                email = '';
                pass = '';
            } else {
                alert('Registreringen Mislykkedes!');
            }
        } catch (error) {
            console.error('Error adding user:', error);
            alert('Noget gik galt ved brugerregistreringen');
        }
    };
</script>


<h1>Opret en ny bruger</h1>
<div><input bind:value={user} placeholder="Navn" /></div>
<div><input bind:value={email} placeholder="E-mail" /></div>
<div><input type=password bind:value={pass} placeholder="Kodeord" /></div>
<button on:click={addUser}>Opret bruger</button>


