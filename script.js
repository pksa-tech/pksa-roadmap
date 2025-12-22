// ==========================================
// ⚙️ CONFIGURATION
// ==========================================
const API_KEY = "$2a$10$JqX6BkO8zV7EtESo.lfy2ef8YNP8FTIxo4y4y75erMDWHQVUUIb1i";

const USERS = {
  pranav: {
    pass: "1810",
    binId: "6949788043b1c97be9fef379",
    role: "admin",
  },
  yugs: {
    pass: "yugsisabitch",
    binId: "6949788bd0ea881f403a0c30",
    role: "user",
  },
};

// ==========================================
// 📅 DATA
// ==========================================
const roadmapData = [
  {
    phase: "Phase 1: Foundation (Weeks 1-6)",
    class: "phase-1",
    icon: "fa-layer-group",
    weeks: [
      {
        title: "Week 1: Arrays & Java Basics",
        focus: "DSA Basics",
        days: [
          { day: 1, task: "Java OOPs (Class, Object) + Array Input/Output" },
          { day: 2, task: "DSA: Linear Search + Java Interfaces" },
          { day: 3, task: "DSA: Two Pointers + Spring Boot Setup" },
          { day: 4, task: "DSA: Sliding Window + First REST API" },
          { day: 5, task: "DSA: Anagrams + Dependency Injection" },
          { day: 6, task: "Revision: Arrays & Strings" },
          { day: 7, task: "Rest Day" },
        ],
      },
      {
        title: "Week 2: Hashing & APIs",
        focus: "Backend Core",
        days: [
          { day: 8, task: "DSA: HashMap Basics + PathVariable" },
          { day: 9, task: "DSA: Prefix Sum + Service vs Controller" },
          { day: 10, task: "DSA: Sorting Logic + Postman Testing" },
          { day: 11, task: "DSA: Binary Search + Exception Handling" },
          { day: 12, task: "DSA: 3Sum Pattern + DTOs" },
          { day: 13, task: "Project: User Profile API" },
          { day: 14, task: "Rest Day" },
        ],
      },
      {
        title: "Week 3: Stack, Queue & DB",
        focus: "Persistence",
        days: [
          { day: 15, task: "DSA: Stack Basics + Next Greater Element" },
          { day: 16, task: "DSA: Queue Setup + PostgreSQL" },
          { day: 17, task: "DSA: Valid Parentheses + JPA Entities" },
          { day: 18, task: "DSA: Stack using Queue + DB Relationships" },
          { day: 19, task: "DSA: Sliding Window Max + JPQL Queries" },
          { day: 20, task: "Project: Todo App DB" },
          { day: 21, task: "Rest Day" },
        ],
      },
      {
        title: "Week 4: Recursion & Auth",
        focus: "Security",
        days: [
          { day: 22, task: "DSA: Recursion Basics + Spring Security" },
          { day: 23, task: "DSA: Recursion Arrays + JWT Theory" },
          { day: 24, task: "DSA: Subsets + JWT Filter" },
          { day: 25, task: "DSA: N-Queens + Role Based Access" },
          { day: 26, task: "DSA: Combination Sum + Password Encoding" },
          { day: 27, task: "Project: Auth Integration" },
          { day: 28, task: "Rest Day" },
        ],
      },
      {
        title: "Week 5: Trees & Microservices",
        focus: "Distributed",
        days: [
          { day: 29, task: "DSA: Tree Traversals + Microservices Intro" },
          { day: 30, task: "DSA: Tree Height + Service Discovery" },
          { day: 31, task: "DSA: BST + Feign Client" },
          { day: 32, task: "DSA: Balanced Trees + API Gateway" },
          { day: 33, task: "DSA: LCA + Config Server" },
          { day: 34, task: "Project: Split Services" },
          { day: 35, task: "Rest Day" },
        ],
      },
      {
        title: "Week 6: Greedy, DP & Docker",
        focus: "Deployment",
        days: [
          { day: 36, task: "DSA: Greedy Patterns + Docker Basics" },
          { day: 37, task: "DSA: DP Intro + Docker Compose" },
          { day: 38, task: "DSA: Climbing Stairs + Swagger" },
          { day: 39, task: "DSA: LCS + Global Exceptions" },
          { day: 40, task: "Project: Dockerize App" },
          { day: 41, task: "Mock Interview" },
          { day: 42, task: "Rest Day" },
        ],
      },
    ],
  },
  {
    phase: "Phase 2: Backend + AI (Weeks 7-10)",
    class: "phase-2",
    icon: "fa-robot",
    weeks: [
      {
        title: "Week 7: Python & FastAPI",
        focus: "AI Foundation",
        days: [
          { day: 43, task: "Python Basics for Java Devs" },
          { day: 44, task: "FastAPI Setup + First Endpoint" },
          { day: 45, task: "Async/Await + Pydantic Models" },
          { day: 46, task: "DSA: Graph Traversal + Python Call" },
          { day: 47, task: "DSA: Dijkstra + AI Wrapper" },
          { day: 48, task: "Integration: Spring to FastAPI" },
          { day: 49, task: "Rest Day" },
        ],
      },
      {
        title: "Week 8: LLMs",
        focus: "GenAI",
        days: [
          { day: 50, task: "LLM APIs (OpenAI)" },
          { day: 51, task: "Prompt Patterns" },
          { day: 52, task: "LLM Best Practices" },
          { day: 53, task: "Structured Output JSON" },
          { day: 54, task: "Prompt Evaluation" },
          { day: 55, task: "Project: LLM Feature" },
          { day: 56, task: "Rest Day" },
        ],
      },
      {
        title: "Week 9: RAG",
        focus: "Applied AI",
        days: [
          { day: 57, task: "Embeddings + Vector DB" },
          { day: 58, task: "RAG Workflow" },
          { day: 59, task: "Project Logic" },
          { day: 60, task: "DSA Revision" },
          { day: 61, task: "Project: OCR Pipeline" },
          { day: 62, task: "Project: Categorization" },
          { day: 63, task: "Rest Day" },
        ],
      },
      {
        title: "Week 10: Polish",
        focus: "Deployment",
        days: [
          { day: 64, task: "Expose AI Endpoints" },
          { day: 65, task: "Dockerize All" },
          { day: 66, task: "Integration Tests" },
          { day: 67, task: "Latency Optimization" },
          { day: 68, task: "Deploy to Render" },
          { day: 69, task: "Simple Frontend (Streamlit)" },
          { day: 70, task: "Rest Day" },
        ],
      },
    ],
  },
  {
    phase: "Phase 3: System Design (Weeks 11-14)",
    class: "phase-3",
    icon: "fa-brain",
    weeks: [
      {
        title: "Week 11: HLD",
        focus: "Scalability",
        days: [
          { day: 71, task: "Load Balancers + Scaling" },
          { day: 72, task: "Caching (Redis)" },
          { day: 73, task: "Sharding + CAP Theorem" },
          { day: 74, task: "Message Queues" },
          { day: 75, task: "Design Instagram" },
          { day: 76, task: "Design WhatsApp" },
          { day: 77, task: "Rest Day" },
        ],
      },
      {
        title: "Week 12: LLD",
        focus: "Clean Code",
        days: [
          { day: 78, task: "SOLID Principles" },
          { day: 79, task: "Pattern: Factory + Singleton" },
          { day: 80, task: "Pattern: Strategy + Observer" },
          { day: 81, task: "LLD: Parking Lot" },
          { day: 82, task: "LLD: ATM" },
          { day: 83, task: "LLD: Movie Booking" },
          { day: 84, task: "Rest Day" },
        ],
      },
      {
        title: "Week 13: Interviews",
        focus: "Confidence",
        days: [
          { day: 85, task: "Resume Polish" },
          { day: 86, task: "Mock: DSA" },
          { day: 87, task: "Mock: Backend" },
          { day: 88, task: "HR Questions" },
          { day: 89, task: "Project Explanation" },
          { day: 90, task: "Portfolio" },
          { day: 91, task: "Rest Day" },
        ],
      },
      {
        title: "Week 14: Final Sprint",
        focus: "Finish",
        days: [
          { day: 92, task: "Revise Weak DSA" },
          { day: 93, task: "Revise Graphs" },
          { day: 94, task: "Full Mock" },
          { day: 95, task: "Company Prep" },
          { day: 96, task: "Revision" },
          { day: 97, task: "Final Review" },
          { day: 98, task: "Rest - READY!" },
        ],
      },
    ],
  },
];

