const Arya = {
    zLayerIndex: 100,
    paintContext: null,
    isDrawing: false,
    activePPTSlideCount: 1,

    // EMBEDDED FILE STORAGE MANIFEST VIRTUAL DATABASE
    virtualFileSystem: {
        Root: [
            { name: "System64", type: "folder", icon: "📁" },
            { name: "Users", type: "folder", icon: "📁" },
            { name: "Config_Manifest.sys", type: "file", icon: "⚙️" }
        ],
        Documents: [
            { name: "Specification.docx", type: "file", icon: "📄" },
            { name: "Metrics.xlsx", type: "file", icon: "📊" },
            { name: "Presentation.pptx", type: "file", icon: "📉" }
        ],
        Media: [
            { name: "Wallpaper_Backup.png", type: "file", icon: "🖼️" },
            { name: "Audio_Profile.wav", type: "file", icon: "🎵" }
        ]
    },

    init() {
        // BOOT PROGRESS COUNTER RUNNER
        let currentLoadPercent = 0;
        const bootInterval = setInterval(() => {
            currentLoadPercent += Math.random() * 4;
            if (currentLoadPercent >= 100) {
                currentLoadPercent = 100;
                clearInterval(bootInterval);
                this.displayLoginScreen();
            }
            document.getElementById('loadFill').style.width = currentLoadPercent + "%";
            document.getElementById('bootPercent').innerText = Math.floor(currentLoadPercent) + "%";
        }, 40);

        this.setupExcelGrid();
        this.setupPaintCanvas();
        this.loadDir('Root');
    },

    displayLoginScreen() {
        document.getElementById('bootScreen').classList.add('hidden');
        document.getElementById('loginScreen').classList.remove('hidden');
    },

    verifyLogin() {
        const securityInput = document.getElementById('passInput').value;
        if (securityInput === "1234") {
            document.getElementById('loginScreen').classList.add('hidden');
            document.getElementById('desktop').classList.remove('hidden');
            document.getElementById('startupSound').play().catch(() => {});
            this.awakenSystemDaemons();
        } else {
            alert("SECURITY VIOLATION: INVALID SECURITY PIN MATRICES");
        }
    },

    awakenSystemDaemons() {
        setInterval(() => {
            const timeObject = new Date();
            document.getElementById('systemClock').innerText = timeObject.toLocaleTimeString();
            
            const calendarOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            document.getElementById('systemDate').innerText = timeObject.toLocaleDateString(undefined, calendarOptions);

            if (navigator.getBattery) {
                navigator.getBattery().then(batteryManager => {
                    let levelPercentage = Math.round(batteryManager.level * 100);
                    const levelBarFill = document.getElementById('batteryInner');
                    
                    document.getElementById('batPercentage').innerText = levelPercentage + "%";
                    levelBarFill.style.width = levelPercentage + "%";
                    document.getElementById('chargeIcon').innerText = batteryManager.charging ? "⚡" : "";
                    
                    if (levelPercentage <= 20) levelBarFill.style.backgroundColor = "#ff453a"; 
                    else if (levelPercentage >= 90) levelBarFill.style.backgroundColor = "#32d74b";
                    else levelBarFill.style.backgroundColor = "#ffffff";
                });
            }
        }, 1000);
    },

    setupExcelGrid() {
        const gridTableHandle = document.getElementById('excelGrid');
        for (let rowIdx = 0; rowIdx < 40; rowIdx++) {
            let tableRowElement = document.createElement('tr');
            for (let colIdx = 0; colIdx < 16; colIdx++) {
                let cellDataElement = document.createElement('td');
                cellDataElement.contentEditable = true;
                tableRowElement.appendChild(cellDataElement);
            }
            gridTableHandle.appendChild(tableRowElement);
        }
    },

    setupPaintCanvas() {
        const canvasElement = document.getElementById('paintCanvas');
        this.paintContext = canvasElement.getContext('2d');
        canvasElement.width = 950; 
        canvasElement.height = 600;
        this.paintContext.fillStyle = "#ffffff";
        this.paintContext.fillRect(0, 0, 950, 600);

        canvasElement.onmousedown = (event) => { 
            this.isDrawing = true; 
            this.paintContext.beginPath(); 
            this.paintContext.moveTo(event.offsetX, event.offsetY); 
        };
        canvasElement.onmousemove = (event) => {
            if (!this.isDrawing) return;
            this.paintContext.strokeStyle = document.getElementById('brushColor').value;
            this.paintContext.lineWidth = document.getElementById('brushSize').value;
            this.paintContext.lineCap = "round";
            this.paintContext.lineTo(event.offsetX, event.offsetY);
            this.paintContext.stroke();
        };
        canvasElement.onmouseup = () => this.isDrawing = false;
    },

    clearCanvas() {
        this.paintContext.fillStyle = "#ffffff";
        this.paintContext.fillRect(0, 0, 950, 600);
    },

    addPPTSlide() {
        this.activePPTSlideCount++;
        const targetContainer = document.getElementById('pptThumbnails');
        let thumbnail = document.createElement('div');
        thumbnail.className = 'ppt-thumb';
        thumbnail.innerText = `Slide ${this.activePPTSlideCount}`;
        thumbnail.onclick = () => {
            document.querySelectorAll('.ppt-thumb').forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
            document.getElementById('currentSlide').innerHTML = `<h1 contenteditable="true">Slide ${this.activePPTSlideCount} Title</h1><p contenteditable="true">Presentation text layout module structure.</p>`;
        };
        targetContainer.appendChild(thumbnail);
    },

    loadDir(directoryKey) {
        const explorerWorkspace = document.getElementById('explorerContent');
        explorerWorkspace.innerHTML = '';
        const nodes = this.virtualFileSystem[directoryKey] || [];
        
        nodes.forEach(node => {
            let visualBlock = document.createElement('div');
            visualBlock.className = 'file-node';
            visualBlock.innerHTML = `<span class="file-icon">${node.icon}</span><span class="file-name">${node.name}</span>`;
            explorerWorkspace.appendChild(visualBlock);
        });
        
        document.querySelectorAll('.side-item').forEach(item => {
            if(item.innerText.includes(directoryKey)) item.classList.add('active');
            else item.classList.remove('active');
        });
    },

    navBrowser(actionKey) {
        const frameSim = document.getElementById('browserFrame');
        const inputUrl = document.getElementById('browserUrl');
        
        if (actionKey === 'home') {
            inputUrl.value = "https://arya.net";
            frameSim.innerHTML = `<div class="web-portal"><h1>Welcome to the Arya Sandbox Web</h1><p>Simulated modern hyper-secure proxy web layout engine active.</p></div>`;
        } else {
            frameSim.innerHTML = `<div style="padding:40px; font-family:sans-serif;"><h1>Navigating To Matrix Node...</h1><p>Displaying data layer stream response simulation for: <strong>${inputUrl.value}</strong></p><hr style="margin:20px 0; border:1px solid #ddd;"><p>Data synchronization trace routing complete. Proxy tunnel established successfully.</p></div>`;
        }
    },

    handleDockSearch(event) {
        if (event.key === "Enter") {
            const queryValue = event.target.value.toLowerCase();
            if (queryValue.includes("word") || queryValue.includes("docx")) openApp('windowWrite');
            else if (queryValue.includes("excel") || queryValue.includes("sheet")) openApp('windowGrid');
            else if (queryValue.includes("paint") || queryValue.includes("draw")) openApp('windowPaint');
            else if (queryValue.includes("power") || queryValue.includes("ppt")) openApp('windowPPT');
            else if (queryValue.includes("note") || queryValue.includes("txt")) openApp('windowNote');
            else if (queryValue.includes("web") || queryValue.includes("browser")) openApp('windowBrowser');
            else if (queryValue.includes("file") || queryValue.includes("explorer")) openApp('windowFiles');
            event.target.value = '';
        }
    },

    drag(event, targetElementId) {
        const operationalWindow = document.getElementById(targetElementId);
        operationalWindow.style.zIndex = ++this.zLayerIndex;
        let deltaX = event.clientX - operationalWindow.offsetLeft;
        let deltaY = event.clientY - operationalWindow.offsetTop;

        const draggingFrameMovement = (moveEvent) => {
            operationalWindow.style.left = (moveEvent.clientX - deltaX) + 'px';
            operationalWindow.style.top = (moveEvent.clientY - deltaY) + 'px';
            operationalWindow.style.transform = "none"; 
        };
        
        const dragTermination = () => {
            document.removeEventListener('mousemove', draggingFrameMovement);
            document.removeEventListener('mouseup', dragTermination);
        };
        
        document.addEventListener('mousemove', draggingFrameMovement);
        document.addEventListener('mouseup', dragTermination);
    }
};

function openApp(appWindowId) {
    const windowHandle = document.getElementById(appWindowId);
    windowHandle.classList.remove('hidden');
    windowHandle.style.zIndex = ++Arya.zLayerIndex;
    document.getElementById('startMenu').classList.remove('active');
}

function closeApp(appWindowId) { 
    document.getElementById(appWindowId).classList.add('hidden'); 
}

function toggleStart() { 
    document.getElementById('startMenu').classList.toggle('active'); 
}

// OS SYSTEM COLD INIT TRACE
Arya.init();