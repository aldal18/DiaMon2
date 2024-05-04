<svelte:head>
    <script src="https://cdn.plot.ly/plotly-latest.min.js" type="text/javascript"></script>
</svelte:head>


<style>
    .container {
        max-width: 800px;
        margin: 50px auto;
        padding: 20px;
        border-radius: 10px;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        text-align: center;
        position: relative;
    }

    h1 {
        color: #007bff;
        margin-bottom: 20px;
    }

    .graph-container {
        margin-bottom: 20px;
        position: relative;
    }
    .graph {
        width: 100%;
        height: 450px;
    }

    .button-container {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }

    .button-container button {
        padding: 12px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s ease;
        margin: 0 10px;
        background-color: #007bff;
        color: white;
        border: none;
    }

    .button-container button.refresh {
        background-color: #007bff;
    }

    .button-container button:hover {
        background-color: #0056b3;
    }

    #datamoninput {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }

    #datamoninput input[type="number"] {
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
        font-size: 16px;
        width: 200px;
        margin-right: 10px;
    }

    #datamoninput button {
        padding: 12px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s ease; 
        background-color: #007bff;
        color: white;
        border: none;
    }

    #datamoninput button:hover {
        background-color: #0056b3;
    }

    .mg-dl-text {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: 18px;
        font-weight: bold;
        color: #007bff;
    }
</style>



<div class="container">
    <div class="graph-container">
        <div id="graf" class="graph">
            <!-- Graph will be inserted here -->
        </div>
        <h1 class="mg-dl-text">mg/dL</h1>
    </div>

    <div class="button-container">
        <button class="button data-button" on:click={dataGet}>Hent Data</button>
        <button class="button refresh" on:click={refreshGraph}>Genindlæs side</button>
    </div>

    <form id="datamoninput" on:submit={dataSend}>
        <input name="mondumdata" type="number" step="0.01" placeholder="Indtast data">
        <button class="button" type="submit">Upload DummyData</button>
    </form>
</div>

<script>
    async function dataGet() {
        try {
            const response = await fetch("api/monitordata", { method: "GET" });
            const jsonData = await response.json();

            const xData = jsonData.map(entry => new Date(entry.datetime));
            const yData = jsonData.map(entry => parseFloat(entry.value));
            const layout = {
                xaxis: {
                    type: 'date'
                },
                yaxis: {
                    title: ''
                }
            };
            
            let graphdiv = document.getElementById("graf")
            Plotly.newPlot(graphdiv, [{
                x: xData,
                y: yData,
                mode: 'lines+markers',
                type: 'scatter'
            }], layout,{displayModeBar:false}
        );
            

            // Enable refresh button after successful data retrieval
            document.querySelector('.button.refresh').disabled = false;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function refreshGraph() {
        // Refresh the graph without reloading the page
        dataGet();
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
