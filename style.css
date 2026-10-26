const Arya = {
    zLayerIndex: 100,
    paintContext: null,
    isDrawing: false,
    activePPTSlideCount: 1,
    
    // CALCULATOR REGISTERS
    calcCurrentInput: '0',
    calcFormulaBuffer: '',
    isResetOnNextNum: false,

    // CALENDAR PARADIGM REGISTERS
    calCurrentDate: new Date(),
    calSelectedDateString: '',
    calEventsDatabase: {},

    // TASK ENGINE DATA MATRIX
    taskDataList: [
        { id: 1, text: "Initialize operational mainframe cluster nodes", priority: "high", done: false },
        { id: 2, text: "Audit sandbox system integrity frameworks", priority: "medium", done: true }
    ],

    // CLOCK APP MEMORY SYSTEMS
    alarmArmedNodeTime: "",
    isAlarmActiveTriggered: false,
    
    timerEngineInstance: null,
    timerTotalSecondsRemaining: 0,
    isTimerRunningState: false,

    stopwatchEngineInstance: null,
    stopwatchElapsedMiliseconds: 0,
    isStopwatchRunningState: false,
    stopwatchLapCounter: 0,

    // RETRO ARCADE PONG PHYSICS REGISTERS
    pongCanvasCtx: null,
    pongAnimationLoopId: null,
    pongScores: { player: 0, cpu: 0 },
    pongBall: { x: 0, y: 0, vx: 0, vy: 0, radius: 7 },
    pongPlayerPaddleY: 150,
    pongCpuPaddleY: 150,
    pongPaddleHeight: 70,
    pongPaddleWidth: 10,
    pongPaddleSpeedCpu: 3.8,

    // QUANTUM FLAPPY BIRD DATA NODES
    flappyCanvasCtx: null,
    flappyLoopId: null,
    isFlappyGameOver: false,
    flappyScoreCount: 0,
    flappyBestScore: 0,
    flappyBirdModel: { x: 60, y: 200, radius: 11, velocity: 0, gravity: 0.28, thrust: -5.4 },
    flappyPipesList: [],
    flappyPipeSpacingFrames: 110,
    flappyFrameTicker: 0,

    // SPACE INVADERS REGISTERS
    siCanvasCtx: null,
    siLoopId: null,
    siGameOver: false,
    siScore: 0,
    siPlayer: { x: 280, y: 480, width: 40, height: 16, speed: 5 },
    siBullets: [],
    siInvaders: [],
    siInvaderConfig: { rows: 4, cols: 9, width: 30, height: 20, padding: 15, offsetTop: 50, offsetLeft: 30, direction: 1, speed: 1.0 },
    siKeys: { ArrowLeft: false, ArrowRight: false },

    // NOVA SNAKE REGISTERS
    snakeCtx: null, snakeLoopId: null, snakeState: 'ready', snakeBody: [], snakeDir: { x: 1, y: 0 }, snakeQueue: [],
    snakeFood: { x: 15, y: 10 }, snakeScore: 0, snakeBest: 0, snakeDelay: 130, snakeLastStep: 0, snakeParticles: [],
    snakeCols: 24, snakeRows: 20, snakeCell: 20,

    // SYSTEM TRAY STATE
    net: { wifi: true, bt: true, dnd: false },
    dockSeen: new Set(),
    daemonsStarted: false,

    // SYSTEM APPLICATION DIRECTORY
    appReferenceDirectory: {
        'windowBrowser': { name: 'Quantum Web', icon: '🌐' },
        'windowFiles': { name: 'File Explorer', icon: '🗂️' },
        'windowWrite': { name: 'Arya Word', icon: '📄' },
        'windowGrid': { name: 'Arya Excel', icon: '📊' },
        'windowPPT': { name: 'PowerPoint', icon: '📉' },
        'windowPaint': { name: 'Paint Studio', icon: '🎨' },
        'windowNote': { name: 'Notepad Buffer', icon: '📝' },
        'windowCalc': { name: 'Matrix Calc', icon: '🧮' },
        'windowCalendar': { name: 'Calendar Node', icon: '📅' },
        'windowTasks': { name: 'Task Engine', icon: '📋' },
        'windowClockApp': { name: 'Chronos Clock', icon: '⏱️' },
        'windowPingPong': { name: 'Arya Pong', icon: '🏓' },
        'windowFlappy': { name: 'Flappy Bird', icon: '🐦' },
        'windowTerminal': { name: 'Terminal', icon: '💻' },
        'windowSnake': { name: 'Nova Snake', icon: '🐍' },
        'windowSpaceInvaders': { name: 'Space Invaders', icon: '👾' }
    },

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
        }, 20);

        this.setupExcelGrid();
        this.setupPaintCanvas();
        this.loadDir('Root');
        this.renderCalendarMatrix();
        this.renderTaskEngineList();
        this.setupPongEngine();
        this.setupFlappyEngine();
        this.setupSpaceInvaders();
        this.setupSnake();
        this.renderDockTrack();

        document.querySelectorAll('.app-tile').forEach((t, i) => t.style.setProperty('--i', i));
        document.getElementById('passInput').addEventListener('keydown', e => { if (e.key === 'Enter') this.verifyLogin(); });

        // Focus a window when clicked anywhere inside it
        document.addEventListener('mousedown', e => {
            const w = e.target.closest('.app-window');
            if (w && w.id && w.style.zIndex != this.zLayerIndex && !w.classList.contains('closing')) this.focusApp(w.id);
        });
        // Click outside closes popovers and the start menu
        document.addEventListener('click', e => {
            if (!e.target.closest('.pop, .mb-btn')) this.closePopovers();
            if (!e.target.closest('#startMenu, .hud-dock-system')) document.getElementById('startMenu').classList.remove('active');
        });
        window.addEventListener('keydown', e => {
            if (e.key === 'Escape') { this.closePopovers(); document.getElementById('startMenu').classList.remove('active'); }
            if (!this.isFocused('windowSnake')) return;
            const map = { ArrowUp: [0, -1], KeyW: [0, -1], ArrowDown: [0, 1], KeyS: [0, 1], ArrowLeft: [-1, 0], KeyA: [-1, 0], ArrowRight: [1, 0], KeyD: [1, 0] };
            if (map[e.code]) { e.preventDefault(); this.snakeTurn(map[e.code][0], map[e.code][1]); }
            else if (e.code === 'Space' || e.code === 'KeyP') { e.preventDefault(); this.snakeToggle(); }
        });

        // Bind global hotkeys for space jumps and movement across games
        window.addEventListener('keydown', (e) => {
            const fbWin = document.getElementById('windowFlappy');
            const siWin = document.getElementById('windowSpaceInvaders');

            if (e.code === 'Space') {
                if (fbWin && !fbWin.classList.contains('hidden') && !fbWin.classList.contains('minimized') && fbWin.style.zIndex == this.zLayerIndex) {
                    e.preventDefault();
                    this.triggerFlappyImpulse();
                } else if (siWin && !siWin.classList.contains('hidden') && !siWin.classList.contains('minimized') && siWin.style.zIndex == this.zLayerIndex) {
                    e.preventDefault();
                    if (this.siGameOver) this.restartSpaceInvaders();
                    else this.fireSiBullet();
                }
            }

            if (siWin && !siWin.classList.contains('hidden') && !siWin.classList.contains('minimized') && siWin.style.zIndex == this.zLayerIndex) {
                if (e.code === 'ArrowLeft') { e.preventDefault(); this.siKeys.ArrowLeft = true; }
                if (e.code === 'ArrowRight') { e.preventDefault(); this.siKeys.ArrowRight = true; }
            }
        });

        window.addEventListener('keyup', (e) => {
            if (e.code === 'ArrowLeft') this.siKeys.ArrowLeft = false;
            if (e.code === 'ArrowRight') this.siKeys.ArrowRight = false;
        });
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
            const card = document.querySelector('.glass-auth-card');
            const footer = document.querySelector('.auth-footer');
            card.classList.remove('shake'); void card.offsetWidth; card.classList.add('shake');
            document.getElementById('passInput').value = '';
            footer.textContent = 'INVALID PIN · TRY AGAIN';
            footer.classList.add('error');
            setTimeout(() => { footer.textContent = 'PIN: 1234'; footer.classList.remove('error'); }, 1800);
        }
    },

    awakenSystemDaemons() {
        if (this.daemonsStarted) return;
        this.daemonsStarted = true;
        this.setupBattery();
        this.syncTray();
        this.tickClock();
        setInterval(() => this.tickClock(), 1000);
        setTimeout(() => this.notify('Welcome back, Arya', 'All systems operational.', '🧿'), 900);
    },

    tickClock() {
        const t = new Date();
        const hhmm = t.toTimeString().split(' ')[0].substring(0, 5);
        document.getElementById('systemClock').innerText = t.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
        document.getElementById('systemDate').innerText = t.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
        if (this.alarmArmedNodeTime === hhmm && !this.isAlarmActiveTriggered) this.fireSystemAlarmSequence();
    },

    setupBattery() {
        const fill = document.getElementById('batteryInner'), pct = document.getElementById('batPercentage'),
              ch = document.getElementById('chargeIcon'), ccB = document.getElementById('ccBat'), ccS = document.getElementById('ccBatState');
        const paint = (lvl, charging, known) => {
            const p = Math.round(lvl * 100);
            fill.style.width = p + '%';
            fill.style.background = charging ? '#32d74b' : (p <= 20 ? '#ff453a' : '#fff');
            pct.textContent = known ? p + '%' : '';
            ch.textContent = charging ? '⚡' : '';
            ccB.textContent = known ? p + '%' : '—';
            ccS.textContent = !known ? 'Status unavailable' : charging ? 'Charging' : 'On battery';
        };
        if (!navigator.getBattery) { paint(1, false, false); return; }
        navigator.getBattery().then(b => {
            const update = () => paint(b.level, b.charging, true);
            update();
            b.addEventListener('levelchange', update);
            b.addEventListener('chargingchange', update);
        }).catch(() => paint(1, false, false));
    },

    // ADVANCED HOLOGRAPHIC COMPUTATION LOGIC
    pressCalc(key) {
        const display = document.getElementById('calcDisplay');
        const formula = document.getElementById('calcFormula');

        if (!isNaN(key) || key === '.') {
            if (this.isResetOnNextNum || this.calcCurrentInput === '0') {
                this.calcCurrentInput = key === '.' ? '0.' : key;
                this.isResetOnNextNum = false;
            } else {
                if (key === '.' && this.calcCurrentInput.includes('.')) return;
                this.calcCurrentInput += key;
            }
            display.value = this.calcCurrentInput;
        } 
        else if (['+', '-', '*', '/'].includes(key)) {
            this.calcFormulaBuffer += this.calcCurrentInput + ' ' + key + ' ';
            this.calcCurrentInput = '0';
            formula.innerText = this.calcFormulaBuffer;
            display.value = '0';
        } 
        else if (key === '=') {
            const fullFormulaExpression = this.calcFormulaBuffer + this.calcCurrentInput;
            formula.innerText = fullFormulaExpression + ' =';
            let calculatedOutput = '0';
            try {
                let sanitizedMathString = fullFormulaExpression.replace(/×/g, '*').replace(/÷/g, '/');
                let rawEvaluationResult = eval(sanitizedMathString);
                calculatedOutput = String(Number(rawEvaluationResult.toFixed(8))); 
                this.pushCalcStreamNode(fullFormulaExpression, calculatedOutput);
            } catch (err) {
                calculatedOutput = 'Error';
            }
            this.calcCurrentInput = calculatedOutput;
            display.value = this.calcCurrentInput;
            this.calcFormulaBuffer = '';
            this.isResetOnNextNum = true;
        } 
        else if (key === 'C') {
            this.calcCurrentInput = '0';
            this.calcFormulaBuffer = '';
            display.value = '0';
            formula.innerText = '';
        } 
        else if (key === 'back') {
            this.calcCurrentInput = this.calcCurrentInput.slice(0, -1);
            if (this.calcCurrentInput === '') this.calcCurrentInput = '0';
            display.value = this.calcCurrentInput;
        } 
        else if (['sin', 'cos', 'tan', 'sqrt'].includes(key)) {
            let initialNumericValue = parseFloat(this.calcCurrentInput);
            let evaluationBuffer = initialNumericValue;
            if (key === 'sin') evaluationBuffer = Math.sin(initialNumericValue * Math.PI / 180);
            if (key === 'cos') evaluationBuffer = Math.cos(initialNumericValue * Math.PI / 180);
            if (key === 'tan') evaluationBuffer = Math.tan(initialNumericValue * Math.PI / 180);
            if (key === 'sqrt') evaluationBuffer = Math.sqrt(initialNumericValue);
            
            let structuredOutput = String(Number(evaluationBuffer.toFixed(6)));
            this.pushCalcStreamNode(`${key}(${initialNumericValue})`, structuredOutput);
            this.calcCurrentInput = structuredOutput;
            display.value = this.calcCurrentInput;
            this.isResetOnNextNum = true;
        }
        else if (key === 'pow') {
            this.calcFormulaBuffer += this.calcCurrentInput + ' ** ';
            this.calcCurrentInput = '0';
            formula.innerText = this.calcFormulaBuffer;
            display.value = '0';
        }
    },

    pushCalcStreamNode(expression, output) {
        const targetContainer = document.getElementById('calcStreamHistory');
        const emptyNotice = targetContainer.querySelector('.empty-stream-notice');
        if(emptyNotice) emptyNotice.remove();

        const node = document.createElement('div');
        node.className = 'stream-item';
        node.innerHTML = `
            <div class="st-form">${expression}</div>
            <div class="st-res">${output}</div>
        `;
        targetContainer.appendChild(node);
        targetContainer.scrollTop = targetContainer.scrollHeight;
    },

    clearCalcStream() {
        document.getElementById('calcStreamHistory').innerHTML = `<div class="empty-stream-notice">No logs recorded</div>`;
    },

    setupExcelGrid() {
        const gridTableHandle = document.getElementById('excelGrid');
        for (let rowIdx = 0; rowIdx < 25; rowIdx++) {
            let tableRowElement = document.createElement('tr');
            for (let colIdx = 0; colIdx < 10; colIdx++) {
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
        canvasElement.width = 780; canvasElement.height = 450;
        this.paintContext.fillStyle = "#ffffff";
        this.paintContext.fillRect(0, 0, 780, 450);

        canvasElement.onmousedown = (event) => { this.isDrawing = true; this.paintContext.beginPath(); this.paintContext.moveTo(event.offsetX, event.offsetY); };
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

    clearCanvas() { this.paintContext.fillStyle = "#ffffff"; this.paintContext.fillRect(0, 0, 780, 450); },
    
    addPPTSlide() {
        this.activePPTSlideCount++;
        const targetContainer = document.getElementById('pptThumbnails');
        let thumbnail = document.createElement('div');
        thumbnail.className = 'ppt-thumb';
        thumbnail.innerText = `Slide ${this.activePPTSlideCount}`;
        thumbnail.onclick = () => {
            document.querySelectorAll('.ppt-thumb').forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
            document.getElementById('currentSlide').innerHTML = `<h1 contenteditable="true">Slide ${this.activePPTSlideCount} Title</h1><p contenteditable="true">Presentation content layout matrix node systems.</p>`;
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
    },

    navBrowser(actionKey) {
        const frameSim = document.getElementById('browserFrame');
        const inputUrl = document.getElementById('browserUrl');
        if (!this.net.wifi) {
            frameSim.innerHTML = `<div class="web-portal"><h1>📡 No internet connection</h1><p style="opacity:.6;margin-top:10px">Turn on Wi-Fi in Control Center to continue.</p></div>`;
            return;
        }
        if (actionKey === 'home') {
            inputUrl.value = "https://arya.net";
            frameSim.innerHTML = `<h1>Welcome to Arya Sandbox Web</h1>`;
        } else {
            frameSim.innerHTML = `<h3>Proxy Environment Simulation for: ${inputUrl.value}</h3>`;
        }
    },

    // QUANTUM TEMPORAL CALENDAR CORE MATRIX ENGINE
    renderCalendarMatrix() {
        const matrixContainer = document.getElementById('calGridMatrix');
        const titleLabel = document.getElementById('calMonthYearTitle');
        matrixContainer.innerHTML = '';

        const year = this.calCurrentDate.getFullYear();
        const month = this.calCurrentDate.getMonth();

        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        titleLabel.innerText = `${monthNames[month]} ${year}`;

        const firstDayIndex = new Date(year, month, 1).getDay();
        const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
        const realToday = new Date();

        for (let i = 0; i < firstDayIndex; i++) {
            let emptyCell = document.createElement('div');
            emptyCell.className = 'cal-cell empty';
            matrixContainer.appendChild(emptyCell);
        }

        for (let day = 1; day <= totalDaysInMonth; day++) {
            let cell = document.createElement('div');
            cell.className = 'cal-cell';
            cell.innerText = day;

            let stringKey = `${year}-${month + 1}-${day}`;
            
            if (day === realToday.getDate() && month === realToday.getMonth() && year === realToday.getFullYear()) {
                cell.classList.add('today');
            }
            if (stringKey === this.calSelectedDateString) {
                cell.classList.add('selected');
            }
            if (this.calEventsDatabase[stringKey] && this.calEventsDatabase[stringKey].length > 0) {
                cell.classList.add('has-events');
            }

            cell.onclick = () => this.selectCalDate(stringKey, day);
            matrixContainer.appendChild(cell);
        }
    },

    changeCalMonth(offset) {
        this.calCurrentDate.setMonth(this.calCurrentDate.getMonth() + offset);
        this.renderCalendarMatrix();
    },

    selectCalDate(dateString, dayNumber) {
        this.calSelectedDateString = dateString;
        document.getElementById('calSelectedDayLabel').innerText = `Cycle: ${dateString}`;
        this.renderCalendarMatrix();
        this.updateCalEventsStream();
    },

    addCalEvent() {
        if (!this.calSelectedDateString) {
            alert("MATRIX ERROR: Select a valid operational cycle node first.");
            return;
        }
        const textInput = document.getElementById('calEventInput');
        if (!textInput.value.trim()) return;

        if (!this.calEventsDatabase[this.calSelectedDateString]) {
            this.calEventsDatabase[this.calSelectedDateString] = [];
        }

        this.calEventsDatabase[this.calSelectedDateString].push(textInput.value.trim());
        textInput.value = '';
        this.renderCalendarMatrix();
        this.updateCalEventsStream();
    },

    removeCalEvent(index) {
        if (!this.calSelectedDateString || !this.calEventsDatabase[this.calSelectedDateString]) return;
        this.calEventsDatabase[this.calSelectedDateString].splice(index, 1);
        this.renderCalendarMatrix();
        this.updateCalEventsStream();
    },

    updateCalEventsStream() {
        const stream = document.getElementById('calEventsStream');
        stream.innerHTML = '';
        const events = this.calEventsDatabase[this.calSelectedDateString] || [];

        if (events.length === 0) {
            stream.innerHTML = `<div style="font-size:11px; color:#3a3a3e; text-align:center; margin-top:20px; font-style:italic;">No tasks logged</div>`;
            return;
        }

        events.forEach((eventText, idx) => {
            let node = document.createElement('div');
            node.className = 'cal-event-node';
            node.innerHTML = `<span>${eventText}</span><button onclick="Arya.removeCalEvent(${idx})">✖</button>`;
            stream.appendChild(node);
        });
    },

    // QUANTUM TO-DO CORE OPERATIONS ENGINE
    renderTaskEngineList() {
        const streamContainer = document.getElementById('taskActiveStream');
        streamContainer.innerHTML = '';

        if (this.taskDataList.length === 0) {
            streamContainer.innerHTML = `<div class="task-empty-notice">Operational tasks cleared. Mainframe idle.</div>`;
            return;
        }

        this.taskDataList.forEach(task => {
            const taskNode = document.createElement('div');
            taskNode.className = `task-node-item ${task.priority}-p ${task.done ? 'completed' : ''}`;
            
            taskNode.innerHTML = `
                <div class="task-chk-box ${task.done ? 'checked' : ''}" onclick="Arya.toggleTaskState(${task.id})">
                    ${task.done ? '✓' : ''}
                </div>
                <div class="task-text-lbl">${task.text}</div>
                <button class="task-del-btn" onclick="Arya.deleteTaskPayload(${task.id})">✖</button>
            `;
            streamContainer.appendChild(taskNode);
        });
    },

    addTaskPayload() {
        const inputField = document.getElementById('taskHeadlineInput');
        const textValue = inputField.value.trim();
        if (!textValue) return;

        const selectedPriority = document.querySelector('input[name="taskPriority"]:checked').value;
        
        const newTaskObject = {
            id: Date.now(),
            text: textValue,
            priority: selectedPriority,
            done: false
        };

        this.taskDataList.unshift(newTaskObject);
        inputField.value = '';
        this.renderTaskEngineList();
    },

    toggleTaskState(taskId) {
        this.taskDataList = this.taskDataList.map(task => {
            if (task.id === taskId) task.done = !task.done;
            return task;
        });
        this.renderTaskEngineList();
    },

    deleteTaskPayload(taskId) {
        this.taskDataList = this.taskDataList.filter(task => task.id !== taskId);
        this.renderTaskEngineList();
    },

    clearCompletedTasks() {
        this.taskDataList = this.taskDataList.filter(task => !task.done);
        this.renderTaskEngineList();
    },

    // CHRONOS LABORATORY MANAGEMENT ARCHITECTURE
    switchClockTab(tabId) {
        document.querySelectorAll('.clock-tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.clock-sub-pane').forEach(pane => pane.classList.add('hidden'));

        if (tabId === 'alarm') {
            document.getElementById('tabBtnAlarm').classList.add('active');
            document.getElementById('clockSectionAlarm').classList.remove('hidden');
        } else if (tabId === 'timer') {
            document.getElementById('tabBtnTimer').classList.add('active');
            document.getElementById('clockSectionTimer').classList.remove('hidden');
        } else if (tabId === 'stopwatch') {
            document.getElementById('tabBtnStopwatch').classList.add('active');
            document.getElementById('clockSectionStopwatch').classList.remove('hidden');
        }
    },

    setSystemAlarmNode() {
        const inputTime = document.getElementById('alarmTimeInput').value;
        if (!inputTime) return;
        this.alarmArmedNodeTime = inputTime;
        this.isAlarmActiveTriggered = false;
        document.getElementById('alarmActiveStatus').innerText = `Alarm armed for sequence sync: [${inputTime}]`;
    },

    fireSystemAlarmSequence() {
        this.isAlarmActiveTriggered = true;
        document.getElementById('alarmTriggeredOverlay').classList.remove('hidden');
        document.getElementById('alarmSound').play().catch(() => {});
        this.notify('Alarm', `Armed time ${this.alarmArmedNodeTime} reached`, '🚨');
    },

    silenceActiveAlarm() {
        document.getElementById('alarmSound').pause();
        document.getElementById('alarmSound').currentTime = 0;
        document.getElementById('alarmTriggeredOverlay').classList.add('hidden');
        this.alarmArmedNodeTime = "";
        document.getElementById('alarmActiveStatus').innerText = "No alarms armed in memory";
    },

    toggleTimerEngine() {
        const startBtn = document.getElementById('timerStartBtn');
        if (this.isTimerRunningState) {
            clearInterval(this.timerEngineInstance);
            this.isTimerRunningState = false;
            startBtn.innerText = "RESUME";
            startBtn.className = "clock-action-btn success";
        } else {
            if (this.timerTotalSecondsRemaining <= 0) {
                const mins = parseInt(document.getElementById('timerMinInput').value) || 0;
                const secs = parseInt(document.getElementById('timerSecInput').value) || 0;
                this.timerTotalSecondsRemaining = (mins * 60) + secs;
            }
            if (this.timerTotalSecondsRemaining <= 0) return;

            this.isTimerRunningState = true;
            startBtn.innerText = "HALT";
            startBtn.className = "clock-action-btn primary";

            this.timerEngineInstance = setInterval(() => {
                this.timerTotalSecondsRemaining--;
                this.updateTimerDisplayReadout();

                if (this.timerTotalSecondsRemaining <= 0) {
                    clearInterval(this.timerEngineInstance);
                    this.isTimerRunningState = false;
                    document.getElementById('alarmSound').play().catch(() => {});
                    alert("TIMER TIMEBOX REACHED!");
                    document.getElementById('alarmSound').pause();
                    this.resetTimerEngine();
                }
            }, 1000);
        }
    },

    resetTimerEngine() {
        clearInterval(this.timerEngineInstance);
        this.timerTotalSecondsRemaining = 0;
        this.isTimerRunningState = false;
        document.getElementById('timerDisplay').innerText = "00:00";
        const startBtn = document.getElementById('timerStartBtn');
        startBtn.innerText = "INITIALIZE";
        startBtn.className = "clock-action-btn success";
        document.getElementById('timerMinInput').value = '';
        document.getElementById('timerSecInput').value = '';
    },

    updateTimerDisplayReadout() {
        const display = document.getElementById('timerDisplay');
        const minutes = Math.floor(this.timerTotalSecondsRemaining / 60);
        const seconds = this.timerTotalSecondsRemaining % 60;
        display.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    },

    toggleStopwatchEngine() {
        const startBtn = document.getElementById('stopwatchStartBtn');
        if (this.isStopwatchRunningState) {
            clearInterval(this.stopwatchEngineInstance);
            this.isStopwatchRunningState = false;
            startBtn.innerText = "RUN";
            startBtn.className = "clock-action-btn success";
        } else {
            this.isStopwatchRunningState = true;
            startBtn.innerText = "PAUSE";
            startBtn.className = "clock-action-btn primary";
            
            let previousTimestamp = Date.now();
            this.stopwatchEngineInstance = setInterval(() => {
                const structuralNow = Date.now();
                this.stopwatchElapsedMiliseconds += (structuralNow - previousTimestamp);
                previousTimestamp = structuralNow;
                this.updateStopwatchDisplayReadout();
            }, 10);
        }
    },

    logStopwatchLap() {
        if (this.stopwatchElapsedMiliseconds === 0) return;
        this.stopwatchLapCounter++;
        const streamBox = document.getElementById('stopwatchLapsStream');
        const formattedTimestampText = document.getElementById('stopwatchDisplay').innerText;
        
        const lapItem = document.createElement('div');
        lapItem.className = 'stopwatch-lap-item';
        lapItem.innerHTML = `<span>LAP NODE #${this.stopwatchLapCounter}</span><span>${formattedTimestampText}</span>`;
        streamBox.insertBefore(lapItem, streamBox.firstChild);
    },

    resetStopwatchEngine() {
        clearInterval(this.stopwatchEngineInstance);
        this.stopwatchElapsedMiliseconds = 0;
        this.isStopwatchRunningState = false;
        this.stopwatchLapCounter = 0;
        document.getElementById('stopwatchDisplay').innerText = "00:00.00";
        document.getElementById('stopwatchStartBtn').innerText = "RUN";
        document.getElementById('stopwatchStartBtn').className = "clock-action-btn success";
        document.getElementById('stopwatchLapsStream').innerHTML = '';
    },

    updateStopwatchDisplayReadout() {
        const totalSecs = Math.floor(this.stopwatchElapsedMiliseconds / 1000);
        const displayMins = Math.floor(totalSecs / 60);
        const displaySecs = totalSecs % 60;
        const displayCentiseconds = Math.floor((this.stopwatchElapsedMiliseconds % 1000) / 10);

        document.getElementById('stopwatchDisplay').innerText = 
            `${String(displayMins).padStart(2, '0')}:${String(displaySecs).padStart(2, '0')}.${String(displayCentiseconds).padStart(2, '0')}`;
    },

    // RETRO COGNITIVE PING PONG ARCADE CORE
    setupPongEngine() {
        const canvas = document.getElementById('pongCanvas');
        this.pongCanvasCtx = canvas.getContext('2d');
        canvas.width = 660;
        canvas.height = 400;

        canvas.onmousemove = (e) => {
            const bounds = canvas.getBoundingClientRect();
            const relativeY = e.clientY - bounds.top;
            this.pongPlayerPaddleY = relativeY - (this.pongPaddleHeight / 2);
            if(this.pongPlayerPaddleY < 0) this.pongPlayerPaddleY = 0;
            if(this.pongPlayerPaddleY > canvas.height - this.pongPaddleHeight) {
                this.pongPlayerPaddleY = canvas.height - this.pongPaddleHeight;
            }
        };

        this.resetPongBall();
    },

    resetPongBall() {
        const canvas = document.getElementById('pongCanvas');
        this.pongBall.x = canvas.width / 2;
        this.pongBall.y = canvas.height / 2;
        this.pongBall.vx = (Math.random() > 0.5 ? 1 : -1) * (3.5 + Math.random() * 1.5);
        this.pongBall.vy = (Math.random() > 0.5 ? 1 : -1) * (2 + Math.random() * 2);
    },

    startPongExecutionLoop() {
        if (this.pongAnimationLoopId) return;
        const frameExecutionNode = () => {
            this.updatePongPhysics();
            this.drawPongMatrix();
            this.pongAnimationLoopId = requestAnimationFrame(frameExecutionNode);
        };
        this.pongAnimationLoopId = requestAnimationFrame(frameExecutionNode);
    },

    stopPongExecutionLoop() {
        if (this.pongAnimationLoopId) {
            cancelAnimationFrame(this.pongAnimationLoopId);
            this.pongAnimationLoopId = null;
        }
    },

    updatePongPhysics() {
        const canvas = document.getElementById('pongCanvas');
        this.pongBall.x += this.pongBall.vx;
        this.pongBall.y += this.pongBall.vy;

        if (this.pongBall.y - this.pongBall.radius < 0) {
            this.pongBall.y = this.pongBall.radius;
            this.pongBall.vy = -this.pongBall.vy;
        }
        if (this.pongBall.y + this.pongBall.radius > canvas.height) {
            this.pongBall.y = canvas.height - this.pongBall.radius;
            this.pongBall.vy = -this.pongBall.vy;
        }

        const cpuCenter = this.pongCpuPaddleY + (this.pongPaddleHeight / 2);
        if (cpuCenter < this.pongBall.y - 10) {
            this.pongCpuPaddleY += this.pongPaddleSpeedCpu;
        } else if (cpuCenter > this.pongBall.y + 10) {
            this.pongCpuPaddleY -= this.pongPaddleSpeedCpu;
        }
        if(this.pongCpuPaddleY < 0) this.pongCpuPaddleY = 0;
        if(this.pongCpuPaddleY > canvas.height - this.pongPaddleHeight) this.pongCpuPaddleY = canvas.height - this.pongPaddleHeight;

        if (this.pongBall.vx < 0) {
            if (this.pongBall.x - this.pongBall.radius <= 25 && this.pongBall.x - this.pongBall.radius >= 10) {
                if (this.pongBall.y >= this.pongPlayerPaddleY && this.pongBall.y <= this.pongPlayerPaddleY + this.pongPaddleHeight) {
                    this.pongBall.vx = -this.pongBall.vx * 1.05;
                    this.pongBall.x = 25 + this.pongBall.radius;
                }
            }
        }

        if (this.pongBall.vx > 0) {
            if (this.pongBall.x + this.pongBall.radius >= canvas.width - 25 && this.pongBall.x + this.pongBall.radius <= canvas.width - 10) {
                if (this.pongBall.y >= this.pongCpuPaddleY && this.pongBall.y <= this.pongCpuPaddleY + this.pongPaddleHeight) {
                    this.pongBall.vx = -this.pongBall.vx * 1.05;
                    this.pongBall.x = canvas.width - 25 - this.pongBall.radius;
                }
            }
        }

        if (this.pongBall.x < 0) {
            this.pongScores.cpu++;
            document.getElementById('pongCpuScore').innerText = this.pongScores.cpu;
            this.resetPongBall();
        } else if (this.pongBall.x > canvas.width) {
            this.pongScores.player++;
            document.getElementById('pongPlayerScore').innerText = this.pongScores.player;
            this.resetPongBall();
        }
    },

    drawPongMatrix() {
        const ctx = this.pongCanvasCtx;
        const canvas = document.getElementById('pongCanvas');
        if (!ctx) return;

        ctx.fillStyle = '#050508';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 2;
        ctx.setLineDash([10, 10]);
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, 0);
        ctx.lineTo(canvas.width / 2, canvas.height);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = '#0a84ff';
        ctx.fillRect(15, this.pongPlayerPaddleY, this.pongPaddleWidth, this.pongPaddleHeight);

        ctx.fillStyle = '#ff453a';
        ctx.fillRect(canvas.width - 15 - this.pongPaddleWidth, this.pongCpuPaddleY, this.pongPaddleWidth, this.pongPaddleHeight);

        ctx.fillStyle = '#32d74b';
        ctx.beginPath();
        ctx.arc(this.pongBall.x, this.pongBall.y, this.pongBall.radius, 0, Math.PI * 2);
        ctx.fill();
    },

    resetPongGame() {
        this.pongScores.player = 0;
        this.pongScores.cpu = 0;
        document.getElementById('pongPlayerScore').innerText = "0";
        document.getElementById('pongCpuScore').innerText = "0";
        this.resetPongBall();
    },

    // FLAPPY BIRD MECHANICS HUB
    setupFlappyEngine() {
        const canvas = document.getElementById('flappyCanvas');
        this.flappyCanvasCtx = canvas.getContext('2d');
        canvas.width = 460;
        canvas.height = 500;
        this.resetFlappyStateMap();
    },

    resetFlappyStateMap() {
        this.flappyBirdModel.y = 220;
        this.flappyBirdModel.velocity = 0;
        this.flappyPipesList = [];
        this.flappyScoreCount = 0;
        this.flappyFrameTicker = 0;
        this.isFlappyGameOver = false;
        document.getElementById('flappyScore').innerText = "0";
        document.getElementById('flappyGameOverBox').classList.add('hidden');
    },

    startFlappyExecutionLoop() {
        if (this.flappyLoopId) return;
        const flappyFrameNode = () => {
            this.updateFlappyPhysics();
            this.drawFlappyMatrix();
            this.flappyLoopId = requestAnimationFrame(flappyFrameNode);
        };
        this.flappyLoopId = requestAnimationFrame(flappyFrameNode);
    },

    stopFlappyExecutionLoop() {
        if (this.flappyLoopId) {
            cancelAnimationFrame(this.flappyLoopId);
            this.flappyLoopId = null;
        }
    },

    triggerFlappyImpulse() {
        if (this.isFlappyGameOver) return;
        this.flappyBirdModel.velocity = this.flappyBirdModel.thrust;
    },

    restartFlappyCore(e) {
        if(e) e.stopPropagation();
        this.resetFlappyStateMap();
        this.startFlappyExecutionLoop();
    },

    updateFlappyPhysics() {
        if (this.isFlappyGameOver) return;

        this.flappyFrameTicker++;

        // Apply gravitational constant acceleration vector updates
        this.flappyBirdModel.velocity += this.flappyBirdModel.gravity;
        this.flappyBirdModel.y += this.flappyBirdModel.velocity;

        // Ground and ceiling terminal impact thresholds
        if (this.flappyBirdModel.y + this.flappyBirdModel.radius > 500 || this.flappyBirdModel.y - this.flappyBirdModel.radius < 0) {
            this.triggerFlappyCrashSequence();
        }

        // Procedural pipe matrix generation loop
        if (this.flappyFrameTicker % this.flappyPipeSpacingFrames === 0) {
            const gapHeight = 115;
            const minHeight = 40;
            const maxHeight = 500 - gapHeight - minHeight;
            const topPipeHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
            
            this.flappyPipesList.push({
                x: 460,
                top: topPipeHeight,
                bottom: 500 - topPipeHeight - gapHeight,
                width: 52,
                passed: false
            });
        }

        // Move and evaluate layout matrices for obstacles
        for (let idx = this.flappyPipesList.length - 1; idx >= 0; idx--) {
            let pipe = this.flappyPipesList[idx];
            pipe.x -= 2; // Fixed scrolling track speed displacement velocity

            // Vector collision bounds matching
            if (
                this.flappyBirdModel.x + this.flappyBirdModel.radius > pipe.x &&
                this.flappyBirdModel.x - this.flappyBirdModel.radius < pipe.x + pipe.width
            ) {
                if (this.flappyBirdModel.y - this.flappyBirdModel.radius < pipe.top || 
                    this.flappyBirdModel.y + this.flappyBirdModel.radius > 500 - pipe.bottom) {
                    this.triggerFlappyCrashSequence();
                }
            }

            // Realtime score tracker logging
            if (!pipe.passed && pipe.x + pipe.width < this.flappyBirdModel.x) {
                pipe.passed = true;
                this.flappyScoreCount++;
                document.getElementById('flappyScore').innerText = this.flappyScoreCount;
                if (this.flappyScoreCount > this.flappyBestScore) {
                    this.flappyBestScore = this.flappyScoreCount;
                    document.getElementById('flappyBestScore').innerText = this.flappyBestScore;
                }
            }

            // Clear discarded memory nodes
            if (pipe.x + pipe.width < 0) {
                this.flappyPipesList.splice(idx, 1);
            }
        }
    },

    drawFlappyMatrix() {
        const ctx = this.flappyCanvasCtx;
        if (!ctx) return;

        // Render Background Gradient Depth
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, 460, 500);

        // Draw active dynamic pipe arrays
        this.flappyPipesList.forEach(pipe => {
            ctx.fillStyle = '#16a34a';
            // Upper Column Structure
            ctx.fillRect(pipe.x, 0, pipe.width, pipe.top);
            ctx.fillStyle = '#15803d';
            ctx.fillRect(pipe.x - 2, pipe.top - 16, pipe.width + 4, 16);

            // Lower Column Structure
            ctx.fillStyle = '#16a34a';
            ctx.fillRect(pipe.x, 500 - pipe.bottom, pipe.width, pipe.bottom);
            ctx.fillStyle = '#15803d';
            ctx.fillRect(pipe.x - 2, 500 - pipe.bottom, pipe.width + 4, 16);
        });

        // Render Flappy Avatar Node (Gold Orbit)
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(this.flappyBirdModel.x, this.flappyBirdModel.y, this.flappyBirdModel.radius, 0, Math.PI * 2);
        ctx.fill();

        // Eye Detailing
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(this.flappyBirdModel.x + 4, this.flappyBirdModel.y - 3, 2.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Wing Detailing
        ctx.fillStyle = '#f59e0b';
        ctx.fillRect(this.flappyBirdModel.x - 8, this.flappyBirdModel.y - 2, 6, 5);
    },

    triggerFlappyCrashSequence() {
        this.isFlappyGameOver = true;
        document.getElementById('flappyGameOverBox').classList.remove('hidden');
    },

    // SPACE INVADERS RETRO ENGINE
    setupSpaceInvaders() {
        const canvas = document.getElementById('spaceInvadersCanvas');
        this.siCanvasCtx = canvas.getContext('2d');
        canvas.width = 600;
        canvas.height = 500;
        this.resetSpaceInvaders(false);
    },

    resetSpaceInvaders(keepScore = true) {
        this.siGameOver = false;
        if (!keepScore) {
            this.siScore = 0;
            document.getElementById('siScore').innerText = '0';
            this.siInvaderConfig.speed = 1.0;
        }
        this.siPlayer.x = 280;
        this.siBullets = [];
        this.siInvaders = [];
        this.siInvaderConfig.direction = 1;
        document.getElementById('siGameOverBox').classList.add('hidden');

        for (let r = 0; r < this.siInvaderConfig.rows; r++) {
            for (let c = 0; c < this.siInvaderConfig.cols; c++) {
                this.siInvaders.push({
                    x: c * (this.siInvaderConfig.width + this.siInvaderConfig.padding) + this.siInvaderConfig.offsetLeft,
                    y: r * (this.siInvaderConfig.height + this.siInvaderConfig.padding) + this.siInvaderConfig.offsetTop,
                    status: 1
                });
            }
        }
        if(!this.siLoopId) this.startSpaceInvadersLoop();
    },

    restartSpaceInvaders(e) {
        if(e) e.stopPropagation();
        this.resetSpaceInvaders(false);
    },

    startSpaceInvadersLoop() {
        if (this.siLoopId) return;
        const siFrameNode = () => {
            this.updateSpaceInvaders();
            this.drawSpaceInvaders();
            this.siLoopId = requestAnimationFrame(siFrameNode);
        };
        this.siLoopId = requestAnimationFrame(siFrameNode);
    },

    stopSpaceInvadersLoop() {
        if (this.siLoopId) {
            cancelAnimationFrame(this.siLoopId);
            this.siLoopId = null;
        }
    },

    fireSiBullet() {
        if (this.siBullets.length < 3) {
            this.siBullets.push({ x: this.siPlayer.x + this.siPlayer.width / 2 - 2, y: this.siPlayer.y, width: 4, height: 12, speed: 7 });
        }
    },

    updateSpaceInvaders() {
        if (this.siGameOver) return;

        // Player lateral kinetics
        if (this.siKeys.ArrowLeft && this.siPlayer.x > 0) this.siPlayer.x -= this.siPlayer.speed;
        if (this.siKeys.ArrowRight && this.siPlayer.x < 600 - this.siPlayer.width) this.siPlayer.x += this.siPlayer.speed;

        // Projectile trajectory physics
        for (let i = this.siBullets.length - 1; i >= 0; i--) {
            let b = this.siBullets[i];
            b.y -= b.speed;
            if (b.y < 0) {
                this.siBullets.splice(i, 1);
                continue;
            }
            
            // Invader collision detection map
            for (let j = 0; j < this.siInvaders.length; j++) {
                let inv = this.siInvaders[j];
                if (inv.status === 1) {
                    if (b.x > inv.x && b.x < inv.x + this.siInvaderConfig.width && b.y > inv.y && b.y < inv.y + this.siInvaderConfig.height) {
                        inv.status = 0;
                        this.siBullets.splice(i, 1);
                        this.siScore += 10;
                        document.getElementById('siScore').innerText = this.siScore;
                        break;
                    }
                }
            }
        }

        // Alien swarm trajectory tracking
        let edgeReached = false;
        let activeInvaders = 0;
        for (let i = 0; i < this.siInvaders.length; i++) {
            let inv = this.siInvaders[i];
            if (inv.status === 1) {
                activeInvaders++;
                inv.x += this.siInvaderConfig.speed * this.siInvaderConfig.direction;
                if (inv.x <= 0 || inv.x + this.siInvaderConfig.width >= 600) {
                    edgeReached = true;
                }
                if (inv.y + this.siInvaderConfig.height >= this.siPlayer.y) {
                    this.siGameOver = true;
                    document.getElementById('siGameOverBox').classList.remove('hidden');
                }
            }
        }

        // Fleet displacement bounds
        if (edgeReached) {
            this.siInvaderConfig.direction *= -1;
            for (let i = 0; i < this.siInvaders.length; i++) {
                this.siInvaders[i].y += 22;
            }
            this.siInvaderConfig.speed += 0.15;
        }

        // Next Wave Generation
        if (activeInvaders === 0) {
            this.siInvaderConfig.speed += 0.4;
            this.siScore += 100;
            document.getElementById('siScore').innerText = this.siScore;
            this.resetSpaceInvaders(true);
        }
    },

    drawSpaceInvaders() {
        const ctx = this.siCanvasCtx;
        if (!ctx) return;

        ctx.fillStyle = '#050505';
        ctx.fillRect(0, 0, 600, 500);

        // Player Ship (Retro Vector Tank)
        ctx.fillStyle = '#32d74b';
        ctx.fillRect(this.siPlayer.x, this.siPlayer.y, this.siPlayer.width, this.siPlayer.height);
        ctx.fillRect(this.siPlayer.x + 16, this.siPlayer.y - 8, 8, 8); // Cannon barrel
        ctx.fillRect(this.siPlayer.x - 4, this.siPlayer.y + 8, 48, 8); // Wings

        // Dynamic Projectiles
        ctx.fillStyle = '#fff';
        for (let b of this.siBullets) {
            ctx.fillRect(b.x, b.y, b.width, b.height);
        }

        // Alien Fleet Nodes
        ctx.fillStyle = '#ff453a';
        for (let inv of this.siInvaders) {
            if (inv.status === 1) {
                ctx.fillRect(inv.x, inv.y, this.siInvaderConfig.width, this.siInvaderConfig.height);
                ctx.fillStyle = '#050505';
                ctx.fillRect(inv.x + 6, inv.y + 6, 4, 4); // Left optical sensor
                ctx.fillRect(inv.x + 20, inv.y + 6, 4, 4); // Right optical sensor
                ctx.fillRect(inv.x + 12, inv.y + 14, 6, 2); // Mouth node
                ctx.fillStyle = '#ff453a'; 
            }
        }
    },

    // ===== MENU BAR / SYSTEM TRAY =====
    closePopovers() {
        document.querySelectorAll('.pop.open').forEach(p => p.classList.remove('open'));
        document.querySelectorAll('.mb-btn.open').forEach(b => b.classList.remove('open'));
    },

    togglePop(id, btn, e) {
        if (e) e.stopPropagation();
        const p = document.getElementById(id);
        const wasOpen = p.classList.contains('open');
        this.closePopovers();
        document.getElementById('startMenu').classList.remove('active');
        if (wasOpen) return;
        if (p.classList.contains('pop-left') && btn) p.style.left = Math.max(6, btn.getBoundingClientRect().left) + 'px';
        p.classList.add('open');
        if (btn) btn.classList.add('open');
    },

    buildAppMenu() {
        const id = this.getActiveAppId(), m = document.getElementById('appMenu');
        if (!id) {
            m.innerHTML = `<div class="pop-item dis">No active app</div><div class="pop-sep"></div><div class="pop-item" onclick="Arya.closePopovers(); toggleStart()">Open App Launcher</div>`;
            return;
        }
        const n = this.appReferenceDirectory[id].name;
        m.innerHTML = `<div class="pop-item" onclick="Arya.closePopovers(); minimizeApp('${id}')">Minimize ${n}</div><div class="pop-sep"></div><div class="pop-item danger" onclick="Arya.closePopovers(); closeApp('${id}')">Quit ${n}</div>`;
    },

    lockScreen() {
        this.closePopovers();
        document.getElementById('desktop').classList.add('hidden');
        document.getElementById('loginScreen').classList.remove('hidden');
        const input = document.getElementById('passInput');
        input.value = ''; input.focus();
    },

    toggleNet(key) {
        this.net[key] = !this.net[key];
        this.syncTray();
        if (key === 'dnd') this.notify('Do Not Disturb', this.net.dnd ? 'Notifications silenced' : 'Notifications back on', '🌙', true);
    },

    syncTray() {
        const n = this.net, el = id => document.getElementById(id);
        el('trayWifi').classList.toggle('off', !n.wifi);
        el('trayDnd').classList.toggle('hidden', !n.dnd);
        el('ccWifi').classList.toggle('on', n.wifi); el('ccBt').classList.toggle('on', n.bt); el('ccDnd').classList.toggle('on', n.dnd);
        el('ccWifiSub').textContent = n.wifi ? 'Arya-Net' : 'Off';
        el('ccBtSub').textContent = n.bt ? 'On' : 'Off';
        el('ccDndSub').textContent = n.dnd ? 'On' : 'Off';
        this.paintRange(el('ccBright')); this.paintRange(el('ccVol'));
        this.setVolume(el('ccVol').value);
    },

    paintRange(r) { r.style.setProperty('--p', ((r.value - r.min) / (r.max - r.min) * 100) + '%'); },
    setBrightness(v) { this.paintRange(document.getElementById('ccBright')); document.getElementById('dimLayer').style.opacity = (100 - v) / 100; },
    setVolume(v) {
        this.paintRange(document.getElementById('ccVol'));
        ['startupSound', 'alarmSound'].forEach(id => { const a = document.getElementById(id); if (a) a.volume = v / 100; });
    },

    notify(title, body, icon = '🧿', force = false) {
        if (this.net.dnd && !force) return;
        const stack = document.getElementById('notifStack');
        const n = document.createElement('div');
        n.className = 'notif';
        n.innerHTML = `<div class="notif-ic">${icon}</div><div class="notif-tx"><b>${title}</b><span>${body}</span></div>`;
        const dismiss = () => { n.classList.add('out'); setTimeout(() => n.remove(), 300); };
        n.onclick = dismiss;
        stack.appendChild(n);
        setTimeout(dismiss, 5000);
    },

    // ===== NOVA SNAKE =====
    setupSnake() {
        const c = document.getElementById('snakeCanvas');
        c.width = this.snakeCols * this.snakeCell; c.height = this.snakeRows * this.snakeCell;
        this.snakeCtx = c.getContext('2d');
        try { this.snakeBest = +localStorage.getItem('novaSnakeBest') || 0; } catch (e) {}
        this.resetSnake();
    },

    resetSnake() {
        this.snakeBody = [{ x: 8, y: 10 }, { x: 7, y: 10 }, { x: 6, y: 10 }];
        this.snakeDir = { x: 1, y: 0 }; this.snakeQueue = []; this.snakeParticles = [];
        this.snakeScore = 0; this.snakeDelay = 130;
        this.snakeSpawnFood();
        this.snakeSetState('ready');
        this.snakeUpdateScore();
    },

    snakeSpawnFood() {
        const free = [];
        for (let x = 0; x < this.snakeCols; x++) for (let y = 0; y < this.snakeRows; y++)
            if (!this.snakeBody.some(s => s.x === x && s.y === y)) free.push({ x, y });
        this.snakeFood = free[Math.floor(Math.random() * free.length)] || { x: 0, y: 0 };
    },

    snakeUpdateScore() {
        document.getElementById('snakeScore').textContent = this.snakeScore;
        document.getElementById('snakeBest').textContent = this.snakeBest;
    },

    snakeSetState(st) {
        this.snakeState = st;
        const ov = document.getElementById('snakeOverlay'), t = document.getElementById('snakeOvTitle'),
              p = document.getElementById('snakeOvText'), b = document.getElementById('snakeOvBtn');
        ov.classList.toggle('show', st !== 'playing');
        ov.classList.toggle('over', st === 'over');
        if (st === 'ready') { t.textContent = 'NOVA SNAKE'; p.textContent = 'Press an arrow key or WASD to start'; b.textContent = 'START'; }
        if (st === 'paused') { t.textContent = 'PAUSED'; p.textContent = 'Press SPACE to resume'; b.textContent = 'RESUME'; }
        if (st === 'over') { t.textContent = 'GAME OVER'; p.textContent = `Score ${this.snakeScore} · Best ${this.snakeBest}`; b.textContent = 'PLAY AGAIN'; }
        if (st === 'playing') this.snakeLastStep = performance.now();
    },

    snakeAction(e) {
        if (e) e.stopPropagation();
        if (this.snakeState === 'over') this.resetSnake();
        this.snakeSetState('playing');
    },

    snakeToggle() {
        if (this.snakeState === 'playing') this.snakeSetState('paused');
        else this.snakeAction();
    },

    snakeTurn(dx, dy) {
        if (this.snakeState === 'over') return;
        const last = this.snakeQueue.length ? this.snakeQueue[this.snakeQueue.length - 1] : this.snakeDir;
        if (this.snakeState !== 'playing') this.snakeSetState('playing');
        if ((dx === -last.x && dy === -last.y) || (dx === last.x && dy === last.y)) return;
        if (this.snakeQueue.length < 3) this.snakeQueue.push({ x: dx, y: dy });
    },

    startSnakeLoop() {
        if (this.snakeLoopId) return;
        const frame = (t) => {
            if (this.snakeState === 'playing' && t - this.snakeLastStep >= this.snakeDelay) {
                this.snakeLastStep = t;
                this.snakeStep();
            }
            this.drawSnake(t);
            this.snakeLoopId = requestAnimationFrame(frame);
        };
        this.snakeLoopId = requestAnimationFrame(frame);
    },

    stopSnakeLoop() {
        if (this.snakeLoopId) { cancelAnimationFrame(this.snakeLoopId); this.snakeLoopId = null; }
        if (this.snakeState === 'playing') this.snakeSetState('paused');
    },

    snakeStep() {
        if (this.snakeQueue.length) this.snakeDir = this.snakeQueue.shift();
        const h = this.snakeBody[0], d = this.snakeDir, n = { x: h.x + d.x, y: h.y + d.y }, f = this.snakeFood;
        const eating = n.x === f.x && n.y === f.y;
        const solid = eating ? this.snakeBody : this.snakeBody.slice(0, -1);
        if (n.x < 0 || n.y < 0 || n.x >= this.snakeCols || n.y >= this.snakeRows || solid.some(s => s.x === n.x && s.y === n.y)) {
            this.snakeGameOver(); return;
        }
        this.snakeBody.unshift(n);
        if (!eating) { this.snakeBody.pop(); return; }
        this.snakeScore += 10;
        this.snakeDelay = Math.max(65, this.snakeDelay - 3);
        const S = this.snakeCell;
        for (let i = 0; i < 12; i++) {
            const a = Math.random() * Math.PI * 2, v = 1 + Math.random() * 2.5;
            this.snakeParticles.push({ x: f.x * S + S / 2, y: f.y * S + S / 2, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: 1 });
        }
        this.snakeSpawnFood();
        this.snakeUpdateScore();
    },

    snakeGameOver() {
        if (this.snakeScore > this.snakeBest) {
            this.snakeBest = this.snakeScore;
            try { localStorage.setItem('novaSnakeBest', this.snakeBest); } catch (e) {}
        }
        this.snakeUpdateScore();
        this.snakeSetState('over');
    },

    drawSnake(t) {
        const c = this.snakeCtx, S = this.snakeCell, W = this.snakeCols * S, H = this.snakeRows * S;
        const bg = c.createLinearGradient(0, 0, 0, H); bg.addColorStop(0, '#0b1117'); bg.addColorStop(1, '#070a0e');
        c.fillStyle = bg; c.fillRect(0, 0, W, H);
        c.fillStyle = 'rgba(255,255,255,0.025)';
        for (let x = 0; x < this.snakeCols; x++) for (let y = 0; y < this.snakeRows; y++) if ((x + y) % 2) c.fillRect(x * S, y * S, S, S);

        // food
        const f = this.snakeFood, pulse = Math.sin(t / 220) * 1.6;
        c.save(); c.shadowColor = '#ff453a'; c.shadowBlur = 16 + pulse * 2;
        c.fillStyle = '#ff453a'; c.beginPath(); c.arc(f.x * S + S / 2, f.y * S + S / 2, S * 0.32 + pulse * 0.5, 0, Math.PI * 2); c.fill();
        c.restore();
        c.fillStyle = 'rgba(255,255,255,0.55)'; c.beginPath(); c.arc(f.x * S + S / 2 - 2, f.y * S + S / 2 - 2, 2, 0, Math.PI * 2); c.fill();

        // body, tail → head
        const len = this.snakeBody.length;
        for (let i = len - 1; i >= 0; i--) {
            const s = this.snakeBody[i], k = 1 - i / Math.max(len, 1);
            const g = Math.round(130 + 85 * k), r = Math.round(30 + 20 * k);
            c.save();
            if (i === 0) { c.shadowColor = '#32d74b'; c.shadowBlur = 14; }
            c.fillStyle = `rgb(${r},${g},${Math.round(60 + 15 * k)})`;
            c.beginPath(); c.roundRect(s.x * S + 1.5, s.y * S + 1.5, S - 3, S - 3, i === 0 ? 7 : 5); c.fill();
            c.restore();
        }

        // eyes
        const h = this.snakeBody[0], d = this.snakeDir, cx = h.x * S + S / 2, cy = h.y * S + S / 2;
        const px = -d.y * 4, py = d.x * 4;
        c.fillStyle = '#fff';
        [[1, 1], [-1, -1]].forEach(([m]) => {
            const ex = cx + d.x * 3 + px * m, ey = cy + d.y * 3 + py * m;
            c.beginPath(); c.arc(ex, ey, 2.2, 0, Math.PI * 2); c.fill();
        });
        c.fillStyle = '#041'; 
        [[1], [-1]].forEach(([m]) => {
            c.beginPath(); c.arc(cx + d.x * 4 + px * m, cy + d.y * 4 + py * m, 1, 0, Math.PI * 2); c.fill();
        });

        // particles
        this.snakeParticles = this.snakeParticles.filter(p => p.life > 0);
        this.snakeParticles.forEach(p => {
            p.x += p.vx; p.y += p.vy; p.life -= 0.04;
            c.fillStyle = `rgba(255,120,100,${Math.max(p.life, 0)})`;
            c.beginPath(); c.arc(p.x, p.y, 2.5 * p.life + 0.5, 0, Math.PI * 2); c.fill();
        });
    },

    handleStartSearch(event) {
        const query = event.target.value.toLowerCase();
        document.querySelectorAll('.app-tile').forEach(tile => {
            const label = tile.innerText.toLowerCase();
            tile.style.display = label.includes(query) ? "block" : "none";
        });
    },

    handleHudSearch(event) {
        const query = event.target.value.toLowerCase();
        const startMenu = document.getElementById('startMenu');
        const startMenuSearch = document.getElementById('startMenuSearch');
        
        startMenuSearch.value = event.target.value;
        
        if (query.length > 0) {
            startMenu.classList.add('active');
        } else {
            startMenu.classList.remove('active');
        }

        document.querySelectorAll('.app-tile').forEach(tile => {
            const label = tile.innerText.toLowerCase();
            tile.style.display = label.includes(query) ? "block" : "none";
        });
    },

    drag(event, targetElementId) {
        if (event.target.closest('.win-btns')) return;
        const w = document.getElementById(targetElementId);
        this.focusApp(targetElementId);
        const dx = event.clientX - w.offsetLeft, dy = event.clientY - w.offsetTop;
        w.classList.add('dragging');
        const move = (e) => {
            w.style.left = Math.min(window.innerWidth - 120, Math.max(120 - w.offsetWidth, e.clientX - dx)) + 'px';
            w.style.top = Math.min(window.innerHeight - 60, Math.max(34, e.clientY - dy)) + 'px';
        };
        const end = () => {
            w.classList.remove('dragging');
            document.removeEventListener('mousemove', move);
            document.removeEventListener('mouseup', end);
        };
        document.addEventListener('mousemove', move);
        document.addEventListener('mouseup', end);
    },

    renderDockTrack() {
        const track = document.getElementById('dynamicDockItems');
        track.innerHTML = '';
        
        Object.keys(this.appReferenceDirectory).forEach(appId => {
            const win = document.getElementById(appId);
            if (win && !win.classList.contains('hidden')) {
                const appData = this.appReferenceDirectory[appId];
                
                const wrapper = document.createElement('div');
                wrapper.className = 'dock-item-wrapper';
                wrapper.id = `dock-${appId}`;
                if (!this.dockSeen.has(appId)) { wrapper.classList.add('enter'); this.dockSeen.add(appId); }
                
                if (win.style.zIndex == this.zLayerIndex && !win.classList.contains('minimized')) {
                    wrapper.classList.add('focused');
                }
                
                wrapper.innerHTML = `
                    <div class="dock-btn" title="${appData.name}" onclick="toggleApp('${appId}')">${appData.icon}</div>
                    <div class="app-dot"></div>
                `;
                track.appendChild(wrapper);
            }
        });
        const act = this.getActiveAppId();
        document.getElementById('activeAppName').textContent = act ? this.appReferenceDirectory[act].name : 'Desktop';
    },

    isFocused(id) {
        const w = document.getElementById(id);
        return !!w && !w.classList.contains('hidden') && !w.classList.contains('minimized') && !w.classList.contains('closing') && w.style.zIndex == this.zLayerIndex;
    },

    getActiveAppId() {
        return Object.keys(this.appReferenceDirectory).find(id => this.isFocused(id)) || null;
    },

    focusApp(appWindowId) {
        const win = document.getElementById(appWindowId);
        win.classList.remove('minimized');
        this.zLayerIndex++;
        win.style.zIndex = this.zLayerIndex;
        document.querySelectorAll('.app-window.focused').forEach(w => w.classList.remove('focused'));
        win.classList.add('focused');

        // Manage execution loop configurations
        if (appWindowId === 'windowPingPong') {
            this.startPongExecutionLoop();
        } else if (appWindowId === 'windowFlappy') {
            this.startFlappyExecutionLoop();
        } else if (appWindowId === 'windowSpaceInvaders') {
            this.startSpaceInvadersLoop();
        } else if (appWindowId === 'windowSnake') {
            this.startSnakeLoop();
        }

        this.renderDockTrack();
    }
};

// GLOBAL WINDOW MANAGER ACTIONS
function stopAppLoop(id) {
    if (id === 'windowPingPong') Arya.stopPongExecutionLoop();
    else if (id === 'windowFlappy') Arya.stopFlappyExecutionLoop();
    else if (id === 'windowSpaceInvaders') Arya.stopSpaceInvadersLoop();
    else if (id === 'windowSnake') Arya.stopSnakeLoop();
}

function openApp(appWindowId) {
    const windowHandle = document.getElementById(appWindowId);
    windowHandle.classList.remove('hidden', 'closing');
    Arya.focusApp(appWindowId);
    Arya.closePopovers();
    document.getElementById('startMenu').classList.remove('active');
    document.getElementById('hudRailSearch').value = '';
    document.getElementById('startMenuSearch').value = '';
    document.querySelectorAll('.app-tile').forEach(t => t.style.display = '');
}

function closeApp(appWindowId) {
    const w = document.getElementById(appWindowId);
    if (w.classList.contains('closing') || w.classList.contains('hidden')) return;
    w.classList.add('closing');
    stopAppLoop(appWindowId);
    setTimeout(() => {
        w.classList.add('hidden');
        w.classList.remove('closing', 'focused');
        Arya.dockSeen.delete(appWindowId);
        Arya.renderDockTrack();
    }, 180);
}

function minimizeApp(appWindowId) {
    const w = document.getElementById(appWindowId);
    w.classList.add('minimized');
    w.classList.remove('focused');
    stopAppLoop(appWindowId);
    Arya.renderDockTrack();
}

function toggleApp(appWindowId) {
    const win = document.getElementById(appWindowId);
    if (win.classList.contains('minimized')) {
        Arya.focusApp(appWindowId);
    } else if (win.style.zIndex == Arya.zLayerIndex) {
        minimizeApp(appWindowId);
    } else {
        Arya.focusApp(appWindowId);
    }
}

function toggleStart() { document.getElementById('startMenu').classList.toggle('active'); }

Arya.init();
