# 🧪 SauceDemo UI Tests (Playwright + JavaScript)

This project contains automated **UI tests** for [[https://www.saucedemo.com](https://www.saucedemo.com)  ](https://www.saucedemo.com)
written in **JavaScript** using **Playwright** and the **Page Object Model (POM)** pattern.

---

## ⚙️ Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/AnastasiyaNedbaylik/saucedemo-js-playwright-tests.git
cd saucedemo-js-playwright-tests
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Configure environment variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

---

## ▶️ Run Tests

Run all tests:
```bash
npm run test
```

Run specific test:
```bash
npx playwright test tests/login.test.js
```

Run tests in UI mode:
```bash
npx playwright test --ui
```

Show test report:
```bash
npm run report
```

---

## 📸 Test Artifacts

- **Screenshots:** captured on failure  
- **Videos:** recorded on failure  
- **HTML report:** generated automatically after each run

---

## 🧩 Features

- Login and logout tests  
- Cart and product actions  
- Sorting and filtering tests  
- Error validation (locked user, empty fields)  
- Environment-based configuration (`.env`)  
- ESLint + Prettier integration  

---

## 👩‍💻 Tech Stack

- Playwright  
- JavaScript (ESM)  
- dotenv  
- ESLint  
- Prettier  

---

## 🧾 License

MIT License
