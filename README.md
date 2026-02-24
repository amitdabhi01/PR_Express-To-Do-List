# ✅ To-Do List API (Node.js + Express)

This is a simple **RESTful To-Do List API** built using **Node.js** and **Express.js**.  
It supports full **CRUD operations** (Create, Read, Update, Delete) and demonstrates **centralized error handling** using a custom `HttpError` class.

---

## 🚀 Features

- 🏠 Home route with welcome message
- 📋 Get all to-do items
- 🔍 Get a single to-do by ID
- ➕ Create a new to-do
- ✏️ Update a to-do (PATCH)
- 🔁 Replace a to-do (PUT)
- ❌ Delete a to-do
- ⚠️ Custom error handling middleware
- 🧠 Clean and beginner-friendly code

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **API Style:** REST
- **Data Storage:** In-memory array (for learning)
- **Testing Tool:** Postman / Thunder Client

---

## 📁 Project Structure

Express-Todo/<br>
│<br>
├── middleware/<br>
│   └── httpError.js<br>
│<br>
├── app.js<br>
├── package.json<br>
└── README.md<br>


---


## 🧪 Postman API Testing

### 📸 Screenshots

**Home Route**  

<img width="1920" height="1080" alt="Screenshot 2026-02-24 104706" src="https://github.com/user-attachments/assets/cc8aaac6-e4c1-4c6e-9cac-25a9960d580f" />


**Undefined Route Handling** 

<img width="1920" height="1080" alt="Screenshot 2026-02-24 104712" src="https://github.com/user-attachments/assets/e42753ba-2b97-4b1a-892f-e4d813977c72" />


**Get All Todos**  

<img width="1920" height="1080" alt="Screenshot 2026-02-24 104717" src="https://github.com/user-attachments/assets/5639c5a0-a305-4978-8c14-2e9d23eb9646" />


**Get Todo by ID**

<img width="1920" height="1080" alt="Screenshot 2026-02-24 104723" src="https://github.com/user-attachments/assets/a9278fb1-a434-45b9-8b58-6b360ba2e7fc" />


**Create Todo** 

<img width="1920" height="1080" alt="Screenshot 2026-02-24 104728" src="https://github.com/user-attachments/assets/4a37a9d6-76b6-4d30-9846-0a372872efbd" />


**Update Todo (PATCH)** 

<img width="1920" height="1080" alt="Screenshot 2026-02-24 104733" src="https://github.com/user-attachments/assets/bab49f83-a742-4d7b-bd98-8852ac7ba2d9" />


**Update Todo (PUT)** 

<img width="1920" height="1080" alt="Screenshot 2026-02-24 104743" src="https://github.com/user-attachments/assets/8139db9f-cde2-4e4e-b964-c085a5beb6e9" />


**Delete Todo**  

<img width="1920" height="1080" alt="Screenshot 2026-02-24 104738" src="https://github.com/user-attachments/assets/3845d51b-6dbf-4ea4-91b2-7c863335240d" />


---




5. Server will run on

http://localhost:5000

---



---

## 📌 API Endpoints

### 🏠 Home
GET /


### 📋 Get All Todos
GET /taskList


### 🔍 Get Todo by ID
GET /taskList/:id


### ➕ Create Todo
POST /addTask


**Body (JSON):**
{
  "title": "Learn Express",
  "description": "Understand routing and middleware"
}

✏️ Update Todo (PATCH)

PATCH /updateTask/:id

Body (JSON):

{
  "title": "Updated title",
  "description": "Updated description"
}

🔁 Replace Todo (PUT)

PUT /updateWholeTask/:id

Body (JSON):

{
  "title": "New title",
  "description": "New description"
}

❌ Delete Todo


DELETE /deleteTask/:id
