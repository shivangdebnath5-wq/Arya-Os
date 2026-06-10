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
        'windowFlappy': { name: 'Flappy Bird', icon: '🐦' }
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
        this.renderDockTrack();

        // Bind global hotkeys for space jumps
        window.addEventListener('keydown', (e) => {
            if (e.code === 'Space' && !document.getElementById('windowFlappy').classList.contains('hidden')) {
                const win = document.getElementById('windowFlappy');
                if (!win.classList.contains('minimized') && win.style.zIndex == this.zLayerIndex) {
                    e.preventDefault();
                    this.triggerFlappyImpulse();
                }
            }
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
            alert("SECURITY VIOLATION: INVALID PIN");
        }
    },

    awakenSystemDaemons() {
        setInterval(() => {
            const timeObject = new Date();
            const currentStringTime24h = timeObject.toTimeString().split(' ')[0].substring(0, 5); 
            document.getElementById('systemClock').innerText = timeObject.toLocaleTimeString();
            
            const calendarOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            document.getElementById('systemDate').innerText = timeObject.toLocaleDateString(undefined, calendarOptions);

            if (this.alarmArmedNodeTime === currentStringTime24h && !this.isAlarmActiveTriggered) {
                this.fireSystemAlarmSequence();
            }

            if (navigator.getBattery) {
                navigator.getBattery().then(batteryManager => {
                    let levelPercentage = Math.round(batteryManager.level * 100);
                    const levelBarFill = document.getElementById('batteryInner');
                    document.getElementById('batPercentage').innerText = levelPercentage + "%";
                    levelBarFill.style.width = levelPercentage + "%";
                    document.getElementById('chargeIcon').innerText = batteryManager.charging ? "⚡" : "";
                });
            }
        }, 1000);
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
        const operationalWindow = document.getElementById(targetElementId);
        this.focusApp(targetElementId);
        let deltaX = event.clientX - operationalWindow.offsetLeft;
        let deltaY = event.clientY - operationalWindow.offsetTop;

        const draggingFrameMovement = (moveEvent) => {
            operationalWindow.style.left = (moveEvent.clientX - deltaX) + 'px';
            operationalWindow.style.top = (moveEvent.clientY - deltaY) + 'px';
        };
        const dragTermination = () => {
            document.removeEventListener('mousemove', draggingFrameMovement);
            document.removeEventListener('mouseup', dragTermination);
        };
        document.addEventListener('mousemove', draggingFrameMovement);
        document.addEventListener('mouseup', dragTermination);
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
    },

    focusApp(appWindowId) {
        const win = document.getElementById(appWindowId);
        win.classList.remove('minimized');
        this.zLayerIndex++;
        win.style.zIndex = this.zLayerIndex;

        // Manage execution loop configurations
        if (appWindowId === 'windowPingPong') {
            this.startPongExecutionLoop();
        } else if (appWindowId === 'windowFlappy') {
            this.startFlappyExecutionLoop();
        }

        this.renderDockTrack();
    }
};

// GLOBAL WINDOW MANAGER ACTIONS
function openApp(appWindowId) {
    const windowHandle = document.getElementById(appWindowId);
    windowHandle.classList.remove('hidden');
    Arya.focusApp(appWindowId);
    document.getElementById('startMenu').classList.remove('active');
    document.getElementById('hudRailSearch').value = '';
    document.getElementById('startMenuSearch').value = '';
}

function closeApp(appWindowId) { 
    document.getElementById(appWindowId).classList.add('hidden'); 
    if (appWindowId === 'windowPingPong') {
        Arya.stopPongExecutionLoop();
    } else if (appWindowId === 'windowFlappy') {
        Arya.stopFlappyExecutionLoop();
    }
    Arya.renderDockTrack();
}

function minimizeApp(appWindowId) {
    document.getElementById(appWindowId).classList.add('minimized');
    if (appWindowId === 'windowPingPong') {
        Arya.stopPongExecutionLoop();
    } else if (appWindowId === 'windowFlappy') {
        Arya.stopFlappyExecutionLoop();
    }
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
