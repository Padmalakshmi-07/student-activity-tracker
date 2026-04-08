const activities = [
    { name: "HTML Assignment", status: "Pending" },
    { name: "CSS Practice", status: "Pending" },
    { name: "JavaScript Task", status: "Pending" },
    { name: "Mini Project", status: "Pending" },
    { name: "Quiz Preparation", status: "Pending" },
    { name: "Project Report", status: "Pending" }
];

// NAVIGATION
function showSection(sectionId) {

    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";

    window.scrollTo(0, 0);
}

// RENDER TASKS
function renderTasks() {
    const container = document.getElementById("taskContainer");
    container.innerHTML = "";

    activities.forEach((activity, index) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <div class="task-title">${activity.name}</div>
            <div class="status ${activity.status === "Completed" ? "completed" : "pending"}">
                ${activity.status}
            </div>
            <button onclick="markCompleted(${index})"
                ${activity.status === "Completed" ? "disabled" : ""}>
                Mark Completed
            </button>
        `;

        container.appendChild(card);
    });
}

// MARK COMPLETE
function markCompleted(index) {
    activities[index].status = "Completed";
    renderTasks();
    updateProgress();

    alert("Nice work! 🔥");
}

// UPDATE PROGRESS
function updateProgress() {
    const completed = activities.filter(a => a.status === "Completed").length;
    const total = activities.length;

    document.getElementById("progressText").innerText =
        `${completed} out of ${total} completed`;

    const percent = (completed / total) * 100;
    document.getElementById("progressFill").style.width = percent + "%";

    if (completed === total) {
        alert("All tasks completed 🎉");
    }
}

// INITIAL LOAD
showSection('home');
renderTasks();
updateProgress();