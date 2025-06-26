const apiKey = 'LIVDSRZULELA'; // Ersetze dies durch deinen API-Schlüssel
        const searchTerm = 'Asuna';
        const limit = 20; // Setze das Limit höher, wenn die API dies erlaubt
        let gifs = [];
        let count = 0;

        async function fetchGifs() {
            try {
                const response = await fetch(`https://g.tenor.com/v1/search?q=${searchTerm}&key=${apiKey}&limit=${limit}`);
                const data = await response.json();
                console.log('Received data:', data); // Log the response data

                if (data.results && data.results.length > 0) {
                    gifs = data.results.map(result => result.media[0].gif.url);
                    console.log('GIF URLs:', gifs); // Log the fetched GIF URLs
                    if (gifs.length > 0) {
                        document.querySelector("#imgTag").src = gifs[count];
                    }
                    startCarousel();
                } else {
                    console.error('No results found');
                }
            } catch (error) {
                console.error('Error fetching GIFs:', error);
            }
        }

        document.getElementById("leftButton").addEventListener("click", handleLeft);
        document.getElementById("rightButton").addEventListener("click", handleRight);

        function switchRight() {
            if (gifs.length > 0) {
                count = (count + 1) % gifs.length;
                document.querySelector("#imgTag").src = gifs[count];
            }
        }

        function handleRight() {
            clearInterval(timer);
            switchRight();
            timer = setInterval(switchRight, 5000);
        }

        function switchLeft() {
            if (gifs.length > 0) {
                count = (count - 1 + gifs.length) % gifs.length;
                document.querySelector("#imgTag").src = gifs[count];
            }
        }

        function handleLeft() {
            clearInterval(timer);
            switchLeft();
            timer = setInterval(switchRight, 5000);
        }

        function startCarousel() {
            timer = setInterval(switchRight, 5000);
        }

        let timer;

        // Lade die GIFs beim Start der Seite
        fetchGifs();