<script>
    import {Input, Button} from "@sveltestrap/sveltestrap"
    let username=''
    let password=''
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
            window.location = '/homepage';
        } else {
            alert('Forkert brugernavn eller kodeord');
        }
    };
</script>

<Input bind:value={username} type="text" placeholder="Indtast E-mail" />
<Input bind:value={password} type="password" placeholder="Indtast kodeord" />
<Button color="primary" on:click={login}>Login</Button>