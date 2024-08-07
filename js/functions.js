
export function fetchData(url, successFunction){
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
                successFunction(data);
            } catch (e) {
                throw new Error('Failed to parse JSON: ' + e.message + '\nResponse text: ' + text);
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        })
}