// ==========================================
// 🛠️ APP LOGIC
// ==========================================
let CURRENT_USER = null;
let ACTIVE_BIN_ID = null;
let IS_SPECTATING = false;

let USER_LOGS = [];
let START_DATE = null;

const container = document.getElementById("roadmap-container");

function cleanTopic(text) {
  return text
    .replace(/^(DSA:|Java:|Project:|Python:|HLD:|LLD:)\s*/i, "")
    .trim();
}

function renderRoadmap() {
  container.innerHTML = ""; // Clear existing

  roadmapData.forEach((phase) => {
    const phaseEl = document.createElement("div");
    phaseEl.className = `phase-header ${phase.class}`;
    phaseEl.innerHTML = `<h2><i class="fas ${phase.icon}"></i> ${phase.phase}</h2>`;
    container.appendChild(phaseEl);

    phase.weeks.forEach((week) => {
      const weekCard = document.createElement("div");
      weekCard.className = "week-card";

      let daysHtml = "";
      week.days.forEach((d) => {
        const topics = d.task.split("+");
        let resourcesHtml = "";

        topics.forEach((rawTopic) => {
          const topic = cleanTopic(rawTopic);
          const aiPrompt = `Explain ${topic} in simple Hindi with code examples for a beginner.`;

          if (!topic.toLowerCase().includes("rest day")) {
            resourcesHtml += `
                            <div class="topic-block">
                                <span class="topic-title"><i class="fas fa-thumbtack" style="color:#ef4444; font-size:0.8rem;"></i> ${topic}</span>
                                <div class="res-grid">
                                    <a href="https://www.google.com/search?q=${topic}+geeksforgeeks+javatpoint" target="_blank" class="res-link res-text"><i class="fas fa-file-alt"></i> Read</a>
                                    <a href="https://www.youtube.com/results?search_query=${topic}+hindi+tutorial" target="_blank" class="res-link res-yt"><i class="fab fa-youtube"></i> Watch</a>
                                    <div class="res-link res-ai" onclick="copyToClipboard('${aiPrompt}')"><i class="fas fa-robot"></i> Ask AI</div>
                                </div>
                            </div>`;
          }
        });

        daysHtml += `
                    <div class="day-item">
                        <div class="task-row">
                            <input type="checkbox" class="custom-checkbox" id="task-${
                              d.day
                            }" onchange="toggleTask(${d.day})">
                            <div class="task-content">
                                <span class="day-label">Day ${d.day}</span>
                                <span class="task-text">${d.task}</span>
                            </div>
                            <button class="study-btn" onclick="toggleResources(${
                              d.day
                            })" title="Learn topics"><i class="fas fa-book-open"></i></button>
                        </div>
                        <div class="resource-panel" id="res-${d.day}">
                            ${
                              resourcesHtml ||
                              '<span style="color:#94a3b8; font-size:0.9rem">Relax! No study resources for today.</span>'
                            }
                        </div>
                    </div>`;
      });

      weekCard.innerHTML = `
                    <div class="week-header" onclick="this.parentElement.classList.toggle('active')">
                        <div><h3>${week.title}</h3><span style="font-size:0.8rem; color:#94a3b8; margin-top:4px; display:block;">Focus: ${week.focus}</span></div>
                        <i class="fas fa-chevron-down toggle-icon" style="color:#94a3b8"></i>
                    </div>
                    <div class="week-content">${daysHtml}</div>
                `;
      container.appendChild(weekCard);
    });
  });
}

