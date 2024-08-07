
export const fetchData = async(url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error("Response is not JSON");
        }
        const data = await response.json();
        return data;
    } catch(error) {
        console.error("There was an error getting the data.", error);
        throw error;
    }
} 
