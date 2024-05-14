const display = document.getElementById('cve')

async function fetchData() {
    try {
        const res = await fetch('http://localhost:5002/cve');
        const data = await res.json();
        const results = data.cves;
        console.log(results);
        display.innerHTML = '';

        results.map((item) => {
            display.innerHTML += `
                <div>
                    <h3>${item.title}</h3>
                    <p>${item.severity}</p>
                </div>
            `;
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData()