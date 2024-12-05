window.addEventListener('click', async () => {
    try {
        let response = await fetch('https://catfact.ninja/fact');
        let body = await response.json();
        let fact = body.fact;
        document.getElementById('content').innerHTML=fact + '<br>';
    } catch(e) {
        alert(e);
    }
});