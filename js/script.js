
Main();

function Main(){
    fetchData('/dnd-app/src/data/143046_Complete.json');
}

function fetchData(url){
    fetch(url)
        .then(response => {
            if (!response.ok){
                throw new Error('Network response was not ok ' + response.statusText);
            };
            return response.text();  // Use text() for initial debugging
        })
        .then(text => {
            try {
                const data = JSON.parse(text);
                console.log(data);
            } catch (e) {
                throw new Error('Failed to parse JSON: ' + e.message + '\nResponse text: ' + text);
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        })
}

