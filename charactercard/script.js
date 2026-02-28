const monoco = {
  name: "Monoco",
  class: "Gestral — Bestial Wheel",
  level: 30,           
  maxHealth: 3200,     
  health: 3200,

  attacked() {
    if (this.health <= 0) {
      showStatus("Monoco has already fallen…", "dead");
      return;
    }

    this.health -= 20;
    if (this.health < 0) this.health = 0;

    updateDisplay();
    triggerShake();

    if (this.health <= 0) {
      this.health = 0;
      updateDisplay();
      markDead();
      showStatus("Monoco has fallen in battle!", "dead");
      disableButtons();
    } else {
      const percent = Math.round((this.health / this.maxHealth) * 100);
      showStatus(`⚔ Monoco takes 20 damage! (${this.health} HP remaining — ${percent}%)`, "damage");
    }
  },

  levelUp() {
    if (this.health <= 0) {
      showStatus("Cannot level up — Monoco has fallen.", "dead");
      return;
    }

    this.level += 1;
    updateDisplay();
    triggerLevelFlash();
    showStatus(`✦ Level Up! Monoco is now Level ${this.level}. His Bestial Wheel grows stronger!`, "levelup");
  }
};

function updateDisplay() {
  document.getElementById("char-name").textContent   = monoco.name;
  document.getElementById("char-class").textContent  = monoco.class;
  document.getElementById("char-level").textContent  = monoco.level;
  document.getElementById("char-health").textContent =
    `${monoco.health} / ${monoco.maxHealth}`;

  // AI assisted with health bar stats and visuals //
  const pct = (monoco.health / monoco.maxHealth) * 100;
  const bar = document.getElementById("health-bar");
  bar.style.width = pct + "%";

  if (pct > 55) {
    bar.style.backgroundColor = "#4caf7d";     
  } else if (pct > 25) {
    bar.style.backgroundColor = "#e0a94b";       
  } else {
    bar.style.backgroundColor = "#c0392b";        
  }
}

function showStatus(message, type) {
  const el = document.getElementById("status-msg");
  el.textContent = message;
  el.className = `status-msg visible ${type}`;
}

function markDead() {
  document.getElementById("character-card").classList.add("dead");
}

function disableButtons() {
  document.getElementById("btn-attack").disabled  = true;
  document.getElementById("btn-levelup").disabled = true;
}

function triggerShake() {
  const card = document.getElementById("character-card");
  card.classList.remove("shaking");
  card.classList.add("shaking");
  card.addEventListener("animationend", () => card.classList.remove("shaking"), { once: true });
}

function triggerLevelFlash() {
  const card = document.getElementById("character-card");
  card.classList.remove("leveling");
  card.classList.add("leveling");
  card.addEventListener("animationend", () => card.classList.remove("leveling"), { once: true });
}


// AI-assisted //

window.addEventListener("DOMContentLoaded", () => {
  const badge = document.createElement("div");
  badge.className = "badge-strip";
  badge.textContent = "Clair Obscur: Expedition 33";
  const nameEl = document.getElementById("char-name");
  nameEl.parentNode.insertBefore(badge, nameEl);

  updateDisplay();
});