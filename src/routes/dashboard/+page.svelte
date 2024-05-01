<script>
    import { Button } from 'sveltestrap';
    import { onMount } from 'svelte';
  
    let username = "User"; 
  
    
    function navigateToMonitor() {
      window.location = '/monitor';
    }
  
   
    function navigateToSubmit() {
      window.location = '/submit';
    }
  
   
    onMount(async () => {
      const response = await fetch('api/user');
      const data = await response.json();
      username = data.username;
    });
  </script>
  
  <h1>Welcome {username}</h1>
  
  <Button color="primary" on:click={navigateToMonitor}>Monitor</Button>
  <Button color="primary" on:click={navigateToSubmit}>Submit Data</Button>