// --- HELPER FUNCTIONS ---
function toggleResources(dayId) {
  document.getElementById(`res-${dayId}`).classList.toggle("show");
}
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => alert("✅ Prompt Copied! Paste in AI."));
}

// --- PRANK LOGIC ---
function triggerPrank() {
  const box = document.getElementById("loginBox");
  // 1. Shake the box
  box.classList.add("shake-it");

  // 2. Show Modal after delay
  setTimeout(() => {
    box.classList.remove("shake-it");
    document.getElementById("prankOverlay").style.display = "flex";
  }, 400);
}

function closePrank() {
  document.getElementById("prankOverlay").style.display = "none";
}

// --- SYNC & LOGIN LOGIC ---
function handleLogin() {
  const u = document.getElementById("usernameInput").value.trim();
  const p = document.getElementById("passwordInput").value.trim();

  if (USERS[u] && USERS[u].pass === p) {
    CURRENT_USER = USERS[u];
    ACTIVE_BIN_ID = CURRENT_USER.binId;
    document.getElementById("loginOverlay").style.display = "none";
    document.getElementById(
      "userBadge"
    ).innerHTML = `<i class="fas fa-user"></i> ${u}`;
    if (CURRENT_USER.role === "admin")
      document.getElementById("adminPanel").style.display = "block";
    loadFromCloud();
  } else {
    document.getElementById("loginError").style.display = "block";
  }
}

