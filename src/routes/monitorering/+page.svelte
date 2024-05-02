<svelte:head>
<script src="https://cdn.plot.ly/plotly-latest.min.js" type="text/javascript"></script>
</svelte:head>

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
<form id="datamoninput" on:submit={dataSend}>
    <input name="mondumdata" type="number" step="0.01">
    <button id="" class="button" type="submit">Upload DummyData</button>
</form>
<script>
    function refreshGraph() {
        location.reload()
    }
    async function dataGet() {
        const response = await fetch("api/monitordata", {method:"GET"})
        const jsonData = await response.json();

        const xData = jsonData.map(entry => new Date(entry.datetime));
        const yData = jsonData.map(entry => parseFloat(entry.value));
        const layout = {
            xaxis: {
                type: 'date'
            },
            yaxis: {
                title: 'mg/dL'
            }
        };
        let graphdiv = document.getElementById("graf")
        Plotly.newPlot(graphdiv, [{
            x: xData,
            y: yData,
            mode: 'lines+markers',
            type: 'scatter'
        }], layout);
    }
    async function dataSend(event) {
    event.preventDefault();
    const form = event.target;
    const inputValue = form.elements.mondumdata.value;
    const data = { value: inputValue };
    try {
        const response = await fetch("api/monitordata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            alert("Data upload lykkedes!");
        } else {
            alert("Data upload mislykkedes!");
        }
    } catch (error) {
        alert("Error ved data upload: " + error.message);
    }
}
</script>