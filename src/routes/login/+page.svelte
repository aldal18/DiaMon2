<script>
    let username='';
    let password='';
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

<div class="container">
    <h1>Login</h1>
    <div class="input">
        <input bind:value={username} type="text" placeholder="E-mail" class="form-control" />
    </div>
    <div class="input">
        <input bind:value={password} type="password" placeholder="Kodeord" class="form-control" />
    </div>
    <div class="button-container">
        <button class="btn btn-primary" on:click={login}>Login</button>
        <button class="btn btn-secondary">
            <a href="/" style="text-decoration: none; color: white;" on:click={() => window.location.href = "/"}>Tilbage</a>
        </button>
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

    .input {
        margin-bottom: 20px;
    }

    .input input {
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
        font-size: 16px;
        width: 100%;
        transition: border-color 0.3s ease; /* Smooth transition for input border */
    }

    .input input:focus {
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
</style>
