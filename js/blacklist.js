(async function() {
    // --- YOUR DEPLOYED URL ---
    const BLACKLIST_API_URL = 'https://script.google.com/macros/s/AKfycbyNhGaZvsiar-kHmk8Hg0wFpPYo42KJCZ25SspufcS8IeroeyNUs_fQfJviqL7AQQBShA/exec'; 
    // -------------------------

    function triggerGlitchMode() {
        console.clear();
        console.log("L + RATIO + BANNED");

        // 1. Inject "Brainrot" CSS
        const style = document.createElement('style');
        style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap');
            
            * {
                cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewport="0 0 100 100" style="fill:black;font-size:24px;"><text y="50%">🚫</text></svg>'), auto !important;
            }

            body {
                background-color: blue;
                overflow: hidden;
                font-family: 'Comic Sans MS', 'Comic Neue', cursive !important;
                height: 100vh;
                width: 100vw;
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                animation: rainbow-bg 0.5s infinite;
            }

            /* Flashing Background */
            @keyframes rainbow-bg {
                0% { background-color: red; }
                20% { background-color: yellow; }
                40% { background-color: lime; }
                60% { background-color: blue; }
                80% { background-color: magenta; }
                100% { background-color: red; }
            }

            /* Violent Shaking */
            .shaky {
                animation: shake 0.1s infinite;
                display: inline-block;
            }

            @keyframes shake {
                0% { transform: translate(2px, 1px) rotate(0deg); }
                10% { transform: translate(-1px, -2px) rotate(-1deg); }
                20% { transform: translate(-3px, 0px) rotate(1deg); }
                30% { transform: translate(0px, 2px) rotate(0deg); }
                40% { transform: translate(1px, -1px) rotate(1deg); }
                50% { transform: translate(-1px, 2px) rotate(-1deg); }
                60% { transform: translate(-3px, 1px) rotate(0deg); }
                70% { transform: translate(2px, 1px) rotate(-1deg); }
                80% { transform: translate(-1px, -1px) rotate(1deg); }
                90% { transform: translate(2px, 2px) rotate(0deg); }
                100% { transform: translate(1px, -2px) rotate(-1deg); }
            }

            .main-msg {
                font-size: 5rem;
                color: white;
                text-shadow: 4px 4px 0 #000;
                text-align: center;
                z-index: 9999;
                border: 5px solid white;
                padding: 20px;
                background: black;
                transform: rotate(-5deg);
            }

            .emoji-spam {
                position: absolute;
                font-size: 3rem;
                pointer-events: none;
                animation: spin 1s infinite linear;
            }

            @keyframes spin { 100% { transform: rotate(360deg); } }
            
            /* Hide real site content */
            header, footer, .main-container, .data-widget { display: none !important; }
        `;
        document.head.appendChild(style);

        // 2. Nuke the HTML body and set the message
        document.body.innerHTML = `
            <div class="main-msgaky">
                <h1>💀 mb bro ts dont work anymore 💀</h1>
                <p style="font-size: 20px;">(skill issue)</p>
            </div>
        `;

        // 3. The Chaos Loop (Spawns emojis and deep fries the screen)
        const emojis = ['💀', '🤡', '😭', '🗿', '🚫', '🤓', '👎', '📉'];
        
        setInterval(() => {
            // Spawn Random Emojis
            const el = document.createElement('div');
            el.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            el.className = 'emoji-spam';
            el.style.left = Math.random() * 100 + 'vw';
            el.style.top = Math.random() * 100 + 'vh';
            el.style.fontSize = (Math.random() * 5 + 2) + 'rem'; // Random size
            document.body.appendChild(el);

            // Cleanup old emojis to prevent browser crash (we want it slow, not dead)
            if(document.body.childElementCount > 100) {
                document.body.removeChild(document.body.children[1]); // Keep main msg (index 0)
            }

            // Randomly tilt the main text
            const mainMsg = document.querySelector('h1');
            if(mainMsg) {
                mainMsg.style.transform = `rotate(${Math.random() * 20 - 10}deg) scale(${Math.random() * 0.5 + 0.8})`;
                mainMsg.style.color = Math.random() > 0.5 ? 'yellow' : 'white';
            }

        }, 100); // Happens every 100ms
    }

    try {
        // 1. Check Local Storage
        const mbsDataString = localStorage.getItem('mbsData');
        if (!mbsDataString) return;

        const mbsData = JSON.parse(mbsDataString);
        if (!mbsData.nom) return;

        const userName = mbsData.nom.trim().toLowerCase();

        // 2. Fetch Blacklist
        const response = await fetch(BLACKLIST_API_URL);
        if (!response.ok) return; 

        const blacklist = await response.json();

        // 3. Check Match & Execute Brainrot
        if (blacklist.includes(userName)) {
            localStorage.clear(); 
            triggerGlitchMode();
        }

    } catch (e) {
        // Silent fail for normal users
    }
})();
