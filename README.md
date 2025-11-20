# Cypress Mouse Hover Test Cases

This repository contains **Cypress UI automation** focused on testing mouse hover interactions, dropdowns, tooltips, and related UI behaviours.

It demonstrates my ability to:

- Work with Cypress for **front-end automation**
- Handle tricky **hover-based UI elements**
- Organise tests and use reusable selectors / commands
- Align with best practices for clean, maintainable test code

This project is referenced in my **QA CV** and **portfolio website** as part of my automation experience.

---

## 🎯 What This Project Covers

- Verifying hover effects on buttons, menus, and links
- Testing dropdown behaviour on hover
- Asserting text/tooltips that only show when hovering
- Handling dynamic DOM changes and visibility assertions

---

## 🧰 Tech Stack

- Cypress
- JavaScript
- Node.js / npm
- Git & GitHub

---

## 📂 Project Structure

A sample layout (your actual file names may differ slightly):

```text
Cypress_Mouse_Hover_Test_Cases/
├─ cypress/
│  ├─ e2e/
│  │  ├─ hover-menu.cy.js
│  │  ├─ tooltip-hover.cy.js
│  │  └─ dropdown-hover.cy.js
│  ├─ fixtures/
│  ├─ support/
│  │  ├─ commands.js
│  │  └─ e2e.js
├─ cypress.config.js  (or cypress.config.ts)
├─ package.json
└─ README.md


🚀 How to Run Locally
1. Clone the Repository
git clone https://github.com/Micharemu/Cypress_Mouse_Hover_Test_Cases.git
cd Cypress_Mouse_Hover_Test_Cases

2. Install Dependencies
npm install


Requires Node.js and npm to be installed.

3. Run Cypress Tests
# Open Cypress UI
npm run cypress:open

# OR run all specs in headless mode
npm run cypress:run


(Use the exact script names from your package.json.)

🧪 Example Scenarios

Some example test ideas included in this repo:

Hover over a menu item to reveal a dropdown list.

Validate that tooltip text appears only when hovering a specific icon.

Check that hover styles (e.g. color, underline) are applied correctly.

Ensure hover-based elements are keyboard-accessible when applicable.


📎 Related Links

🔗 Portfolio: https://micharemu.github.io/qa-portfolio/

🔗 GitHub Profile: github.com/Micharemu

🔗 LinkedIn: Oladiran Tobi Michael
