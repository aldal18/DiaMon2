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
        <button class="button" onclick="hentData()">Hent Data</button>
        <button on:click={refreshGraph}>Genindlæs side</button>
    </div>
</div>

<script>
    function refreshGraph() {
        location.reload()
    }
</script>