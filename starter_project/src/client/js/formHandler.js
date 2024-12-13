// Replace checkForName with a function that checks the URL

// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
const serverURL = 'http://localhost:8000/api'

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('urlForm');
    form.addEventListener('submit', handleSubmit);
})

async function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;

    // Check if the URL is valid
    if (Client.checkURL(formText)) {
        // If the URL is valid, send it to the server using the serverURL constant above
        const result = await analyze(formText);

        document.getElementById('results').innerHTML = `
            <pre>
               Sentiment Score: ${result.sentimentScore}
               Subjectivity:  ${result.subjectivity}
               Irony:  ${result.irony}
               Text Snippet:  ${result.textSnippet}
            </pre>
        `;
    }
    else {
        document.getElementById('results').innerHTML = 'Not a link!';
    }
      
}

// Function to send data to the server
async function analyze(urlInput) {
    const response = await fetch(serverURL, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({urlInput})
    });
    try {
        return await response.json();
    } catch(err) {
        console.log(err);
    }
}

// Export the handleSubmit function
export { handleSubmit, analyze };