async function saveToCloud(progressData) {
  document.getElementById(
    "syncStatus"
  ).innerHTML = `<i class="fas fa-sync fa-spin"></i> Saving...`;

  // Create the full data package
  const payload = {
    progress: progressData,
    startDate: START_DATE,
    history: USER_LOGS,
  };

  try {
    await fetch(`https://api.jsonbin.io/v3/b/${ACTIVE_BIN_ID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "X-Master-Key": API_KEY },
      body: JSON.stringify(payload), // We send the whole package now
    });
    document.getElementById(
      "syncStatus"
    ).innerHTML = `<i class="fas fa-check" style="color:#4ade80"></i> Synced`;
  } catch (e) {
    document.getElementById(
      "syncStatus"
    ).innerHTML = `<i class="fas fa-times" style="color:#ef4444"></i> Error`;
  }
}

async function loadFromCloud() {
  document.getElementById(
    "syncStatus"
  ).innerHTML = `<i class="fas fa-sync fa-spin"></i> Loading...`;
  try {
    const req = await fetch(
      `https://api.jsonbin.io/v3/b/${ACTIVE_BIN_ID}/latest`,
      {
        headers: { "X-Master-Key": API_KEY },
      }
    );
    const data = await req.json();

    // Extract data (Handle old format vs new format)
    // If data.record.progress exists, use it. If not, maybe the whole record is the array (old style)
    const progress =
      data.record.progress || (Array.isArray(data.record) ? data.record : []);

    // Load Tracking Data
    START_DATE = data.record.startDate || null;
    USER_LOGS = data.record.history || [];

    // Update UI Checkboxes
    document
      .querySelectorAll(".custom-checkbox")
      .forEach((cb) => (cb.checked = false));
    progress.forEach((dayId) => {
      const el = document.getElementById(`task-${dayId}`);
      if (el) el.checked = true;
    });

    updateProgressBar();
    document.getElementById(
      "syncStatus"
    ).innerHTML = `<i class="fas fa-cloud" style="color:#38bdf8"></i> Online`;

    // OPTIONAL: Console log to see the history immediately for Admin
    if (CURRENT_USER.role === "admin") {
      console.log("📈 User Started On:", START_DATE);
      console.log("📜 Activity Log:", USER_LOGS);
    }
  } catch (e) {
    console.error(e);
    document.getElementById(
      "syncStatus"
    ).innerHTML = `<i class="fas fa-exclamation-triangle" style="color:orange"></i> Load Failed`;
  }
}

function toggleTask(dayId) {
  if (IS_SPECTATING) {
    alert("⚠️ You are in Spectator Mode! You cannot edit progress.");
    document.getElementById(`task-${dayId}`).checked = !document.getElementById(
      `task-${dayId}`
    ).checked;
    return;
  }

  const checkbox = document.getElementById(`task-${dayId}`);

  // 1. SET START DATE (If this is the first task ever checked)
  if (checkbox.checked && !START_DATE) {
    START_DATE = new Date().toLocaleString(); // e.g., "10/24/2025, 10:00:00 AM"
  }

  // 2. LOG THE ACTIVITY
  const logEntry = {
    day: dayId,
    action: checkbox.checked ? "Completed" : "Unchecked",
    time: new Date().toLocaleString(),
  };
  USER_LOGS.push(logEntry);

  // 3. GATHER PROGRESS IDS
  let currentProgress = [];
  document.querySelectorAll(".custom-checkbox:checked").forEach((cb) => {
    currentProgress.push(parseInt(cb.id.replace("task-", "")));
  });

  updateProgressBar();
  saveToCloud(currentProgress);
}

function updateProgressBar() {
  const total = 98;
  const checked = document.querySelectorAll(".custom-checkbox:checked").length;
  const percent = Math.round((checked / total) * 100);
  document.getElementById("progressBar").style.width = `${percent}%`;
  document.getElementById("progressText").innerText = `${percent}%`;
}

function toggleSpectator() {
  if (!IS_SPECTATING) {
    ACTIVE_BIN_ID = USERS["yugs"].binId;
    document.getElementById("spectatorText").innerText = "Back to My Progress";
    document.getElementById(
      "userBadge"
    ).innerHTML = `<i class="fas fa-eye"></i> Spectating`;
    document.getElementById("userBadge").style.background = "#ef4444";
    IS_SPECTATING = true;

    // --- NEW: Alert the start date ---
    setTimeout(() => {
      if (START_DATE) {
        alert(`📅 She started this course on:\n${START_DATE}`);
      } else {
        alert("📅 She hasn't started yet!");
      }
    }, 1000); // Wait 1 sec for cloud load
  } else {
    ACTIVE_BIN_ID = USERS["pranav"].binId;
    document.getElementById("spectatorText").innerText =
      "View Friend's Progress";
    document.getElementById(
      "userBadge"
    ).innerHTML = `<i class="fas fa-user"></i> admin`;
    document.getElementById("userBadge").style.background = "#334155";
    IS_SPECTATING = false;
  }
  loadFromCloud();
}

// Init
renderRoadmap();
// ==========================================
// 🕵️ PRANK TRIGGER LOGIC
// ==========================================
document
  .getElementById("usernameInput")
  .addEventListener("input", function (e) {
    const link = document.getElementById("prankLink");
    // Only show if the typed text is exactly "yugs"
    if (e.target.value === "yugs") {
      link.style.display = "block";
      // Optional: Auto-focus the link to draw attention
      link.style.animation = "shake 0.5s";
    } else {
      link.style.display = "none";
    }
  });
