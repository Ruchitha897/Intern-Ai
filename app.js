/* ==========================================================================
   INTER FLOW AI - HOLOGRAPHIC DASHBOARD ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  /* --- Mock Database & Application State --- */
  const defaultState = {
    candidates: [
      {
        id: 'c-1',
        name: 'Aria Chen',
        role: 'AI Research Intern',
        score: 97,
        stage: 'applied',
        skills: { coding: 95, design: 88, communication: 92, problemSolving: 98, culture: 90 },
        summary: 'Outstanding academic record in Deep Learning. Completed two computer vision publications. Excellent collaborative skills.',
        strengths: ['Expert in PyTorch & Transformer architectures', 'Strong algorithmic background', 'Proactive communication style'],
        risks: ['Limited industry experience', 'Prefers theoretical tasks over production deployment'],
        questions: [
          'Can you explain the mathematical intuition behind self-attention scaling?',
          'How would you optimize a Vision Transformer memory profile for real-time edge devices?',
          'Describe a time you solved a complex research bottleneck within a team setting.'
        ],
        email: {
          subject: 'AI Research Internship Application',
          preview: 'Hello team, I wanted to follow up on my application for the AI Research...',
          body: 'Hello team,\n\nI wanted to follow up on my application for the AI Research Intern position. I am highly excited about Intern Flow AI\'s holographic telemetry features and would love to discuss how my publication in transformer latency optimization aligns with your stack.\n\nBest regards,\nAria Chen'
        }
      },
      {
        id: 'c-2',
        name: 'Marcus Vance',
        role: 'Full-Stack Developer',
        score: 94,
        stage: 'applied',
        skills: { coding: 92, design: 95, communication: 85, problemSolving: 90, culture: 92 },
        summary: 'Experienced developer with multiple production-ready SaaS projects. Strong UI/UX focus with glassmorphic systems.',
        strengths: ['Advanced CSS/Canvas experience', 'Proficient in modern JS architectures', 'Self-motivated portfolio work'],
        risks: ['Lacks corporate team structure exposure', 'Slightly weaker backend optimization experience'],
        questions: [
          'Walk us through how you build a smooth, 60fps canvas animation with parallax layers.',
          'How do you manage state transitions between complex asynchronous client panels?',
          'What is your approach to maintaining responsive performance during high-frequency telemetry loads?'
        ],
        email: {
          subject: 'Full-Stack Application & Portfolio',
          preview: 'Hey! Just sent over my updated portfolio site. It has some cool Web...',
          body: 'Hey!\n\nJust sent over my updated portfolio site. It has some cool WebGL and Canvas animations. I would love to join Intern Flow AI to design the next generation of interactive UI systems.\n\nBest,\nMarcus Vance'
        }
      },
      {
        id: 'c-3',
        name: 'Elena Rostova',
        role: 'ML Engineer',
        score: 92,
        stage: 'screening',
        skills: { coding: 90, design: 80, communication: 95, problemSolving: 92, culture: 96 },
        summary: 'Excellent communicator with clean software engineering practices. Experienced in ETL pipelining and data scaling.',
        strengths: ['Strong Python & distributed computing skills', 'Excellent system design approach', 'Culture champion candidate'],
        risks: ['Fewer specialized model architecture designs', 'Minimal frontend familiarity'],
        questions: [
          'How do you design a robust ETL pipeline that feeds real-time training parameters to model nodes?',
          'Discuss how you troubleshoot a model skewing issue in production.',
          'Describe your experience with containerized distributed model training.'
        ],
        email: {
          subject: 'Screening Call Follow-up',
          preview: 'Thanks for the chat today! I am excited about the telemetry scaling goals...',
          body: 'Thanks for the chat today!\n\nI am excited about the telemetry scaling goals you mentioned. As a next step, I have uploaded my GitHub project demonstrating automated data pipelining.\n\nWarmly,\nElena Rostova'
        }
      },
      {
        id: 'c-4',
        name: 'Leo Dupont',
        role: 'Data Science Intern',
        score: 89,
        stage: 'screening',
        skills: { coding: 85, design: 70, communication: 88, problemSolving: 91, culture: 85 },
        summary: 'Solid mathematics background. Adept at data visualization and feature engineering workflows.',
        strengths: ['Strong analytical core', 'Great SQL and Pandas expertise', 'Detail-oriented reporting'],
        risks: ['Relatively quiet communicator', 'Needs support in deploying models to production servers'],
        questions: [
          'How do you handle highly skewed datasets during initial feature engineering?',
          'What statistical tests do you rely on to validate correlation significance?',
          'How do you explain a complex data prediction trend to a non-technical stakeholder?'
        ],
        email: {
          subject: 'Interview Availability',
          preview: 'Hello! Here are my available slots for the upcoming panel technical assessment...',
          body: 'Hello!\n\nHere are my available slots for the upcoming panel technical assessment. I have Wednesday and Friday afternoon free.\n\nBest,\nLeo Dupont'
        }
      },
      {
        id: 'c-5',
        name: 'Sophia Patel',
        role: 'Product Manager Intern',
        score: 95,
        stage: 'interview',
        skills: { coding: 75, design: 90, communication: 98, problemSolving: 92, culture: 97 },
        summary: 'Energetic candidate with past startup leadership experience. Exceptional articulation and backlog management skills.',
        strengths: ['Top-tier communication and alignment management', 'Strong design sensibilities', 'Very high adaptability'],
        risks: ['Non-technical background; might need support on low-level system design specs'],
        questions: [
          'How do you prioritize features when facing conflicting requirements from engineers and executives?',
          'Describe a time you had to pivot a product goal due to a sudden technical bottleneck.',
          'How do you define success metrics for an AI dashboard tool?'
        ],
        email: {
          subject: 'Technical Sync Preparation',
          preview: 'Hi Intern Flow team, I have reviewed the telemetry product brief and...',
          body: 'Hi Intern Flow team,\n\nI have reviewed the telemetry product brief and prepared a mock feature backlog outlining potential AI Core integrations. Looking forward to our call tomorrow.\n\nCheers,\nSophia Patel'
        }
      },
      {
        id: 'c-6',
        name: 'Kai Tanaka',
        role: 'DevOps / Infrastructure',
        score: 91,
        stage: 'interview',
        skills: { coding: 88, design: 75, communication: 82, problemSolving: 95, culture: 90 },
        summary: 'Infrastructure enthusiast. Built personal home lab servers. Experienced in Kubernetes scaling and CI/CD pipelines.',
        strengths: ['Deep Docker & Kubernetes knowledge', 'Excellent automated testing habits', 'Resource efficiency focus'],
        risks: ['Quiet personality', 'Lacks experience in client-facing dashboards'],
        questions: [
          'How do you configure a self-healing Kubernetes node group for fluctuating dashboard request peaks?',
          'Walk us through your favorite CI/CD security scanning tools.',
          'What strategies do you deploy to minimize container size and build times?'
        ],
        email: {
          subject: 'System Admin Portfolio Update',
          preview: 'Good morning, I updated the cluster config repository link with my test build...',
          body: 'Good morning,\n\nI updated the cluster config repository link with my test build pipelines. Let me know if the private repo.\n\nRegards,\nKai Tanaka'
        }
      },
      {
        id: 'c-7',
        name: 'Chloe Leblanc',
        role: 'UX Designer',
        score: 96,
        stage: 'offer',
        skills: { coding: 70, design: 98, communication: 93, problemSolving: 85, culture: 95 },
        summary: 'Stunning design portfolio. Master of glassmorphism and neon sci-fi vector interfaces. Exceptional mockup speed.',
        strengths: ['World-class design skills', 'Strong understanding of web animation boundaries', 'Empathetic UX researcher'],
        risks: ['Limited scripting/JS capability', 'Requires clear functional specifications to begin layouts'],
        questions: [
          'How do you balance futuristic styling constraints against strict accessibility standards?',
          'Describe your workflow when handing off interactive animations to frontend devs.',
          'What UX tweaks would you suggest for the current gravity telemetry core?'
        ],
        email: {
          subject: 'Offer Letter Clarification',
          preview: 'Dear HR, Thank you so much for the offer! I am thrilled to join...',
          body: 'Dear HR,\n\nThank you so much for the offer! I am thrilled to join the Intern Flow AI team. I had a quick question regarding the flexible remote arrangement options listed.\n\nBest,\nChloe Leblanc'
        }
      }
    ],
    interviews: [
      { id: 'i-1', candidateId: 'c-5', date: '2026-06-08', time: '11:00', type: 'system-design', interviewer: 'Alex Mercer (Principal Architect)' },
      { id: 'i-2', candidateId: 'c-6', date: '2026-06-08', time: '14:30', type: 'technical', interviewer: 'Jane Doe (DevOps Lead)' },
      { id: 'i-3', candidateId: 'c-3', date: '2026-06-09', time: '10:00', type: 'behavioral', interviewer: 'Sarah Connor (HR Director)' }
    ],
    selectedCandidateId: 'c-1',
    activePipelineStage: 'applied',
    selectedEmailId: null,
    selectedCalendarDate: '2026-06-08',
    telemetry: {
      theme: 'purple',
      gravity: 0.12, // Bob speed scale
      nebulaIntensity: 0.65,
      orbitSpeed: 1.5,
      ambientHum: false,
      sfx: true
    }
  };

  const savedState = localStorage.getItem('internflow_state');
  const state = savedState ? JSON.parse(savedState) : defaultState;

  function saveState() {
    localStorage.setItem('internflow_state', JSON.stringify(state));
  }


  /* --- DOM Selector References --- */
  const el = {
    spaceCanvas: document.getElementById('space-canvas'),
    tetherCanvas: document.getElementById('tether-canvas'),
    neuralCanvas: document.getElementById('neural-canvas'),
    
    // Telemetry display values
    dispCoreState: document.getElementById('val-core-state'),
    dispGravityLevel: document.getElementById('val-gravity-level'),
    dispSyncRate: document.getElementById('val-sync-rate'),
    dispLatency: document.getElementById('val-latency'),
    
    // Control elements
    sliderGravity: document.getElementById('slider-gravity'),
    sliderNebula: document.getElementById('slider-nebula'),
    sliderOrbit: document.getElementById('slider-orbit'),
    toggleAmbientHum: document.getElementById('toggle-ambient-hum'),
    toggleSfx: document.getElementById('toggle-sfx'),
    
    themeBtnPurple: document.getElementById('btn-theme-purple'),
    themeBtnCyber: document.getElementById('btn-theme-cyber'),
    themeBtnSolar: document.getElementById('btn-theme-solar'),
    
    dispGravitySpeed: document.getElementById('disp-gravity-speed'),
    dispNebulaIntensity: document.getElementById('disp-nebula-intensity'),
    dispOrbitSpeed: document.getElementById('disp-orbit-speed'),
    
    // Widget details
    pipelineCandidates: document.getElementById('pipeline-candidates'),
    candidateDetailPane: document.getElementById('candidate-detail-pane'),
    detailName: document.getElementById('detail-name'),
    detailRole: document.getElementById('detail-role'),
    detailScore: document.getElementById('detail-score'),
    detailSummaryText: document.getElementById('detail-summary-text'),
    btnPromoteCandidate: document.getElementById('btn-promote-candidate'),
    btnRejectCandidate: document.getElementById('btn-reject-candidate'),
    btnCloseDetail: document.getElementById('btn-close-detail'),
    
    assistantSelect: document.getElementById('assistant-candidate-select'),
    radarSvg: document.getElementById('radar-svg'),
    panelSkills: document.getElementById('panel-skills'),
    panelSummary: document.getElementById('panel-summary'),
    panelQuestions: document.getElementById('panel-questions'),
    insightStrengthsList: document.getElementById('insight-strengths-list'),
    insightRisksList: document.getElementById('insight-risks-list'),
    aiQuestionsContainer: document.getElementById('ai-questions-container'),
    btnRegenQuestions: document.getElementById('btn-regenerate-questions'),
    
    calendarMonthYear: document.getElementById('calendar-month-year'),
    calendarGridDays: document.getElementById('calendar-grid-days'),
    scheduledInterviewsList: document.getElementById('scheduled-interviews-list'),
    btnOpenScheduleModal: document.getElementById('btn-open-schedule-modal'),
    
    emailThreadsContainer: document.getElementById('email-threads-container'),
    aiDraftInterface: document.getElementById('ai-draft-interface'),
    draftTypingIndicator: document.getElementById('draft-typing-indicator'),
    draftPreviewBox: document.getElementById('draft-preview-box'),
    btnSendDraft: document.getElementById('btn-send-draft'),
    btnDiscardDraft: document.getElementById('btn-discard-draft'),
    
    // Modals
    scheduleModal: document.getElementById('schedule-modal'),
    scheduleForm: document.getElementById('schedule-form'),
    schedCandidate: document.getElementById('sched-candidate'),
    schedDate: document.getElementById('sched-date'),
    schedTime: document.getElementById('sched-time'),
    schedInterviewer: document.getElementById('sched-interviewer'),
    schedType: document.getElementById('sched-type'),
    btnCloseModal: document.getElementById('btn-close-modal'),
    
    // Link Generated Modal
    linkGeneratedModal: document.getElementById('link-generated-modal'),
    generatedPortalUrl: document.getElementById('generated-portal-url'),
    btnCopyPortalLink: document.getElementById('btn-copy-portal-link'),
    btnOpenPortalLink: document.getElementById('btn-open-portal-link'),
    btnCloseLinkModal: document.getElementById('btn-close-link-modal'),
    btnCloseLinkGenerated: document.getElementById('btn-close-link-generated'),
    
    audioModal: document.getElementById('audio-auth-modal'),
    btnAudioEnable: document.getElementById('btn-audio-enable'),
    btnAudioSkip: document.getElementById('btn-audio-skip'),
    
    // Cards for drift & tilt
    cards: document.querySelectorAll('.floating-card'),
    centralCore: document.querySelector('.central-core-container'),
    hudCognitive: document.getElementById('hud-cognitive-index')
  };

  /* --- Web Audio API Synth Engine --- */
  let audioCtx = null;
  let ambientHumNode = null;
  let ambientGainNode = null;

  function initAudio() {
    if (audioCtx) return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();
      
      // 1. Create Deep Space Ambient Hum
      // We mix two low triangle/sine wave oscillators modulated slowly by an LFO
      const osc1 = audioCtx.createOscillator();
      const osc2 = audioCtx.createOscillator();
      const filter = audioCtx.createBiquadFilter();
      ambientGainNode = audioCtx.createGain();

      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(55, audioCtx.currentTime); // A1 note
      
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(82.4, audioCtx.currentTime); // E2 note

      // Modulating LFO for the cutoff frequency to create drift
      const lfo = audioCtx.createOscillator();
      const lfoGain = audioCtx.createGain();
      lfo.frequency.value = 0.15; // Slow modulation 0.15Hz
      lfoGain.gain.value = 40; // Swells filter frequency +/- 40Hz

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(110, audioCtx.currentTime);
      filter.Q.value = 4;

      // Connect LFO modulation to Filter Cutoff
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      // Connect sources to filter
      osc1.connect(filter);
      osc2.connect(filter);
      
      // Volume gain node
      ambientGainNode.gain.setValueAtTime(0, audioCtx.currentTime); // Start silent
      filter.connect(ambientGainNode);
      ambientGainNode.connect(audioCtx.destination);

      // Start sound sources
      osc1.start();
      osc2.start();
      lfo.start();

      // Store nodes reference to control volume later
      ambientHumNode = { osc1, osc2, lfo, filter };
      
      // Update toggle UI matches if needed
      if (state.telemetry.ambientHum) {
        ambientGainNode.gain.linearRampToValueAtTime(0.25, audioCtx.currentTime + 1.5);
      }
    } catch (e) {
      console.warn("Web Audio API not supported or initialization failed:", e);
    }
  }

  // Neon Beeps (Synthesized SFX)
  function playBeep(type) {
    if (!state.telemetry.sfx) return;
    if (!audioCtx) {
      // Lazy init audio if possible, but bypass if denied
      return;
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      const now = audioCtx.currentTime;

      if (type === 'hover') {
        // Light, airy hover click
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1400, now);
        osc.frequency.exponentialRampToValueAtTime(1900, now + 0.05);
        gain.gain.setValueAtTime(0.015, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'click') {
        // Confirm beep
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.1);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
        osc.start(now);
        osc.stop(now + 0.12);
      } else if (type === 'typing') {
        // Subtle cyber typing noise
        osc.type = 'sine';
        const randFreq = 600 + Math.random() * 800;
        osc.frequency.setValueAtTime(randFreq, now);
        gain.gain.setValueAtTime(0.008, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.02);
        osc.start(now);
        osc.stop(now + 0.02);
      } else if (type === 'success') {
        // Two-tone rising futuristic chime
        osc.type = 'sine';
        osc.frequency.setValueAtTime(987.77, now); // B5
        osc.frequency.setValueAtTime(1318.51, now + 0.08); // E6
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.setValueAtTime(0.04, now + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === 'promote') {
        // Retro-futuristic slide up
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.exponentialRampToValueAtTime(1567.98, now + 0.3); // G6
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === 'reject') {
        // Heavy alert slide down
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(330, now);
        osc.frequency.linearRampToValueAtTime(110, now + 0.25);
        
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 400;
        
        osc.disconnect(gain);
        osc.connect(filter);
        filter.connect(gain);
        
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.26);
        osc.start(now);
        osc.stop(now + 0.26);
      }
    } catch (e) {
      console.warn("SFX beep playing error:", e);
    }
  }

  /* --- Audio Authorization Handlers --- */
  el.btnAudioEnable.addEventListener('click', () => {
    initAudio();
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    state.telemetry.ambientHum = true;
    el.toggleAmbientHum.checked = true;
    
    // Fade in hum
    if (ambientGainNode) {
      ambientGainNode.gain.linearRampToValueAtTime(0.25, audioCtx.currentTime + 1.5);
    }
    
    el.audioModal.classList.add('hidden');
    playBeep('success');
  });

  el.btnAudioSkip.addEventListener('click', () => {
    state.telemetry.ambientHum = false;
    el.toggleAmbientHum.checked = false;
    state.telemetry.sfx = false;
    el.toggleSfx.checked = false;
    el.audioModal.classList.add('hidden');
  });

  // Highlight modal open if context isn't running
  setTimeout(() => {
    el.audioModal.classList.remove('hidden');
  }, 100);

  /* --- Space Parallax Canvas Engine --- */
  const spaceCtx = el.spaceCanvas.getContext('2d');
  let stars = [];
  let spaceWidth = 0;
  let spaceHeight = 0;
  let mousePosition = { x: -1000, y: -1000 };
  let interactiveParticles = [];

  function resizeSpaceCanvas() {
    spaceWidth = window.innerWidth;
    spaceHeight = window.innerHeight;
    el.spaceCanvas.width = spaceWidth;
    el.spaceCanvas.height = spaceHeight;
    generateStars();
  }

  function generateStars() {
    stars = [];
    const starCount = Math.floor((spaceWidth * spaceHeight) / 5000);
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * spaceWidth,
        y: Math.random() * spaceHeight,
        size: 0.4 + Math.random() * 1.5,
        speed: 0.02 + Math.random() * 0.15,
        depth: 0.1 + Math.random() * 0.9, // for parallax depth layers
        alpha: 0.2 + Math.random() * 0.8,
        glow: Math.random() > 0.8
      });
    }
  }

  window.addEventListener('resize', () => {
    resizeSpaceCanvas();
    resizeTetherCanvas();
  });
  resizeSpaceCanvas();

  // Mouse trailing on space background
  window.addEventListener('mousemove', (e) => {
    mousePosition.x = e.clientX;
    mousePosition.y = e.clientY;
    
    // Limit particle spawning rate
    if (Math.random() > 0.7) {
      const activeColor = getThemeColors();
      interactiveParticles.push({
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1 - 0.5,
        size: 1 + Math.random() * 3,
        alpha: 1.0,
        decay: 0.015 + Math.random() * 0.02,
        color: Math.random() > 0.5 ? activeColor.primary : activeColor.accent
      });
    }
  });

  /* --- Central AI Brain Logic (Canvas-based Neural Net) --- */
  const neuralCtx = el.neuralCanvas.getContext('2d');
  let neuralNodes = [];
  let neuralCenter = { x: 150, y: 150 };
  const neuralNodeCount = 18;

  function initNeuralCore() {
    neuralNodes = [];
    for (let i = 0; i < neuralNodeCount; i++) {
      // Distribute nodes randomly in shell rings
      const angle = Math.random() * Math.PI * 2;
      const shell = i < 5 ? 35 : (i < 12 ? 75 : 115); // Ring divisions
      const radius = shell + (Math.random() - 0.5) * 25;
      
      neuralNodes.push({
        x: neuralCenter.x + Math.cos(angle) * radius,
        y: neuralCenter.y + Math.sin(angle) * radius,
        baseX: neuralCenter.x + Math.cos(angle) * radius,
        baseY: neuralCenter.y + Math.sin(angle) * radius,
        radius: 2 + Math.random() * 4,
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.04,
        angle: angle,
        orbitRadius: radius,
        speed: 0.002 + Math.random() * 0.005
      });
    }
  }
  initNeuralCore();

  /* --- Tether Canvas Engine --- */
  const tetherCtx = el.tetherCanvas.getContext('2d');
  let tetherWidth = 0;
  let tetherHeight = 0;
  let lineDashOffset = 0;

  function resizeTetherCanvas() {
    tetherWidth = window.innerWidth;
    tetherHeight = window.innerHeight;
    el.tetherCanvas.width = tetherWidth;
    el.tetherCanvas.height = tetherHeight;
  }
  resizeTetherCanvas();

  /* --- Theme System Details --- */
  function getThemeColors() {
    const computedStyle = getComputedStyle(document.body);
    return {
      primary: computedStyle.getPropertyValue('--neon-primary').trim(),
      secondary: computedStyle.getPropertyValue('--neon-secondary').trim(),
      accent: computedStyle.getPropertyValue('--neon-accent').trim(),
      success: computedStyle.getPropertyValue('--neon-success').trim()
    };
  }

  function handleThemeChange(themeName) {
    document.body.setAttribute('data-theme-engine', themeName);
    state.telemetry.theme = themeName;
    saveState();
    
    // Clear theme active button classes
    el.themeBtnPurple.classList.remove('active');
    el.themeBtnCyber.classList.remove('active');
    el.themeBtnSolar.classList.remove('active');

    if (themeName === 'purple') el.themeBtnPurple.classList.add('active');
    if (themeName === 'cyber') el.themeBtnCyber.classList.add('active');
    if (themeName === 'solar') el.themeBtnSolar.classList.add('active');

    // Trigger visual/sfx confirmation
    playBeep('success');
    updateSkillsRadar();
  }

  el.themeBtnPurple.addEventListener('click', () => handleThemeChange('purple'));
  el.themeBtnCyber.addEventListener('click', () => handleThemeChange('cyber'));
  el.themeBtnSolar.addEventListener('click', () => handleThemeChange('solar'));

  /* --- Telemetry Slider Listeners --- */
  el.sliderGravity.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    state.telemetry.gravity = (val / 100) * 0.3; // Scale mapping
    saveState();
    el.dispGravityLevel.innerText = `${(state.telemetry.gravity * 2.5).toFixed(2)} G`;
    el.dispGravitySpeed.innerText = `${(val / 100 * 2).toFixed(2)}x`;
  });

  el.sliderNebula.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    state.telemetry.nebulaIntensity = val / 100;
    saveState();
    el.dispNebulaIntensity.innerText = `${val}%`;
  });

  el.sliderOrbit.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    state.telemetry.orbitSpeed = (val / 100) * 3.0;
    saveState();
    el.dispOrbitSpeed.innerText = `${state.telemetry.orbitSpeed.toFixed(1)}x`;
  });

  el.toggleAmbientHum.addEventListener('change', (e) => {
    state.telemetry.ambientHum = e.target.checked;
    saveState();
    
    // Start audio context if suspended
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    
    if (ambientGainNode) {
      if (state.telemetry.ambientHum) {
        initAudio();
        ambientGainNode.gain.linearRampToValueAtTime(0.25, audioCtx.currentTime + 1.0);
      } else {
        ambientGainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.8);
      }
    } else {
      initAudio();
    }
    playBeep('click');
  });

  el.toggleSfx.addEventListener('change', (e) => {
    state.telemetry.sfx = e.target.checked;
    saveState();
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    playBeep('click');
  });

  /* --- Render Engine Animation Loop --- */
  let tick = 0;
  let cardBobs = {}; // Stores the drift positions of cards
  
  function animationLoop() {
    tick++;
    lineDashOffset -= 0.35 * state.telemetry.orbitSpeed;

    const colors = getThemeColors();

    /* 1. Clear background canvases */
    spaceCtx.clearRect(0, 0, spaceWidth, spaceHeight);
    tetherCtx.clearRect(0, 0, tetherWidth, tetherHeight);

    /* 2. Draw Moving Nebula background via Canvas */
    const fillGlow = spaceCtx.createRadialGradient(
      spaceWidth * 0.5, spaceHeight * 0.5, 10,
      spaceWidth * 0.5, spaceHeight * 0.5, Math.max(spaceWidth, spaceHeight) * 0.8
    );
    fillGlow.addColorStop(0, 'transparent');
    fillGlow.addColorStop(0.3, colors.primary + `04`); // Sleek alpha
    fillGlow.addColorStop(0.6, colors.secondary + `02`);
    fillGlow.addColorStop(1, 'transparent');
    spaceCtx.fillStyle = fillGlow;
    spaceCtx.fillRect(0, 0, spaceWidth, spaceHeight);

    /* 3. Render Stars */
    stars.forEach(star => {
      // Slow star movement
      star.y += star.speed * (state.telemetry.orbitSpeed * 0.5);
      if (star.y > spaceHeight) {
        star.y = -10;
        star.x = Math.random() * spaceWidth;
      }

      // Parallax mouse sway displacement
      const maxDisplace = 35 * star.depth;
      const mouseDisplaceX = ((mousePosition.x / spaceWidth) - 0.5) * maxDisplace;
      const mouseDisplaceY = ((mousePosition.y / spaceHeight) - 0.5) * maxDisplace;
      
      const drawX = star.x + mouseDisplaceX;
      const drawY = star.y + mouseDisplaceY;

      // Twinkle alpha variance
      let twinkleAlpha = star.alpha;
      if (star.glow) {
        twinkleAlpha = star.alpha * (0.6 + Math.sin(tick * 0.05 + star.size) * 0.4);
      }

      spaceCtx.fillStyle = `rgba(255, 255, 255, ${twinkleAlpha * state.telemetry.nebulaIntensity})`;
      spaceCtx.beginPath();
      spaceCtx.arc(drawX, drawY, star.size, 0, Math.PI * 2);
      spaceCtx.fill();

      // Holographic glowing stars
      if (star.glow && star.size > 1.2) {
        spaceCtx.shadowBlur = 8;
        spaceCtx.shadowColor = colors.primary;
        spaceCtx.fillStyle = colors.primary + `33`;
        spaceCtx.beginPath();
        spaceCtx.arc(drawX, drawY, star.size * 2, 0, Math.PI * 2);
        spaceCtx.fill();
        spaceCtx.shadowBlur = 0; // Reset
      }
    });

    /* 4. Render Mouse Trails */
    interactiveParticles.forEach((p, idx) => {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        interactiveParticles.splice(idx, 1);
        return;
      }

      spaceCtx.shadowBlur = 10;
      spaceCtx.shadowColor = p.color;
      spaceCtx.fillStyle = p.color + Math.floor(p.alpha * 255).toString(16).padStart(2, '0');
      spaceCtx.beginPath();
      spaceCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      spaceCtx.fill();
      spaceCtx.shadowBlur = 0;
    });

    /* 5. Render Central AI Brain (Neural Canvas) */
    neuralCtx.clearRect(0, 0, el.neuralCanvas.width, el.neuralCanvas.height);
    
    // Brain pulsations
    const brainPulse = 1.0 + Math.sin(tick * 0.03) * 0.05;
    
    // Draw connections between neural nodes
    neuralCtx.lineWidth = 0.8;
    for (let i = 0; i < neuralNodes.length; i++) {
      const n1 = neuralNodes[i];
      for (let j = i + 1; j < neuralNodes.length; j++) {
        const n2 = neuralNodes[j];
        
        // Calculate distance
        const dx = n1.x - n2.x;
        const dy = n1.y - n2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Max connection distance threshold
        if (dist < 80) {
          const intensity = (1.0 - dist / 80) * 0.35 * brainPulse;
          neuralCtx.strokeStyle = colors.primary + Math.floor(intensity * 255).toString(16).padStart(2, '0');
          neuralCtx.beginPath();
          neuralCtx.moveTo(n1.x, n1.y);
          neuralCtx.lineTo(n2.x, n2.y);
          neuralCtx.stroke();
        }
      }
    }

    // Dynamic hover reactions for neural nodes
    const neuralRect = el.neuralCanvas.getBoundingClientRect();
    const relativeMouseX = mousePosition.x - neuralRect.left;
    const relativeMouseY = mousePosition.y - neuralRect.top;

    neuralNodes.forEach(node => {
      // Orbit drifting motion
      node.angle += node.speed * state.telemetry.orbitSpeed;
      node.x = neuralCenter.x + Math.cos(node.angle) * node.orbitRadius * brainPulse;
      node.y = neuralCenter.y + Math.sin(node.angle) * node.orbitRadius * brainPulse;

      // Mouse interactive push/pull force inside neural core
      const dx = node.x - relativeMouseX;
      const dy = node.y - relativeMouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 70) {
        // Draw lines from mouse to nodes in range
        const cursorLinkOpacity = (1.0 - dist / 70) * 0.5;
        neuralCtx.strokeStyle = colors.accent + Math.floor(cursorLinkOpacity * 255).toString(16).padStart(2, '0');
        neuralCtx.lineWidth = 0.5;
        neuralCtx.beginPath();
        neuralCtx.moveTo(node.x, node.y);
        neuralCtx.lineTo(relativeMouseX, relativeMouseY);
        neuralCtx.stroke();

        // Slightly pull nodes towards cursor
        const pullForce = (70 - dist) * 0.03;
        node.x -= (dx / dist) * pullForce;
        node.y -= (dy / dist) * pullForce;
      }

      // Render actual node particle
      const nodePulse = node.radius * (0.85 + Math.sin(tick * node.pulseSpeed + node.pulseOffset) * 0.15);
      neuralCtx.fillStyle = dist < 70 ? colors.accent : colors.primary;
      neuralCtx.shadowBlur = dist < 70 ? 12 : 6;
      neuralCtx.shadowColor = dist < 70 ? colors.accent : colors.primary;
      
      neuralCtx.beginPath();
      neuralCtx.arc(node.x, node.y, nodePulse, 0, Math.PI * 2);
      neuralCtx.fill();
      neuralCtx.shadowBlur = 0;
    });

    /* 6. Calculate Zero Gravity Card Bobbing & Draw Tethers */
    const coreRect = el.centralCore.getBoundingClientRect();
    const coreCenterX = coreRect.left + coreRect.width / 2;
    const coreCenterY = coreRect.top + coreRect.height / 2;

    el.cards.forEach((card, index) => {
      const id = card.getAttribute('id');
      const phaseOffset = parseFloat(card.getAttribute('data-bob-phase')) || 0;
      
      // Calculate Bob offsets
      const bobX = Math.sin(tick * 0.015 * (state.telemetry.gravity * 8) + phaseOffset) * 6;
      const bobY = Math.cos(tick * 0.02 * (state.telemetry.gravity * 8) + phaseOffset) * 8;
      
      // Store current drift offsets in state to preserve parallax transforms
      cardBobs[id] = { x: bobX, y: bobY };

      // Apply bob displacement style
      // We retrieve existing tilt parameters if active, otherwise set to 0
      const tiltX = card.dataset.tiltX || 0;
      const tiltY = card.dataset.tiltY || 0;
      card.style.transform = `translate3d(${bobX}px, ${bobY}px, 0) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${card.dataset.scale || 1})`;

      // Bounding rect for tethers
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;

      // Draw dynamic Glowing lines between central core & floating card centers
      tetherCtx.shadowBlur = 8;
      tetherCtx.shadowColor = colors.primary;
      tetherCtx.lineWidth = 1.0;
      tetherCtx.strokeStyle = colors.primary + `26`; // Low base line opacity
      tetherCtx.beginPath();
      tetherCtx.moveTo(coreCenterX, coreCenterY);
      tetherCtx.lineTo(cardCenterX, cardCenterY);
      tetherCtx.stroke();

      // Dotted pulsing data line drawn on top
      tetherCtx.lineWidth = 1.2;
      tetherCtx.strokeStyle = colors.primary + `77`;
      tetherCtx.setLineDash([6, 15]);
      tetherCtx.lineDashOffset = lineDashOffset;
      tetherCtx.beginPath();
      tetherCtx.moveTo(coreCenterX, coreCenterY);
      tetherCtx.lineTo(cardCenterX, cardCenterY);
      tetherCtx.stroke();
      tetherCtx.setLineDash([]); // Reset dash

      // Animate flowing pulse bead traversing along the tether path
      const pathLengthX = cardCenterX - coreCenterX;
      const pathLengthY = cardCenterY - coreCenterY;
      const progress = (tick * 0.005 + index * 0.25) % 1.0; // Phase staggered
      
      const pulseX = coreCenterX + pathLengthX * progress;
      const pulseY = coreCenterY + pathLengthY * progress;

      tetherCtx.shadowBlur = 12;
      tetherCtx.shadowColor = colors.primary;
      tetherCtx.fillStyle = colors.primary;
      tetherCtx.beginPath();
      tetherCtx.arc(pulseX, pulseY, 3, 0, Math.PI * 2);
      tetherCtx.fill();
      tetherCtx.shadowBlur = 0; // Reset
    });

    // Animate Cognitive Index HUD data
    if (tick % 60 === 0) {
      const activeCompute = (850 + Math.sin(tick * 0.005) * 45 + Math.random() * 5).toFixed(1);
      el.hudCognitive.innerText = `${activeCompute} TFLOPs`;
      
      // Update Sync Rate indicator dynamically
      const syncRate = (99.0 + Math.random() * 0.9).toFixed(1);
      el.dispSyncRate.innerText = `${syncRate}%`;
      
      // Random latency fluctuation
      const lat = Math.floor(3 + Math.random() * 4);
      el.dispLatency.innerText = `${lat} ms`;
    }

    requestAnimationFrame(animationLoop);
  }
  requestAnimationFrame(animationLoop);

  /* --- 3D Parallax Tilt Logic --- */
  el.cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // mouse position relative to card
      const y = e.clientY - rect.top;
      
      const width = rect.width;
      const height = rect.height;
      
      // Percentage displacement from card center
      const px = (x / width) - 0.5;
      const py = (y / height) - 0.5;
      
      const maxTilt = 8; // Max tilt rotation angles
      
      // Tilt values: rotateY corresponds to X offset, rotateX to Y offset
      const tiltX = -py * maxTilt;
      const tiltY = px * maxTilt;

      card.dataset.tiltX = tiltX;
      card.dataset.tiltY = tiltY;
      card.dataset.scale = 1.02; // Tiny hover scaling

      // Play light hover sound once when user sweeps cursor over a card
      if (!card.dataset.hovered) {
        card.dataset.hovered = "true";
        playBeep('hover');
      }
    });

    card.addEventListener('mouseleave', () => {
      card.dataset.tiltX = 0;
      card.dataset.tiltY = 0;
      card.dataset.scale = 1.0;
      card.removeAttribute('data-hovered');
    });
  });

  /* --- Applicant Pipeline Tracker Logic --- */
  function renderPipeline() {
    el.pipelineCandidates.innerHTML = '';
    
    // Filter candidates matching the active tab stage
    const filtered = state.candidates.filter(c => c.stage === state.activePipelineStage);

    if (filtered.length === 0) {
      el.pipelineCandidates.innerHTML = `
        <div class="empty-state">
          <i data-lucide="inbox"></i>
          <span>No candidates in stage</span>
        </div>
      `;
      if (typeof lucide !== 'undefined') lucide.createIcons();
      return;
    }

    filtered.forEach(cand => {
      const item = document.createElement('div');
      item.className = 'candidate-item';
      item.innerHTML = `
        <div class="cand-info">
          <span class="cand-name">${cand.name}</span>
          <span class="cand-role">${cand.role}</span>
        </div>
        <div class="cand-stats">
          <span class="cand-score cand-score-tag">${cand.score}%</span>
          <i data-lucide="chevron-right" class="card-icon text-neon-cyan"></i>
        </div>
      `;

      item.addEventListener('click', () => {
        state.selectedCandidateId = cand.id;
        saveState();
        openCandidateDetails(cand);
        playBeep('click');
      });

      el.pipelineCandidates.appendChild(item);
    });

    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  function updateStageTabs() {
    document.querySelectorAll('.stage-tab').forEach(tab => {
      const stage = tab.getAttribute('data-stage');
      const count = state.candidates.filter(c => c.stage === stage).length;
      
      // Update badge count
      const badge = tab.querySelector('.badge');
      if (badge) badge.innerText = count;

      if (stage === state.activePipelineStage) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }

  // Hook up pipeline stage switching tabs
  document.querySelectorAll('.stage-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      state.activePipelineStage = tab.getAttribute('data-stage');
      saveState();
      updateStageTabs();
      renderPipeline();
      playBeep('click');
    });
  });

  function openCandidateDetails(cand) {
    el.detailName.innerText = cand.name;
    el.detailRole.innerText = cand.role;
    el.detailScore.innerText = `${cand.score}%`;
    el.detailSummaryText.innerText = cand.summary;
    
    // Configure buttons state based on pipeline progression
    if (cand.stage === 'offer') {
      el.btnPromoteCandidate.innerText = 'OFFER SENT';
      el.btnPromoteCandidate.disabled = true;
    } else {
      el.btnPromoteCandidate.innerText = 'PROMOTE STAGE';
      el.btnPromoteCandidate.disabled = false;
    }

    el.candidateDetailPane.classList.remove('hidden');

    // Also update AI Assistant target sync selection dropdown
    el.assistantSelect.value = cand.id;
    updateAssistantPanel(cand);
  }

  el.btnCloseDetail.addEventListener('click', () => {
    el.candidateDetailPane.classList.add('hidden');
    playBeep('click');
  });

  el.btnPromoteCandidate.addEventListener('click', () => {
    const cand = state.candidates.find(c => c.id === state.selectedCandidateId);
    if (!cand) return;

    playBeep('promote');
    
    const stagesOrder = ['applied', 'screening', 'interview', 'offer'];
    const currentIdx = stagesOrder.indexOf(cand.stage);
    if (currentIdx < stagesOrder.length - 1) {
      cand.stage = stagesOrder[currentIdx + 1];
      state.activePipelineStage = cand.stage; // Auto switch pipeline tab to promote preview
      saveState();
      
      // Sync UI updates
      updateStageTabs();
      renderPipeline();
      openCandidateDetails(cand);
    }
  });

  el.btnRejectCandidate.addEventListener('click', () => {
    const cand = state.candidates.find(c => c.id === state.selectedCandidateId);
    if (!cand) return;

    playBeep('reject');
    
    // Remove candidate from system or just hide
    state.candidates = state.candidates.filter(c => c.id !== cand.id);
    saveState();
    el.candidateDetailPane.classList.add('hidden');
    
    updateStageTabs();
    renderPipeline();
    populateAssistantSelector();
  });

  /* --- AI Talent Assistant Widget Logic --- */
  function populateAssistantSelector() {
    el.assistantSelect.innerHTML = '';
    state.candidates.forEach(cand => {
      const opt = document.createElement('option');
      opt.value = cand.id;
      opt.innerText = `${cand.name} (${cand.score}%)`;
      el.assistantSelect.appendChild(opt);
    });
  }

  el.assistantSelect.addEventListener('change', (e) => {
    const cand = state.candidates.find(c => c.id === e.target.value);
    if (cand) {
      state.selectedCandidateId = cand.id;
      saveState();
      updateAssistantPanel(cand);
      playBeep('click');
    }
  });

  function updateAssistantPanel(cand) {
    // 1. Redraw SVG Radar Skill Visualizer
    updateSkillsRadar(cand.skills);

    // 2. Strengths list
    el.insightStrengthsList.innerHTML = '';
    cand.strengths.forEach(s => {
      const li = document.createElement('li');
      li.innerText = s;
      el.insightStrengthsList.appendChild(li);
    });

    // 3. Risks list
    el.insightRisksList.innerHTML = '';
    cand.risks.forEach(r => {
      const li = document.createElement('li');
      li.innerText = r;
      el.insightRisksList.appendChild(li);
    });

    // 4. Questions
    el.aiQuestionsContainer.innerHTML = '';
    cand.questions.forEach(q => {
      const item = document.createElement('div');
      item.className = 'question-item';
      item.innerText = q;
      el.aiQuestionsContainer.appendChild(item);
    });
  }

  function updateSkillsRadar(skills = null) {
    if (!skills) {
      const selected = state.candidates.find(c => c.id === state.selectedCandidateId);
      skills = selected ? selected.skills : { coding: 80, design: 80, communication: 80, problemSolving: 80, culture: 80 };
    }

    const labels = [
      { name: 'CODING', key: 'coding', x: 100, y: 30 },
      { name: 'TECH DESIGN', key: 'design', x: 175, y: 80 },
      { name: 'COMMUNICATION', key: 'communication', x: 145, y: 160 },
      { name: 'CULTURE FIT', key: 'culture', x: 55, y: 160 },
      { name: 'PROBLEM SOLVING', key: 'problemSolving', x: 25, y: 80 }
    ];

    // Center coordinates inside 200x200 viewBox
    const cx = 100;
    const cy = 100;
    const maxRadius = 70;

    // Build SVG structure
    let svgHtml = '';

    // Draw grid rings (outer outline & 2 inner divisions)
    for (let r = 1; r <= 3; r++) {
      const rad = (maxRadius / 3) * r;
      let points = [];
      for (let i = 0; i < 5; i++) {
        const angle = (Math.PI * 2 / 5) * i - Math.PI / 2;
        points.push(`${cx + Math.cos(angle) * rad},${cy + Math.sin(angle) * rad}`);
      }
      svgHtml += `<polygon points="${points.join(' ')}" class="radar-grid" />`;
    }

    // Draw axes lines and labels
    labels.forEach((label, i) => {
      const angle = (Math.PI * 2 / 5) * i - Math.PI / 2;
      const xEnd = cx + Math.cos(angle) * maxRadius;
      const yEnd = cy + Math.sin(angle) * maxRadius;
      svgHtml += `<line x1="${cx}" y1="${cy}" x2="${xEnd}" y2="${yEnd}" class="radar-axis" />`;
      
      // Shift labels out slightly for margin clearance
      const xLabel = cx + Math.cos(angle) * (maxRadius + 16);
      const yLabel = cy + Math.sin(angle) * (maxRadius + 10) + 2;
      svgHtml += `<text x="${xLabel}" y="${yLabel}" class="radar-label">${label.name}</text>`;
    });

    // Calculate skills polygon point positions
    let skillPoints = [];
    labels.forEach((label, i) => {
      const val = skills[label.key] || 50;
      const rad = (val / 100) * maxRadius;
      const angle = (Math.PI * 2 / 5) * i - Math.PI / 2;
      skillPoints.push(`${cx + Math.cos(angle) * rad},${cy + Math.sin(angle) * rad}`);
    });

    svgHtml += `<polygon points="${skillPoints.join(' ')}" class="radar-area" />`;
    el.radarSvg.innerHTML = svgHtml;
  }

  // Hook up Assistant tab triggers
  document.querySelectorAll('.assistant-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.getAttribute('data-assistant-tab');
      
      // Update tab active state classes
      document.querySelectorAll('.assistant-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Swap active panel
      el.panelSkills.classList.remove('active');
      el.panelSummary.classList.remove('active');
      el.panelQuestions.classList.remove('active');

      if (tabId === 'skills') el.panelSkills.classList.add('active');
      if (tabId === 'summary') el.panelSummary.classList.add('active');
      if (tabId === 'questions') el.panelQuestions.classList.add('active');

      playBeep('click');
    });
  });

  el.btnRegenQuestions.addEventListener('click', () => {
    playBeep('promote');
    const cand = state.candidates.find(c => c.id === state.selectedCandidateId);
    if (!cand) return;

    // Simulate list loading/regenerating transition
    el.aiQuestionsContainer.innerHTML = '<span class="loading-insight text-neon-pink"><span class="dot-blink"></span> Processing dynamic prompt profiles...</span>';
    
    setTimeout(() => {
      el.aiQuestionsContainer.innerHTML = '';
      
      // Shuffle/modify questions slightly for mock realism
      const templates = [
        `How do you handle unexpected scaling degradation when parsing high volume requests?`,
        `Walk us through how you resolve deployment schema validation errors.`,
        `Describe a scenario where you automated infrastructure monitoring logs.`,
        `What tools do you rely on to profiling memory performance leaks in production?`
      ];

      const newQ = [...cand.questions];
      newQ[2] = templates[Math.floor(Math.random() * templates.length)];
      
      newQ.forEach(q => {
        const item = document.createElement('div');
        item.className = 'question-item';
        item.innerText = q;
        el.aiQuestionsContainer.appendChild(item);
      });
      playBeep('success');
    }, 1200);
  });

  /* --- Scheduler Widget Logic --- */
  let currentCalYear = 2026;
  let currentCalMonth = 5; // June (0-indexed)

  const monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

  function renderCalendar() {
    el.calendarMonthYear.innerText = `${monthNames[currentCalMonth]} ${currentCalYear}`;
    el.calendarGridDays.innerHTML = '';

    // Render Weekday headers
    const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
    weekdays.forEach(day => {
      const d = document.createElement('div');
      d.className = 'cal-day-name';
      d.innerText = day;
      el.calendarGridDays.appendChild(d);
    });

    // Determine first day of month and total days
    const firstDay = new Date(currentCalYear, currentCalMonth, 1).getDay();
    const daysInMonth = new Date(currentCalYear, currentCalMonth + 1, 0).getDate();

    // Pad blank grids for preceding month layout overflow
    for (let i = 0; i < firstDay; i++) {
      const empty = document.createElement('div');
      empty.className = 'cal-date';
      el.calendarGridDays.appendChild(empty);
    }

    // Populate actual days
    for (let dayNum = 1; dayNum <= daysInMonth; dayNum++) {
      const cell = document.createElement('div');
      cell.className = 'cal-date active-month';
      cell.innerText = dayNum;

      const dateStr = `${currentCalYear}-${String(currentCalMonth + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
      
      // Highlight selection matches
      if (dateStr === state.selectedCalendarDate) {
        cell.classList.add('selected');
      }

      // Highlight current date anchor (June 8, 2026)
      if (dateStr === '2026-06-08') {
        cell.classList.add('today');
      }

      // Check if candidate schedules exist on this date
      const hasEvent = state.interviews.some(i => i.date === dateStr);
      if (hasEvent) {
        cell.classList.add('has-event');
      }

      cell.addEventListener('click', () => {
        state.selectedCalendarDate = dateStr;
        saveState();
        renderCalendar();
        renderUpcomingInterviews();
        playBeep('click');
      });

      el.calendarGridDays.appendChild(cell);
    }
  }

  function renderUpcomingInterviews() {
    el.scheduledInterviewsList.innerHTML = '';
    
    const dayEvents = state.interviews.filter(i => i.date === state.selectedCalendarDate);

    if (dayEvents.length === 0) {
      el.scheduledInterviewsList.innerHTML = `
        <div class="empty-state">
          <i data-lucide="calendar-x"></i>
          <span>No interviews scheduled</span>
        </div>
      `;
      if (typeof lucide !== 'undefined') lucide.createIcons();
      return;
    }

    dayEvents.forEach(evt => {
      const cand = state.candidates.find(c => c.id === evt.candidateId) || { name: 'Unknown Candidate' };
      const item = document.createElement('div');
      item.className = 'interview-item';
      item.innerHTML = `
        <div class="int-meta">
          <span class="int-cand">${cand.name}</span>
          <span class="int-time">${evt.time} // ${evt.interviewer}</span>
        </div>
        <span class="int-type">${evt.type.toUpperCase()}</span>
      `;
      el.scheduledInterviewsList.appendChild(item);
    });
  }

  document.getElementById('cal-prev').addEventListener('click', () => {
    currentCalMonth--;
    if (currentCalMonth < 0) {
      currentCalMonth = 11;
      currentCalYear--;
    }
    renderCalendar();
    playBeep('click');
  });

  document.getElementById('cal-next').addEventListener('click', () => {
    currentCalMonth++;
    if (currentCalMonth > 11) {
      currentCalMonth = 0;
      currentCalYear++;
    }
    renderCalendar();
    playBeep('click');
  });

  // Modal actions
  el.btnOpenScheduleModal.addEventListener('click', () => {
    // Populate dropdown with candidates
    el.schedCandidate.innerHTML = '';
    state.candidates.forEach(cand => {
      const opt = document.createElement('option');
      opt.value = cand.id;
      opt.innerText = cand.name;
      el.schedCandidate.appendChild(opt);
    });

    // Default dates
    el.schedDate.value = state.selectedCalendarDate;
    el.schedTime.value = "13:00";

    el.scheduleModal.classList.remove('hidden');
    playBeep('click');
  });

  el.btnCloseModal.addEventListener('click', () => {
    el.scheduleModal.classList.add('hidden');
    playBeep('click');
  });

  el.scheduleForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newInterview = {
      id: `i-${Date.now()}`,
      candidateId: el.schedCandidate.value,
      date: el.schedDate.value,
      time: el.schedTime.value,
      interviewer: el.schedInterviewer.value,
      type: el.schedType.value,
      confirmed: false // initial state for candidate confirmation
    };

    state.interviews.push(newInterview);
    saveState();
    el.scheduleModal.classList.add('hidden');
    
    // Refresh calendar
    renderCalendar();
    renderUpcomingInterviews();
    
    // Generate portal website link
    const portalUrl = `${window.location.origin}/portal.html?id=${newInterview.id}`;
    el.generatedPortalUrl.value = portalUrl;
    el.btnOpenPortalLink.href = portalUrl;

    // Reset copy button state in case it was used before
    el.btnCopyPortalLink.innerHTML = '<i data-lucide="copy"></i> COPY';
    if (typeof lucide !== 'undefined') lucide.createIcons();

    // Show link generated modal
    el.linkGeneratedModal.classList.remove('hidden');

    playBeep('success');
  });

  // Link Generated Modal Event Listeners
  el.btnCopyPortalLink.addEventListener('click', () => {
    el.generatedPortalUrl.select();
    el.generatedPortalUrl.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(el.generatedPortalUrl.value).then(() => {
      el.btnCopyPortalLink.innerHTML = '<i data-lucide="check"></i> COPIED!';
      if (typeof lucide !== 'undefined') lucide.createIcons();
      playBeep('success');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  });

  el.btnCloseLinkModal.addEventListener('click', () => {
    el.linkGeneratedModal.classList.add('hidden');
    playBeep('click');
  });

  el.btnCloseLinkGenerated.addEventListener('click', () => {
    el.linkGeneratedModal.classList.add('hidden');
    playBeep('click');
  });

  /* --- Communication Hub (Inbox) Logic --- */
  function renderInbox() {
    el.emailThreadsContainer.innerHTML = '';
    
    state.candidates.forEach(cand => {
      if (!cand.email) return;

      const item = document.createElement('div');
      item.className = 'email-item';
      if (cand.id === state.selectedEmailId) {
        item.classList.add('selected');
      }

      item.innerHTML = `
        <div class="email-header-row">
          <span class="email-sender">${cand.name}</span>
          <span class="email-time">10:42 AM</span>
        </div>
        <span class="email-subject">${cand.email.subject}</span>
        <p class="email-body-preview">${cand.email.preview}</p>
      `;

      item.addEventListener('click', () => {
        state.selectedEmailId = cand.id;
        saveState();
        renderInbox();
        triggerAIDraft(cand);
        playBeep('click');
      });

      el.emailThreadsContainer.appendChild(item);
    });
  }

  let typingTimer = null;

  function triggerAIDraft(candidate) {
    el.aiDraftInterface.classList.remove('hidden');
    el.draftTypingIndicator.classList.remove('hidden');
    el.draftPreviewBox.innerText = '';
    
    if (typingTimer) clearInterval(typingTimer);

    // AI dynamic responses draft contents based on score & role
    const responseText = `Hi ${candidate.name},\n\nThank you for reaching out regarding the ${candidate.role} opening. Our AI sync index matched your evaluation profile at an impressive ${candidate.score}% rating.\n\nWe have initialized system schedules for your next panel reviews. Please verify your calendar updates below.\n\nBest parameters,\nIntern Flow AI Core Team`;

    let charIdx = 0;
    
    // Simulated human-like typewriter velocity
    function typeChar() {
      if (charIdx < responseText.length) {
        el.draftPreviewBox.innerText += responseText.charAt(charIdx);
        charIdx++;
        playBeep('typing');
        
        // Randomize speed delay between 15ms and 50ms
        const delay = 15 + Math.random() * 35;
        typingTimer = setTimeout(typeChar, delay);
      } else {
        el.draftTypingIndicator.classList.add('hidden');
        playBeep('success');
      }
    }
    
    // Start Typing sequence
    typingTimer = setTimeout(typeChar, 300);
  }

  el.btnSendDraft.addEventListener('click', () => {
    if (typingTimer) clearTimeout(typingTimer);
    el.aiDraftInterface.classList.add('hidden');
    playBeep('success');
    
    // Pop candidate email from list to simulate email sent success
    const cand = state.candidates.find(c => c.id === state.selectedEmailId);
    if (cand) {
      delete cand.email;
    }
    state.selectedEmailId = null;
    saveState();
    renderInbox();
  });

  el.btnDiscardDraft.addEventListener('click', () => {
    if (typingTimer) clearTimeout(typingTimer);
    const cand = state.candidates.find(c => c.id === state.selectedEmailId);
    if (cand) triggerAIDraft(cand);
  });

  function syncTelemetryUI() {
    // 1. Sync theme
    document.body.setAttribute('data-theme-engine', state.telemetry.theme);
    
    // Clear theme active button classes
    el.themeBtnPurple.classList.remove('active');
    el.themeBtnCyber.classList.remove('active');
    el.themeBtnSolar.classList.remove('active');

    if (state.telemetry.theme === 'purple') el.themeBtnPurple.classList.add('active');
    if (state.telemetry.theme === 'cyber') el.themeBtnCyber.classList.add('active');
    if (state.telemetry.theme === 'solar') el.themeBtnSolar.classList.add('active');

    // 2. Sync gravity slider
    const gravityVal = Math.round((state.telemetry.gravity / 0.3) * 100);
    el.sliderGravity.value = gravityVal;
    el.dispGravityLevel.innerText = `${(state.telemetry.gravity * 2.5).toFixed(2)} G`;
    el.dispGravitySpeed.innerText = `${((gravityVal / 100) * 2).toFixed(2)}x`;

    // 3. Sync nebula slider
    const nebulaVal = Math.round(state.telemetry.nebulaIntensity * 100);
    el.sliderNebula.value = nebulaVal;
    el.dispNebulaIntensity.innerText = `${nebulaVal}%`;

    // 4. Sync orbit slider
    const orbitVal = Math.round((state.telemetry.orbitSpeed / 3.0) * 100);
    el.sliderOrbit.value = orbitVal;
    el.dispOrbitSpeed.innerText = `${state.telemetry.orbitSpeed.toFixed(1)}x`;

    // 5. Sync toggles
    el.toggleAmbientHum.checked = state.telemetry.ambientHum;
    el.toggleSfx.checked = state.telemetry.sfx;
  }

  /* --- Initialize Application Views --- */
  function initializeDashboard() {
    syncTelemetryUI();
    renderPipeline();
    updateStageTabs();
    populateAssistantSelector();
    renderCalendar();
    renderUpcomingInterviews();
    renderInbox();
    
    // Trigger initial details page loading sync
    const activeCand = state.candidates.find(c => c.id === state.selectedCandidateId) || state.candidates[0];
    if (activeCand) {
      openCandidateDetails(activeCand);
    }

    if (state.selectedEmailId) {
      const emailCand = state.candidates.find(c => c.id === state.selectedEmailId);
      if (emailCand && emailCand.email) {
        triggerAIDraft(emailCand);
      }
    }
  }
  
  initializeDashboard();
});
