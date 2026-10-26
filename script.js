:root { 
    --wall: url('https://i.ibb.co/Z6HS6qGn/24ca2d9a51d1a44d3eb5fc6b4dc69657.jpg');
    --glass-bg: rgba(15, 15, 20, 0.4);
    --glass-border: rgba(255, 255, 255, 0.12);
    --active-tint: rgba(255, 255, 255, 0.1);
    --accent-blue: #0a84ff;
    --cyber-green: #32d74b;
    --cyber-orange: #ff9f0a;
    --cyber-red: #ff453a;
}

* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', system-ui, sans-serif; cursor: default; user-select: none; }
body, html { width: 100vw; height: 100vh; overflow: hidden; background: #000; color: #fff; }

.system-layer { position: fixed; inset: 0; width: 100vw; height: 100vh; z-index: 10; }
.hidden { display: none !important; }

/* BOOT LOADING SYSTEM */
.boot-layer { background: #000; display: flex; align-items: center; justify-content: center; z-index: 99999; }
.boot-wrapper { text-align: center; }
.eye-ring-container { position: relative; width: 200px; height: 200px; margin: 0 auto; display: flex; align-items: center; justify-content: center; }
.main-eye { font-size: 90px; z-index: 5; filter: drop-shadow(0 0 30px rgba(255,255,255,0.2)); }
.spinning-orbital { position: absolute; width: 160px; height: 160px; border: 2px solid transparent; border-top: 2px solid #ffffff; border-radius: 50%; animation: spin 0.8s linear infinite; }
.glow-pulse { position: absolute; width: 130px; height: 130px; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 75%); animation: pulse 1.5s ease-in-out infinite; }
.boot-info { margin-top: 30px; }
.kernel-text { display: block; font-size: 10px; letter-spacing: 5px; opacity: 0.4; font-weight: 900; }
.load-bar-container { width: 200px; height: 2px; background: rgba(255,255,255,0.08); margin: 15px auto; overflow: hidden; }
#loadFill { height: 100%; width: 0%; background: #ffffff; }

/* AUTHENTICATION PANEL */
.login-layer { display: flex; align-items: center; justify-content: center; z-index: 88888; }
.login-backdrop { position: absolute; inset: 0; background: var(--wall) center/cover; filter: blur(50px) brightness(0.3); transform: scale(1.05); }
.glass-auth-card { position: relative; z-index: 2; width: 450px; padding: 60px 40px; background: rgba(10, 10, 12, 0.7); backdrop-filter: blur(40px); border: 1px solid var(--glass-border); border-radius: 32px; text-align: center; box-shadow: 0 40px 100px rgba(0,0,0,0.6); }
.user-pic { font-size: 70px; margin-bottom: 20px; }
.glass-auth-card h1 { font-weight: 300; font-size: 32px; color: #fff; }
.glass-auth-card p { font-size: 9px; letter-spacing: 3px; opacity: 0.4; margin-bottom: 35px; }
.auth-input-group { background: rgba(255,255,255,0.05); border: 1px solid var(--glass-border); border-radius: 100px; display: flex; overflow: hidden; }
.auth-input-group input { background: transparent; border: none; flex: 1; padding: 16px; color: #fff; outline: none; text-align: center; font-size: 20px; letter-spacing: 6px; }
.auth-input-group button { background: #ffffff; color: #000000; border: none; padding: 0 30px; font-weight: 900; cursor: pointer; }

/* DESKTOP ENVIRONMENT */
.desktop-layer { background: var(--wall) center/cover; z-index: 1; }
.top-bar { height: 44px; background: rgba(10, 10, 14, 0.5); backdrop-filter: blur(20px); display: flex; justify-content: space-between; align-items: center; padding: 0 25px; border-bottom: 1px solid var(--glass-border); position: relative; z-index: 10000; }
.top-left { font-weight: 900; letter-spacing: 2px; font-size: 13px; cursor: pointer; }
#systemClock { font-size: 14px; font-weight: 700; text-align: center; }
.full-date { font-size: 9px; opacity: 0.5; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }

/* SYSTEM PERFORMANCE TOOLS */
.top-right { display: flex; align-items: center; gap: 10px; }
.battery-outer { width: 30px; height: 14px; border: 1.5px solid rgba(255,255,255,0.4); padding: 1px; border-radius: 3px; position: relative; }
.battery-outer::after { content: ''; position: absolute; right: -4px; top: 3px; width: 2px; height: 5px; background: rgba(255,255,255,0.4); }
#batteryInner { height: 100%; width: 0%; background: #fff; border-radius: 1px; }

/* OS WINDOW PARADIGM */
.app-window { position: absolute; background: #0b0b0d; border: 1px solid var(--glass-border); border-radius: 14px; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 30px 80px rgba(0,0,0,0.6); transition: opacity 0.25s cubic-bezier(0.1, 0.9, 0.2, 1), transform 0.25s cubic-bezier(0.1, 0.9, 0.2, 1); }
.app-window.minimized { opacity: 0 !important; transform: scale(0.6) translateY(100px) !important; pointer-events: none !important; }
.win-title-bar { background: #131316; padding: 12px 18px; display: flex; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.04); }
.win-btns { display: flex; align-items: center; gap: 8px; }
.btn-close, .btn-minimize { width: 12px; height: 12px; border-radius: 50%; cursor: pointer; }
.btn-close { background: #ff5f56; } .btn-close:hover { background: #ff3b30; }
.btn-minimize { background: #ffbd2e; } .btn-minimize:hover { background: #ffcc00; }
.win-name { flex: 1; text-align: center; font-size: 10px; letter-spacing: 2px; font-weight: 700; color: #7e7e82; text-transform: uppercase; }
.win-toolbar { background: #18181c; padding: 8px 18px; font-size: 11px; color: #636366; border-bottom: 1px solid var(--glass-border); word-spacing: 10px; }
.win-main-area { flex: 1; overflow: auto; background: #000; position: relative; }

/* APP WORKSPACES */
.paper-view { background: #141417; padding: 25px; }
.a4-page { background: #fff; color: #000; width: 100%; min-height: 800px; padding: 50px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); outline: none; user-select: text; }
#excelGrid { width: 100%; border-collapse: collapse; }
#excelGrid td { border: 1px solid #1a1a1e; min-width: 90px; height: 30px; color: #e5e5ea; padding: 4px; outline: none; font-size: 12px; user-select: text; }
#excelGrid td:focus { background: rgba(255,255,255,0.06); border: 1px solid var(--accent-blue); }

/* PAINT APP */
.paint-controls { background: #141417; border-bottom: 1px solid var(--glass-border); padding: 10px 20px; display: flex; gap: 20px; align-items: center; }
.tool-item { font-size: 11px; display: flex; align-items: center; gap: 8px; color: #aeaeae; }
.clear-btn { background: rgba(255,255,255,0.05); border: 1px solid var(--glass-border); color: #fff; padding: 4px 12px; border-radius: 4px; font-size: 10px; cursor: pointer; }
#paintCanvas { background: #fff; display: block; }

/* SLIDE ENGINE */
.ppt-workspace { display: flex; height: 100%; background: #18181a; }
.ppt-sidebar { width: 150px; background: #111113; border-right: 1px solid var(--glass-border); padding: 12px; display: flex; flex-direction: column; gap: 12px; }
.ppt-sidebar button { background: var(--accent-blue); color: #fff; border: none; padding: 8px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 12px; }
#pptThumbnails { display: flex; flex-direction: column; gap: 8px; overflow-y: auto; }
.ppt-thumb { background: #242426; border: 2px solid transparent; height: 65px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 10px; cursor: pointer; color: #8e8e93; }
.ppt-thumb.active { border-color: var(--accent-blue); color: #fff; }
.ppt-canvas { flex: 1; padding: 30px; display: flex; align-items: center; justify-content: center; }
.slide-body { background: #fff; width: 100%; aspect-ratio: 16/9; box-shadow: 0 15px 40px rgba(0,0,0,0.5); padding: 40px; color: #000; display: flex; flex-direction: column; justify-content: center; text-align: center; outline: none; }
.slide-body h1 { font-size: 28px; margin-bottom: 10px; user-select: text; }
.slide-body p { font-size: 14px; color: #48484a; user-select: text; }

/* NOTEPAD */
.text-view textarea { width: 100%; height: 100%; background: #000; border: none; resize: none; outline: none; padding: 15px; color: #32d74b; font-family: monospace; font-size: 14px; user-select: text; }

/* EXPLORER ARCHITECTURE */
.explorer-layout { display: flex; height: 100%; }
.explorer-sidebar { width: 180px; background: #111113; border-right: 1px solid var(--glass-border); padding: 12px 8px; }
.side-item { padding: 8px 12px; border-radius: 6px; font-size: 12px; color: #aeaeae; margin-bottom: 4px; cursor: pointer; }
.side-item.active, .side-item:hover { background: var(--active-tint); color: #fff; }
.explorer-content { flex: 1; padding: 20px; display: grid; grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); gap: 15px; align-content: start; background: #060608; }
.file-node { text-align: center; cursor: pointer; padding: 8px; border-radius: 8px; }
.file-node:hover { background: rgba(255,255,255,0.04); }
.file-icon { font-size: 32px; margin-bottom: 4px; display: block; }
.file-name { font-size: 10px; color: #e5e5ea; display: block; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }

/* BROWSER CORE */
.browser-address-bar { background: #18181c; padding: 8px 16px; display: flex; gap: 12px; align-items: center; border-bottom: 1px solid var(--glass-border); }
.browser-address-bar input { background: #000; border: 1px solid var(--glass-border); border-radius: 6px; flex: 1; padding: 6px 12px; color: #3aaeff; font-size: 12px; outline: none; user-select: text; }
.browser-address-bar button { background: rgba(255,255,255,0.04); border: 1px solid var(--glass-border); color: #fff; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 12px; }
.browser-frame-sim { background: #fff; color: #000; padding: 40px; text-align: center; }

/* QUANTUM MATRIX CALCULATOR */
.cyber-calc-frame { display: flex; height: 100%; background: #08080a; }
.calc-sidebar-stream { width: 140px; background: #0e0e12; border-right: 1px solid var(--glass-border); display: flex; flex-direction: column; padding: 12px; }
.stream-title { font-size: 9px; font-weight: 800; color: #55555e; letter-spacing: 1px; margin-bottom: 10px; text-align: center; }
.stream-nodes { flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 8px; padding-right: 2px; }
.stream-item { background: rgba(255, 255, 255, 0.02); border-radius: 6px; padding: 6px 8px; border-left: 2px solid var(--accent-blue); font-family: monospace; text-align: right; word-break: break-all; }
.stream-item .st-form { font-size: 10px; color: #666; }
.stream-item .st-res { font-size: 12px; color: #fff; font-weight: bold; }
.empty-stream-notice { font-size: 10px; color: #3a3a3e; text-align: center; margin-top: 20px; font-style: italic; }
.clear-stream-btn { background: transparent; border: 1px dashed rgba(255,255,255,0.1); color: #ff453a; font-size: 9px; padding: 6px; border-radius: 4px; cursor: pointer; font-weight: bold; text-align: center; margin-top: 10px; }
.calc-main-interface { flex: 1; display: flex; flex-direction: column; padding: 16px; background: #060608; }
.calc-screen-wrapper { background: #0f0f13; border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 12px; padding: 12px; margin-bottom: 14px; text-align: right; box-shadow: inset 0 2px 8px rgba(0,0,0,0.8); }
.calc-formula-display { height: 16px; font-size: 11px; color: #55555a; letter-spacing: 0.5px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: monospace; }
.calc-main-display { width: 100%; background: transparent; border: none; color: var(--cyber-green); font-family: monospace; font-size: 26px; text-align: right; outline: none; margin-top: 4px; text-shadow: 0 0 10px rgba(50, 215, 75, 0.2); }
.calc-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; flex: 1; }
.calc-btn { border: none; border-radius: 8px; font-size: 13px; font-weight: 600; display: flex; align-items: center; justify-content: center; transition: background 0.1s, transform 0.05s; }
.calc-btn:active { transform: scale(0.95); }
.num-btn { background: #141419; color: #e5e5ea; box-shadow: 0 2px 4px rgba(0,0,0,0.4); } .num-btn:hover { background: #1c1c24; }
.sci-btn { background: #0f1014; color: #8e8e93; font-family: monospace; border: 1px solid rgba(255,255,255,0.02); } .sci-btn:hover { background: #15161c; color: #fff; }
.mode-btn { background: #24242b; color: #ff9f0a; } .mode-btn:hover { background: #2c2c35; }
.op-btn { background: rgba(10, 132, 255, 0.08); border: 1px solid rgba(10, 132, 255, 0.15); color: var(--accent-blue); } .op-btn:hover { background: rgba(10, 132, 255, 0.18); }
.eq-btn { background: linear-gradient(135deg, #0a84ff, #0056b3); color: #ffffff; box-shadow: 0 4px 12px rgba(10, 132, 255, 0.3); } .eq-btn:hover { filter: brightness(1.1); }

/* QUANTUM CALENDAR APPLICATION STYLES */
.calendar-workspace { display: flex; height: 100%; background: #060608; }
.cal-main-engine { flex: 1.3; display: flex; flex-direction: column; padding: 16px; border-right: 1px solid var(--glass-border); }
.cal-nav-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.cal-nav-bar button { background: rgba(255,255,255,0.05); border: 1px solid var(--glass-border); color: #fff; width: 28px; height: 28px; border-radius: 6px; cursor: pointer; }
.cal-nav-bar button:hover { background: rgba(255,255,255,0.1); }
#calMonthYearTitle { font-size: 14px; font-weight: 700; letter-spacing: 0.5px; color: #fff; }
.cal-days-header { display: grid; grid-template-columns: repeat(7, 1fr); text-align: center; font-size: 11px; font-weight: 800; color: #55555e; margin-bottom: 8px; }
.cal-grid-matrix { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; flex: 1; }
.cal-cell { background: #0f0f13; border: 1px solid rgba(255,255,255,0.02); border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #e5e5ea; font-family: monospace; cursor: pointer; position: relative; transition: all 0.15s; }
.cal-cell:hover { background: #1c1c24; color: #fff; }
.cal-cell.empty { background: transparent; border: none; cursor: default; }
.cal-cell.today { border: 1px solid var(--accent-blue); color: var(--accent-blue); font-weight: bold; }
.cal-cell.selected { background: var(--accent-blue) !important; color: #fff !important; font-weight: bold; box-shadow: 0 0 10px rgba(10, 132, 255, 0.4); }
.cal-cell.has-events::after { content: ''; position: absolute; bottom: 4px; width: 4px; height: 4px; background: var(--cyber-green); border-radius: 50%; }
.cal-events-panel { flex: 1; background: #0a0a0d; padding: 16px; display: flex; flex-direction: column; }
.cal-panel-title { font-size: 9px; font-weight: 800; color: #55555e; letter-spacing: 1px; margin-bottom: 4px; }
.cal-selected-lbl { font-size: 12px; font-weight: bold; color: #fff; margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 6px; }
.cal-input-wrapper { display: flex; gap: 6px; margin-bottom: 14px; }
.cal-input-wrapper input { background: #000; border: 1px solid var(--glass-border); border-radius: 6px; padding: 6px 10px; color: #fff; font-size: 11px; flex: 1; outline: none; user-select: text; }
.cal-input-wrapper button { background: var(--accent-blue); border: none; color: #fff; padding: 0 12px; font-size: 11px; font-weight: bold; border-radius: 6px; cursor: pointer; }
.cal-events-stream { flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 6px; }
.cal-event-node { background: rgba(255,255,255,0.03); border-left: 2px solid var(--cyber-green); padding: 6px 8px; border-radius: 4px; font-size: 11px; color: #aeaeae; display: flex; justify-content: space-between; align-items: center; word-break: break-all; user-select: text; }
.cal-event-node button { background: transparent; border: none; color: #ff453a; font-weight: bold; cursor: pointer; font-size: 10px; padding: 0 4px; }

/* QUANTUM TO-DO TASK ENGINE STYLES */
.task-app-workspace { display: flex; height: 100%; background: #060608; }
.task-control-panel { width: 170px; background: #0c0c10; border-right: 1px solid var(--glass-border); padding: 14px; display: flex; flex-direction: column; gap: 12px; }
.task-section-lbl { font-size: 9px; font-weight: 800; color: #55555e; letter-spacing: 1.2px; margin-bottom: 4px; text-transform: uppercase; }
.task-control-panel input { background: #000; border: 1px solid var(--glass-border); border-radius: 6px; padding: 8px 10px; color: #fff; font-size: 11px; outline: none; user-select: text; }
.task-control-panel input:focus { border-color: var(--accent-blue); }
.task-priority-selector { display: flex; flex-direction: column; gap: 6px; font-size: 11px; color: #aeaeae; }
.task-priority-selector label { display: flex; align-items: center; gap: 6px; cursor: pointer; }
.task-priority-selector input { cursor: pointer; margin: 0; width: auto; }
.dot-prio { width: 6px; height: 6px; border-radius: 50%; display: inline-block; }
.dot-prio.high { background: var(--cyber-red); }
.dot-prio.medium { background: var(--cyber-orange); }
.dot-prio.low { background: var(--cyber-green); }
.task-add-btn { background: var(--accent-blue); color: #fff; border: none; padding: 8px; border-radius: 6px; font-size: 11px; font-weight: bold; cursor: pointer; }
.task-add-btn:hover { filter: brightness(1.1); }
.task-wipe-btn { background: transparent; border: 1px dashed rgba(255,69,58,0.2); color: var(--cyber-red); padding: 6px; border-radius: 6px; font-size: 10px; font-weight: bold; cursor: pointer; }
.task-wipe-btn:hover { background: rgba(255,69,58,0.05); }
.task-stream-pane { flex: 1; padding: 14px; display: flex; flex-direction: column; }
.task-active-stream { flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 8px; }
.task-node-item { background: #0f0f13; border: 1px solid rgba(255,255,255,0.02); padding: 10px 12px; border-radius: 8px; display: flex; align-items: center; gap: 10px; transition: all 0.2s; }
.task-node-item.high-p { border-left: 3px solid var(--cyber-red); }
.task-node-item.medium-p { border-left: 3px solid var(--cyber-orange); }
.task-node-item.low-p { border-left: 3px solid var(--cyber-green); }
.task-node-item.completed { opacity: 0.4; background: #050507; }
.task-node-item.completed .task-text-lbl { text-decoration: line-through; color: #55555e; }
.task-chk-box { width: 14px; height: 14px; border: 1px solid rgba(255,255,255,0.2); border-radius: 3px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 9px; color: #fff; background: transparent; }
.task-chk-box.checked { background: var(--cyber-green); border-color: var(--cyber-green); }
.task-text-lbl { flex: 1; font-size: 12px; color: #e5e5ea; word-break: break-all; user-select: text; }
.task-del-btn { background: transparent; border: none; color: #55555e; font-size: 12px; cursor: pointer; padding: 0 4px; }
.task-del-btn:hover { color: var(--cyber-red); }
.task-empty-notice { font-size: 11px; color: #3a3a3e; font-style: italic; text-align: center; margin-top: 30px; }

/* CHRONOS LABORATORY MANAGEMENT CSS */
.clock-app-frame { display: flex; flex-direction: column; height: 100%; background: #060608; }
.clock-tab-bar { display: flex; background: #131316; border-bottom: 1px solid var(--glass-border); }
.clock-tab-btn { flex: 1; background: transparent; border: none; border-bottom: 2px solid transparent; padding: 12px; color: #8e8e93; font-size: 11px; font-weight: bold; cursor: pointer; transition: all 0.2s; }
.clock-tab-btn:hover { color: #fff; background: rgba(255,255,255,0.02); }
.clock-tab-btn.active { color: var(--accent-blue); border-bottom-color: var(--accent-blue); background: rgba(10, 132, 255, 0.05); }
.clock-content-area { flex: 1; padding: 20px; display: flex; flex-direction: column; overflow: auto; }
.clock-sub-pane { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.clock-pane-row { display: flex; gap: 10px; width: 100%; justify-content: center; align-items: center; }
.clock-pane-row input[type="time"] { background: #141419; border: 1px solid var(--glass-border); border-radius: 8px; color: #fff; padding: 10px 16px; font-size: 16px; outline: none; }
.clock-pane-row input[type="number"] { background: #141419; border: 1px solid var(--glass-border); border-radius: 8px; color: #fff; padding: 10px; width: 70px; text-align: center; font-size: 16px; outline: none; }
.clock-action-btn { border: none; border-radius: 8px; padding: 10px 20px; font-size: 12px; font-weight: bold; cursor: pointer; transition: filter 0.2s; }
.clock-action-btn:hover { filter: brightness(1.1); }
.clock-action-btn.primary { background: var(--accent-blue); color: #fff; }
.clock-action-btn.success { background: var(--cyber-green); color: #fff; }
.clock-action-btn.danger { background: var(--cyber-red); color: #fff; }
.clock-status-banner { margin-top: 15px; font-size: 12px; color: #8e8e93; font-style: italic; font-family: monospace; }
.alarm-trigger-banner { margin-top: 20px; width: 100%; background: rgba(255,69,58,0.15); border: 1px solid var(--cyber-red); border-radius: 8px; padding: 15px; text-align: center; display: flex; flex-direction: column; gap: 10px; animation: pulse 1s ease-in-out infinite; }
.alarm-trigger-banner span { font-weight: bold; color: var(--cyber-red); letter-spacing: 1px; font-size: 13px; }
.big-time-readout { font-size: 48px; font-family: monospace; font-weight: bold; color: #fff; margin-bottom: 20px; letter-spacing: 2px; text-shadow: 0 0 15px rgba(255,255,255,0.1); }
.stopwatch-laps-box { width: 100%; max-height: 160px; overflow-y: auto; background: #0f0f13; border: 1px solid var(--glass-border); border-radius: 8px; margin-top: 15px; padding: 8px; display: flex; flex-direction: column; gap: 4px; }
.stopwatch-lap-item { display: flex; justify-content: space-between; font-size: 11px; font-family: monospace; color: #aeaeae; padding: 4px 8px; border-bottom: 1px solid rgba(255,255,255,0.02); }

/* PING PONG CORE ARCADE MODULE STYLES */
.pong-action-toolbar { background: #131316; padding: 10px 20px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--glass-border); }
.pong-score-deck { font-family: monospace; font-size: 14px; font-weight: bold; color: var(--cyber-green); letter-spacing: 0.5px; }
.pong-reset-btn { background: rgba(255,255,255,0.05); border: 1px solid var(--glass-border); color: #fff; padding: 4px 14px; border-radius: 6px; font-size: 11px; font-weight: bold; cursor: pointer; }
.pong-reset-btn:hover { background: rgba(255,255,255,0.1); }
.pong-canvas-wrapper { display: flex; align-items: center; justify-content: center; background: #020203; height: 100%; width: 100%; }
#pongCanvas { background: #000; border: 1px dashed rgba(255,255,255,0.05); display: block; box-shadow: inset 0 0 40px rgba(0,0,0,0.9); }

/* FLAPPY BIRD OPERATIONAL LAYOUT */
.flappy-action-toolbar { background: #131316; padding: 10px 16px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--glass-border); }
.flappy-score-deck { font-family: monospace; font-size: 13px; font-weight: bold; color: var(--cyber-orange); }
.flappy-hint-lbl { font-size: 10px; color: #8e8e93; font-style: italic; letter-spacing: 0.2px; }
.flappy-canvas-wrapper { display: flex; align-items: center; justify-content: center; background: #111; height: 100%; width: 100%; position: relative; }
#flappyCanvas { background: linear-gradient(to bottom, #1a2634 0%, #0d131a 100%); display: block; cursor: pointer; }
.flappy-overlay-message { position: absolute; inset: 0; background: rgba(5,5,8,0.85); backdrop-filter: blur(8px); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; text-align: center; z-index: 10; }
.flappy-overlay-message h3 { font-size: 20px; font-weight: 900; color: var(--cyber-red); letter-spacing: 2px; }
.flappy-overlay-message p { font-size: 11px; color: #8e8e93; letter-spacing: 1px; }
.flappy-overlay-message button { background: #fff; color: #000; font-weight: bold; font-size: 11px; border: none; padding: 8px 20px; border-radius: 6px; cursor: pointer; margin-top: 10px; }
.flappy-overlay-message button:hover { background: rgba(255,255,255,0.9); }

/* SPACE INVADERS OPERATIONAL LAYOUT */
.si-action-toolbar { background: #131316; padding: 10px 16px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--glass-border); }
.si-score-deck { font-family: monospace; font-size: 13px; font-weight: bold; color: var(--cyber-green); }
.si-hint-lbl { font-size: 10px; color: #8e8e93; font-style: italic; letter-spacing: 0.2px; }
.si-canvas-wrapper { display: flex; align-items: center; justify-content: center; background: #000; height: 100%; width: 100%; position: relative; }
#spaceInvadersCanvas { background: #050505; display: block; }
.si-overlay-message { position: absolute; inset: 0; background: rgba(5,5,8,0.85); backdrop-filter: blur(8px); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; text-align: center; z-index: 10; }
.si-overlay-message h3 { font-size: 20px; font-weight: 900; color: var(--cyber-red); letter-spacing: 2px; }
.si-overlay-message p { font-size: 11px; color: #8e8e93; letter-spacing: 1px; }
.si-overlay-message button { background: #fff; color: #000; font-weight: bold; font-size: 11px; border: none; padding: 8px 20px; border-radius: 6px; cursor: pointer; margin-top: 10px; }
.si-overlay-message button:hover { background: rgba(255,255,255,0.9); }

/* ARYA CORE HUD SYSTEM */
.hud-dock-system { 
    position: absolute; 
    bottom: 25px; 
    left: 25px; 
    display: flex; 
    align-items: center; 
    z-index: 9999;
}

.hud-anchor-core { 
    width: 54px; 
    height: 54px; 
    background: #0d0d11; 
    border: 2px solid rgba(255, 255, 255, 0.15); 
    border-radius: 50%; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    cursor: pointer; 
    position: relative; 
    box-shadow: 0 0 20px rgba(0,0,0,0.7), inset 0 0 10px rgba(255,255,255,0.05); 
    z-index: 12;
    transition: transform 0.2s;
}
.hud-anchor-core:hover { transform: scale(1.05); border-color: var(--accent-blue); }
.hud-core-symbol { font-size: 22px; z-index: 2; }
.hud-core-pulse { position: absolute; inset: -4px; border: 1px dashed rgba(10, 132, 255, 0.3); border-radius: 50%; animation: spin 12s linear infinite; }

.hud-search-track {
    background: rgba(15, 15, 22, 0.85);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-left: none;
    height: 44px;
    display: flex;
    align-items: center;
    padding: 0 14px 0 24px;
    margin-left: -18px;
    z-index: 10;
    box-shadow: 5px 10px 25px rgba(0,0,0,0.4);
}
.hud-search-track input {
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 6px;
    padding: 5px 10px;
    color: #fff;
    font-size: 11px;
    width: 130px;
    outline: none;
    user-select: text;
    transition: all 0.3s;
}
.hud-search-track input:focus {
    width: 170px;
    border-color: var(--accent-blue);
    background: rgba(0, 0, 0, 0.7);
    box-shadow: 0 0 10px rgba(10, 132, 255, 0.2);
}

.hud-rail-track { 
    display: flex; 
    gap: 12px; 
    align-items: center; 
    background: rgba(10, 10, 14, 0.8); 
    backdrop-filter: blur(20px); 
    border: 1px solid var(--glass-border); 
    border-left: none;
    padding: 0 20px 0 20px; 
    height: 44px; 
    border-radius: 0 22px 22px 0; 
    z-index: 5;
    box-shadow: 10px 10px 30px rgba(0,0,0,0.5);
    transition: all 0.4s cubic-bezier(0.1, 0.9, 0.2, 1);
}
.hud-rail-track:empty { opacity: 0; transform: translateX(-10px); pointer-events: none; }

.dock-item-wrapper { display: flex; flex-direction: column; align-items: center; position: relative; width: 40px; }
.dock-btn { font-size: 24px; cursor: pointer; transition: transform 0.2s cubic-bezier(0.1, 0.8, 0.3, 1.1); }
.dock-btn:hover { transform: translateY(-4px) scale(1.1); }

.app-dot { 
    font-size: 8px;
    font-family: monospace;
    color: rgba(255,255,255,0.2);
    font-weight: 900;
    margin-top: 1px; 
    transition: all 0.2s; 
    position: absolute; 
    bottom: -11px;
    content: '-';
    opacity: 0;
}
.dock-item-wrapper .app-dot { opacity: 1; }
.dock-item-wrapper.focused .app-dot { 
    color: var(--cyber-green); 
    text-shadow: 0 0 6px var(--cyber-green);
    transform: scale(1.2);
}
.dock-item-wrapper .app-dot::before { content: '▪'; }

/* START MENU OVERLAY */
.start-overlay { position: absolute; bottom: 95px; left: 40px; width: 560px; height: 500px; background: rgba(10,10,14,0.92); backdrop-filter: blur(35px); border: 1px solid var(--glass-border); border-radius: 24px; padding: 30px; opacity: 0; pointer-events: none; transition: 0.3s cubic-bezier(0.1, 0.9, 0.2, 1); z-index: 9995; box-shadow: 0 30px 60px rgba(0,0,0,0.7); }
.start-overlay.active { opacity: 1; transform: translateY(0); pointer-events: all; }
.start-header { font-size: 13px; font-weight: 800; color: #8e8e93; letter-spacing: 1px; margin-bottom: 16px; text-transform: uppercase; }
.start-search-box input { width: 100%; background: rgba(255,255,255,0.04); border: 1px solid var(--glass-border); border-radius: 10px; padding: 10px 16px; color: #fff; font-size: 13px; outline: none; margin-bottom: 24px; }
.start-apps-headline { font-size: 10px; font-weight: 800; color: #55555a; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; }
.start-apps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; overflow-y: auto; height: 300px; }
.app-tile { background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.03); padding: 16px 10px; border-radius: 12px; text-align: center; cursor: pointer; transition: background 0.2s, transform 0.2s; font-size: 32px; }
.app-tile:hover { background: var(--active-tint); transform: translateY(-2px); }
.app-tile span { display: block; font-size: 11px; margin-top: 6px; color: #d1d1d6; font-weight: 500; }

@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.6; } }

/* =========================================================
   POLISH LAYER — motion, window chrome, menu bar & tray,
   Control Center, notifications, Nova Snake
   ========================================================= */
:root { --ease-out: cubic-bezier(.2, .8, .2, 1); --spring: cubic-bezier(.34, 1.56, .64, 1); --pop-bg: rgba(28, 28, 36, .62); }

button, .app-tile, .dock-btn, .side-item, .file-node { transition: transform .18s var(--ease-out), background .2s, filter .2s, border-color .2s, box-shadow .25s; }
button:active { transform: scale(.95); }
button, .app-tile, .dock-btn, .mb-btn, .pop-item, .cc-row, .cc-tile, .notif, .win-btns > div { cursor: pointer; }

/* system layers fade in */
.login-layer:not(.hidden) { animation: layerIn .6s var(--ease-out); }
.desktop-layer:not(.hidden) { animation: desktopIn .9s var(--ease-out); }
.glass-auth-card { animation: cardIn .7s var(--ease-out) both; }
.glass-auth-card.shake { animation: shake .45s; }
.auth-footer.error { color: var(--cyber-red); }
#loadFill { transition: width .15s linear; box-shadow: 0 0 12px rgba(255,255,255,.6); }

/* ---------- Windows ---------- */
.app-window {
    transform-origin: 50% 100%;
    transition: opacity .28s var(--ease-out), transform .38s var(--ease-out), box-shadow .3s, filter .3s;
    box-shadow: 0 14px 40px rgba(0,0,0,.45);
}
.app-window:not(.hidden) { animation: winOpen .36s var(--ease-out); }
.app-window.focused { box-shadow: 0 34px 90px rgba(0,0,0,.65), 0 0 0 1px rgba(255,255,255,.1); }
.app-window.dragging { box-shadow: 0 46px 110px rgba(0,0,0,.72), 0 0 0 1px rgba(255,255,255,.16); }
.app-window.closing { animation: winClose .18s ease-in forwards !important; pointer-events: none; }
.app-window.minimized { opacity: 0 !important; transform: translateY(55vh) scale(.28) !important; filter: blur(4px); pointer-events: none !important; }
.app-window:not(.focused) .win-title-bar { background: #0f0f12; }
.app-window:not(.focused) .win-btns > div { filter: grayscale(1) brightness(.7); }
.app-window:not(.focused) .win-name { opacity: .45; }

.win-title-bar { position: relative; min-height: 40px; transition: background .3s; }
.win-name { position: absolute; left: 90px; right: 90px; text-align: center; margin: 0; pointer-events: none; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; transition: opacity .3s; }
.win-btns { position: relative; z-index: 2; gap: 8px; }
.btn-close, .btn-minimize { width: 13px; height: 13px; display: grid; place-items: center; font-size: 9px; font-weight: 900; line-height: 1; color: transparent; transition: transform .15s var(--spring), background .2s, filter .3s; }
.btn-close::after { content: '✕'; } .btn-minimize::after { content: '–'; font-size: 12px; }
.win-btns:hover .btn-close, .win-btns:hover .btn-minimize { color: rgba(0,0,0,.6); }
.btn-close:hover, .btn-minimize:hover { transform: scale(1.12); }

/* ---------- Menu bar ---------- */
.top-bar {
    height: 34px; padding: 0 8px; font-size: 13px; font-weight: 500;
    background: rgba(12, 12, 18, .42);
    backdrop-filter: blur(30px) saturate(1.8); -webkit-backdrop-filter: blur(30px) saturate(1.8);
    border-bottom: 1px solid rgba(255,255,255,.07);
}
.menubar-left, .menubar-right { display: flex; align-items: center; gap: 1px; height: 100%; }
.mb-btn { height: 24px; padding: 0 9px; border-radius: 6px; display: flex; align-items: center; gap: 6px; white-space: nowrap; transition: background .15s, transform .15s var(--ease-out); }
.mb-btn:hover, .mb-btn.open { background: rgba(255,255,255,.15); }
.mb-btn:active { background: rgba(255,255,255,.24); transform: scale(.96); }
.mb-logo { font-size: 15px; padding: 0 10px; }
.mb-app { font-weight: 800; }
#trayWifi { color: #fff; position: relative; }
#trayWifi .wifi-slash { opacity: 0; stroke-dasharray: 26; stroke-dashoffset: 26; transition: stroke-dashoffset .3s, opacity .2s; }
#trayWifi.off { opacity: .55; } #trayWifi.off .wifi-slash { opacity: 1; stroke-dashoffset: 0; }
.tray-battery { gap: 5px; font-size: 12px; font-weight: 600; }
.battery-outer { width: 25px; height: 12px; border-radius: 4px; border: 1.3px solid rgba(255,255,255,.5); padding: 1px; }
.battery-outer::after { right: -4px; top: 2.5px; height: 4px; border-radius: 0 2px 2px 0; }
#batteryInner { border-radius: 2px; transition: width .6s var(--ease-out), background .3s; }
#chargeIcon { font-size: 11px; color: var(--cyber-green); }
.tray-clock { gap: 8px; font-weight: 600; }
#systemDate { font-size: 13px; opacity: 1; text-transform: none; letter-spacing: 0; font-weight: 500; }
#systemClock { font-size: 13px; font-weight: 600; }

/* ---------- Popovers (menus + Control Center) ---------- */
.pop {
    position: absolute; top: 40px; z-index: 10001; min-width: 230px; padding: 6px;
    background: var(--pop-bg); backdrop-filter: blur(40px) saturate(1.9); -webkit-backdrop-filter: blur(40px) saturate(1.9);
    border: 1px solid rgba(255,255,255,.14); border-radius: 12px; box-shadow: 0 24px 60px rgba(0,0,0,.55), inset 0 1px 0 rgba(255,255,255,.12);
    opacity: 0; transform: translateY(-8px) scale(.96); transform-origin: top left; pointer-events: none; visibility: hidden;
    transition: opacity .2s, transform .3s var(--ease-out), visibility .3s;
}
.pop.open { opacity: 1; transform: none; pointer-events: auto; visibility: visible; }
.pop-item { padding: 6px 12px; border-radius: 6px; font-size: 13px; transition: background .12s; }
.pop-item:hover { background: var(--accent-blue); }
.pop-item.danger:hover { background: var(--cyber-red); }
.pop-item.dis { opacity: .45; pointer-events: none; }
.pop-sep { height: 1px; background: rgba(255,255,255,.12); margin: 5px 8px; }

.cc-panel { right: 10px; width: 330px; padding: 12px; display: flex; flex-direction: column; gap: 10px; transform-origin: top right; }
.cc-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 10px; }
.cc-side { display: flex; flex-direction: column; gap: 10px; }
.cc-block { background: rgba(255,255,255,.09); border-radius: 14px; padding: 10px; }
.cc-conn { display: flex; flex-direction: column; gap: 6px; padding: 8px; }
.cc-row { display: flex; align-items: center; gap: 10px; padding: 4px; border-radius: 10px; transition: background .15s; }
.cc-row:hover { background: rgba(255,255,255,.07); }
.cc-ic { width: 32px; height: 32px; border-radius: 50%; background: rgba(255,255,255,.14); display: grid; place-items: center; font-size: 14px; flex: none; transition: background .25s, transform .3s var(--spring); filter: grayscale(1) brightness(1.4); }
.cc-row.on .cc-ic { background: var(--accent-blue); filter: none; }
.cc-row:active .cc-ic { transform: scale(.88); }
.cc-txt b { display: block; font-size: 12px; font-weight: 600; } .cc-txt small { font-size: 10.5px; opacity: .65; }
.cc-battery { flex: 1; display: flex; flex-direction: column; justify-content: center; }
.cc-battery small { font-size: 10.5px; opacity: .65; } .cc-big { font-size: 26px; font-weight: 700; letter-spacing: -.5px; }
.cc-tile { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; font-size: 20px; transition: background .2s, transform .2s var(--ease-out); }
.cc-tile small { font-size: 10.5px; opacity: .75; } .cc-tile:hover { background: rgba(255,255,255,.16); } .cc-tile:active { transform: scale(.94); }
.cc-lbl { font-size: 12px; font-weight: 600; margin-bottom: 6px; }
.cc-range-wrap { display: flex; align-items: center; gap: 10px; }
.cc-range { --p: 100%; -webkit-appearance: none; appearance: none; flex: 1; height: 24px; border-radius: 12px; outline: none; cursor: pointer;
    background: linear-gradient(to right, #fff var(--p), rgba(255,255,255,.2) var(--p)); }
.cc-range::-webkit-slider-thumb { -webkit-appearance: none; width: 24px; height: 24px; border-radius: 50%; background: #fff; box-shadow: 0 1px 6px rgba(0,0,0,.45); }
.cc-range::-moz-range-thumb { width: 24px; height: 24px; border: none; border-radius: 50%; background: #fff; box-shadow: 0 1px 6px rgba(0,0,0,.45); }

#dimLayer { position: absolute; inset: 0; background: #000; opacity: 0; pointer-events: none; z-index: 20000; transition: opacity .15s; }

/* ---------- Notifications ---------- */
.notif-stack { position: absolute; top: 44px; right: 12px; display: flex; flex-direction: column; gap: 8px; z-index: 10002; pointer-events: none; }
.notif { pointer-events: auto; width: 320px; display: flex; gap: 10px; align-items: center; padding: 10px 12px; border-radius: 14px;
    background: var(--pop-bg); backdrop-filter: blur(40px) saturate(1.9); -webkit-backdrop-filter: blur(40px) saturate(1.9);
    border: 1px solid rgba(255,255,255,.14); box-shadow: 0 18px 44px rgba(0,0,0,.5); animation: notifIn .45s var(--spring); transition: opacity .3s, transform .3s var(--ease-out); }
.notif.out { opacity: 0; transform: translateX(40px); }
.notif-ic { width: 34px; height: 34px; border-radius: 9px; background: rgba(255,255,255,.12); display: grid; place-items: center; font-size: 18px; flex: none; }
.notif-tx b { display: block; font-size: 12.5px; } .notif-tx span { font-size: 11.5px; opacity: .7; }

/* ---------- Dock ---------- */
.dock-item-wrapper { transition: width .25s var(--ease-out); }
.dock-item-wrapper.enter { animation: dockPop .45s var(--spring); }
.dock-item-wrapper:hover .dock-btn { transform: translateY(-9px) scale(1.4); }
.dock-item-wrapper:has(+ .dock-item-wrapper:hover) .dock-btn, .dock-item-wrapper:hover + .dock-item-wrapper .dock-btn { transform: translateY(-4px) scale(1.18); }
.dock-btn { transition: transform .25s var(--spring); }
.hud-anchor-core { transition: transform .3s var(--spring), border-color .2s, box-shadow .3s; }
.hud-anchor-core:hover { box-shadow: 0 0 26px rgba(10,132,255,.35), inset 0 0 10px rgba(255,255,255,.08); }
.hud-anchor-core:active { transform: scale(.93); }

/* ---------- Start menu polish (same layout) ---------- */
.start-overlay { transform: translateY(18px) scale(.96); transform-origin: bottom left; transition: opacity .25s, transform .4s var(--ease-out); }
.start-overlay.active { transform: none; }
.start-search-box input { transition: border-color .2s, box-shadow .25s, background .2s; }
.start-search-box input:focus { border-color: var(--accent-blue); background: rgba(255,255,255,.07); box-shadow: 0 0 0 3px rgba(10,132,255,.2); }
.start-overlay.active .app-tile { animation: tileIn .45s var(--ease-out) both; animation-delay: calc(var(--i, 0) * 22ms + 60ms); }
.app-tile:hover { background: var(--active-tint); border-color: rgba(255,255,255,.12); transform: translateY(-3px); box-shadow: 0 10px 24px rgba(0,0,0,.35); }
.app-tile:active { transform: scale(.95); }
.start-apps { scrollbar-width: thin; scrollbar-color: rgba(255,255,255,.2) transparent; }

/* ---------- Nova Snake ---------- */
.snake-action-toolbar { background: #131316; padding: 10px 16px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--glass-border); }
.snake-score-deck { font-family: monospace; font-size: 13px; font-weight: bold; color: var(--cyber-green); }
.snake-hint-lbl { font-size: 10px; color: #8e8e93; font-style: italic; }
.snake-canvas-wrapper { display: flex; align-items: center; justify-content: center; background: #05080b; height: 100%; width: 100%; position: relative; }
#snakeCanvas { display: block; border-radius: 6px; }
.snake-overlay { position: absolute; inset: 0; background: rgba(5,8,12,.78); backdrop-filter: blur(6px); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; text-align: center; z-index: 10; opacity: 0; pointer-events: none; transition: opacity .3s; }
.snake-overlay.show { opacity: 1; pointer-events: auto; }
.snake-overlay h3 { font-size: 22px; font-weight: 900; letter-spacing: 3px; color: var(--cyber-green); text-shadow: 0 0 18px rgba(50,215,75,.45); }
.snake-overlay.over h3 { color: var(--cyber-red); text-shadow: 0 0 18px rgba(255,69,58,.45); }
.snake-overlay p { font-size: 11px; color: #8e8e93; letter-spacing: 1px; }
.snake-overlay button { background: #fff; color: #000; font-weight: bold; font-size: 11px; border: none; padding: 9px 22px; border-radius: 8px; margin-top: 8px; }
.snake-overlay button:hover { transform: translateY(-1px) scale(1.04); }

/* ---------- Keyframes ---------- */
@keyframes layerIn { from { opacity: 0; } }
@keyframes desktopIn { from { opacity: 0; transform: scale(1.03); filter: blur(8px); } }
@keyframes cardIn { from { opacity: 0; transform: translateY(24px) scale(.96); } }
@keyframes shake { 20%, 60% { transform: translateX(-10px); } 40%, 80% { transform: translateX(10px); } }
@keyframes winOpen { from { opacity: 0; transform: scale(.9) translateY(24px); } }
@keyframes winClose { to { opacity: 0; transform: scale(.92) translateY(8px); } }
@keyframes tileIn { from { opacity: 0; transform: translateY(12px) scale(.94); } }
@keyframes dockPop { from { opacity: 0; transform: scale(.3) translateY(14px); } }
@keyframes notifIn { from { opacity: 0; transform: translateX(60px) scale(.94); } }

@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; } }
