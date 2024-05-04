<script>
    import { onMount } from 'svelte';

    let userName = '';

    const fetchUserData = async () => {
        try {
            const response = await fetch('/api/user', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const userData = await response.json();
                userName = userData.name;
            } else {
                console.error('Fejl ved hentning af brugerdata');
            }
        } catch (error) {
            console.error('Fejl ved hentning af brugerdata:', error);
        }
    };

    onMount(fetchUserData);

    const goToMonitor = () => {
        window.location.href = '/monitorering'; // Redirect to monitor page
    };

    const logout = async () => {
        // Clear cookies
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

        // Call the logout API endpoint to clear the server-side token
        try {
            await fetch('/api/logout', {
                method: 'DELETE',
                credentials: 'same-origin'
            });
            // Redirect to login page
            window.location.href = '/login';
        } catch (error) {
            console.error('Fejl ved log ud:', error);
        }
    };
</script>

<div class="container">
    <h1>Velkommen til Din Dashboard</h1>
    <p>Hej, {userName}! Vi er glade for at se dig her.</p>
    <div class="features">
        <div class="row">
            <div class="col-md-4">
                <div class="feature-item">
                    <i class="bi bi-heart feature-icon"></i>
                    <h3>Overvåg Din Sundhed</h3>
                    <p>Hold styr på dine sundhedsdata og fremskridt over tid.</p>
                </div>
            </div>
            <div class="col-md-4">
            </div>
            <div class="col-md-4">
            </div>
        </div>
    </div>
    <div class="button-container">
        <button class="btn btn-primary" on:click={goToMonitor}>Se Dine Data <i class="bi bi-graph-up"></i></button>
        <button class="btn btn-secondary" on:click={logout}>Log Ud <i class="bi bi-box-arrow-right"></i></button>
    </div>
</div>

<style>
    .container {
        max-width: 800px;
        margin: 50px auto; 
        padding: 20px;
        border-radius: 10px;
        background-color: #f8f9fa; /* Light background color */
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        text-align: center;
    }

    h1 {
        color: #343a40; /* Dark color for headings */
        margin-bottom: 20px;
    }

    p {
        font-size: 1.25rem;
        color: #6c757d; /* Gray color for text */
    }

    .features {
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .feature-item h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #343a40; /* Dark color for feature headings */
    }

    .feature-item p {
        font-size: 1.1rem;
        color: #6c757d; /* Gray color for feature text */
    }

    .feature-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: #007bff; /* Primary color for feature icons */
    }

    .button-container {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    .button-container button {
        padding: 12px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        transition: background-color 0.3s ease;
        margin: 0 10px;
    }

    .button-container button.btn-primary {
        background-color: #007bff; /* Primary color */
        color: white; /* White font color */
    }

    .button-container button.btn-secondary {
        background-color: #6c757d; /* Secondary color */
        color: white; /* White font color */
    }

    .button-container button:hover {
        background-color: #0056b3; /* Darker shade of primary color on hover */
    }
</style>
