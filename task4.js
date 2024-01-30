//////////////////////////question 5 /// MANIPULATION /////////////////////////////////////
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/postS");


        if (!response.ok) {             ///////////////////////////HERE THE API IS PROPERLY FETCHED OR NOT IS CHECKED 
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
        const data = await response.json();

        const tittles=data.splice(0,5).map((num)=> { return num.title});         //// THE DATA IS SPLICED  TO 5 VALUES
        return tittles;

    } catch (error) {
        console.error('Error fetching data 404 FOUND');
        throw error;
    }
}

////CALLING THE ASYNC FUNCTION
fetchData()
    .then((titles) => {
        console.log('Fetched titles:', titles);
       
    })
    .catch((error) => {
        // Handle errors here
        console.error('Error occurred:', error.message);
    });