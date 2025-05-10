
# Cypress Mouse Hover Test Cases

This repository contains test cases designed to validate the **mouse hover functionality** on the website:  
[https://rahulshettyacademy.com/AutomationPractice/](https://rahulshettyacademy.com/AutomationPractice/)

## 📄 Test Objective

The primary goal is to ensure the correct behavior of the hover-triggered dropdown menu using Cypress and jQuery's `.invoke('show')` method.

## ✅ Features Covered

- Mouse hover interaction
- Dropdown visibility
- Click actions on dropdown items
- URL validation
- Negative and regression scenarios
- UI/UX validation

## 📁 Files Included

| File Name                              | Description                                        |
|----------------------------------------|----------------------------------------------------|
| `Cypress_Mouse_Hover_Test_Cases.xlsx`  | Contains structured test cases in Excel format     |
| `mouse_hover_spec.js` (not included)   | Cypress test file that automates the interaction   |

## 🧪 Test Case Types

- **Functional**: Verify dropdown and link behaviors
- **Negative**: Ensure dropdown is not interactable without hover
- **UI/UX**: Validate dropdown visibility and styling
- **Regression**: Confirm consistent behavior after reload

## 📊 Excel Structure

| Test Case ID | Title                                        | Steps                                 | Expected Result                                   | Type      |
|--------------|----------------------------------------------|---------------------------------------|--------------------------------------------------|-----------|
| TC01         | Verify mouse hover menu appears on invoke    | Visit → Invoke → Check visibility     | Dropdown becomes visible                          | Functional|
| TC02         | Verify 'Top' option is clickable             | Invoke → Click on 'Top'               | Scrolls to top or updates URL                     | Functional|
| ...          | ...                                          | ...                                   | ...                                              | ...       |

## 🚀 Getting Started with Cypress

If you want to run these test cases in Cypress:

1. Install Cypress:

   ```bash
   npm install cypress --save-dev
   ```

2. Add a test spec (`mouse_hover_spec.js`) under `cypress/e2e/` with the following code:

   ```js
   /// <reference types="Cypress" />
   describe('Mouse Hover', function() {
     it('Check Mouse Hover', function() {
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       cy.get('.mouse-hover-content').invoke('show')
       cy.contains('Top').click()
       cy.url().should('include','top')
     })
   })
   ```

3. Run tests via GUI or CLI:

   ```bash
   npx cypress open
   ```

---

## 🧾 License

This is a practice test case set provided for QA training purposes.
