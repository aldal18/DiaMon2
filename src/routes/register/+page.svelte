<script>
    let user = '';
    let email = '';
    let pass = '';
    let errorMessage = '';
    let registrationSuccess = false;

    const addUser = async () => {
        if (!user.trim() || !email.trim() || !pass.trim()) {
            errorMessage = 'Alle felter skal udfyldes';
            return;
        }

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
                registrationSuccess = true;
                setTimeout(() => {
                    window.location.href = '/login'; // Redirect to login page after delay
                }, 2000); // 2 seconds delay
            } else {
                errorMessage = 'Registreringen Mislykkedes!';
            }
        } catch (error) {
            console.error('Error adding user:', error);
            errorMessage = 'Noget gik galt ved brugerregistreringen';
        }
    };

    $: if (registrationSuccess) {
        errorMessage = ''; // Clear any previous error message
    }
</script>

<div class="container">
    <h1>Opret en ny bruger</h1>
    {#if registrationSuccess}
        <p class="success-message">Registreringen Lykkedes! Du vil nu blive omdirigeret til login-siden.</p>
    {/if}
    {#if errorMessage}
        <p class="error-message">{errorMessage}</p>
    {/if}
    <div><input bind:value={user} placeholder="Navn" /></div>
    <div><input bind:value={email} placeholder="E-mail" /></div>
    <div><input type=password bind:value={pass} placeholder="Kodeord" /></div>
    <div class="button-container">
        <button class="btn btn-secondary" on:click={() => window.history.back()}>Tilbage</button>
        <button class="btn btn-primary" on:click={addUser}>Opret bruger</button>
    </div>
</div>

<style>
    /* Add your custom styles here */
    .container {
        max-width: 400px;
        margin: 50px auto;
        padding: 20px;
        border-radius: 10px;
        background-color: #f9f9f9; /* Light background color */
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        text-align: center;
    }

    h1 {
        color: #333; /* Dark text color */
        margin-bottom: 20px;
    }

    input {
        width: 100%;
        padding: 12px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
        font-size: 16px;
        transition: border-color 0.3s ease; /* Smooth transition for input border */
    }

    input:focus {
        outline: none;
        border-color: #007bff; /* Highlight input border color on focus */
    }

    .button-container {
        display: flex;
        justify-content: space-between;
    }

    .button-container button {
        padding: 12px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s ease;
        width: 48%; /* Make the button width 48% to fit two buttons in a row */
    }

    .button-container button.btn-primary {
        background-color: #007bff; /* Primary color */
        color: white;
    }

    .button-container button.btn-secondary {
        background-color: #6c757d; /* Secondary color */
        color: white;
    }

    .button-container button:hover {
        background-color: #0056b3; /* Darker shade of primary color on hover */
    }

    .success-message {
        color: green;
        margin-bottom: 20px;
    }

    .error-message {
        color: red;
        margin-bottom: 20px;
    }
</style>
