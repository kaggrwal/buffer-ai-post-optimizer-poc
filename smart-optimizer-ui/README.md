# 📌 Buffer-Inspired Smart Post Optimizer (POC)

This is a small proof-of-concept project that demonstrates how AI can help creators optimize their social media posts on the fly. It was built as a response to Buffer's job listing and culture, which inspired me to explore how content creation could be made more intuitive and powerful.

---

## ✨ Features

- 🔍 Accepts a draft post input
- 🤖 Uses Hugging face API to analyze and optimize the content
- 🎯 Returns a polished version with improved clarity, tone, hashtags, etc.
- 🧪 Fully local development setup (frontend + backend)
- 🛠️ Built with TypeScript

---

## 🧱 Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | Next.js (TypeScript) |
| Backend | Express (TypeScript) |
| AI Engine | Hugging face llm |
| Styling | Tailwind CSS |
| Runtime | Node.js |

---

## 🧪 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/kaggrwal/buffer-ai-post-optimizer-poc.git
cd buffer-ai-post-optimizer-poc
````

### 2. Install dependencies

```bash
cd smart-optimizer-ui
npm install

cd ../smart-optimizer-api
npm install
```

### 3. Setup Environment Variables

Inside `smart-optimizer-api/`, create a `.env` file:

```env
HF_TOKEN="Your hugging face token"
```

### 4. Run the app

In separate terminals:

```bash
# Start backend
cd smart-optimizer-api
npm run dev
```

```bash
# Start frontend
cd smart-optimizer-ui
npm run dev
```

> The UI runs on `http://localhost:3000` by default.

---

## 📸 Screenshots

*Coming soon*

---

## 🎯 Why This Project?

Buffer asked:

> “What would you improve about Buffer?”

Here’s one answer:
Help users write better, faster. A smart assistant that refines tone, grammar, and impact—right when you're crafting the post—can be a game-changer for creators.

This is a basic version, built in a short span, to show the idea in action.

---

## 🙋‍♂️ About Me

I'm Kumar – developer, creative, and product thinker. I've built fintech tools, ecommerce systems, worked on lending infrastructure, high traffic backends, and now exploring ways to build thoughtful user-facing tools.

---

## 📬 Contact

* LinkedIn: [https://www.linkedin.com/in/kumaraggarrwal/](https://www.linkedin.com/in/kumaraggarrwal/)
* Email: [kaggrwal@gmail.com](mailto:kaggrwal@email.com)

---

> This project is not affiliated with Buffer. It was built out of inspiration for their culture, mission, and openness to new ideas.

```

---

