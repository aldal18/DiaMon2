<style>
    @import './monitorering.css';
</style>

<div class="container">
    <div id="graf-vindue" class="graph-container">
        <!-- Placeholder til graf -->
        <div id="graf" class="graph">
            <!-- Graf vil blive indsat her -->
        </div>
    </div>

    <div class="button-container">
        <button class="button" on:click={dataGet}>Hent Data</button>
        <button on:click={refreshGraph}>Genindlæs side</button>
    </div>
</div>

<script>
    function refreshGraph() {
        location.reload()
    }
    function dataGet() {
        const response = fetch("api/monitordata", {method:"GET"})
        alert(response)
    }
</script>