
# 🛠️ Simple Items API (CRUD)

A basic backend API built with Express.js to perform CRUD operations on an array of items.

---

## 🚀 Features

- View all items
- View a single item by ID
- Add new items
- Update an item by ID
- Delete an item by ID

---

## 🧰 Tech Stack

- Node.js
- Express.js
- UUID for unique IDs

---

## 🔄 API Endpoints

### ✅ Get all items
- `GET /items`

### 🔍 Get item by ID
- `GET /items/:id`

### ➕ Create a new item
- `POST /items`
- **Body:**
  ```json
  {
    "name": "Backpack",
    "inStock": true
  }
  ```

- **Response:**
  ```json
  {
    "message": "Item created",
    "item": {
      "name": "Backpack",
      "inStock": true,
      "id": "f19b7e56-f0a5-4c56-b827-cc5d4c04c147"
    }
  }
  ```

### ✏️ Update an item
- `PUT /items/:id`
- **Body (any field optional):**
  ```json
  {
    "name": "Updated Backpack",
    "inStock": false
  }
  ```

- **Response:**
  ```json
  {
    "message": "Item updated",
    "item": {
      "name": "Updated Backpack",
      "inStock": false,
      "id": "f19b7e56-f0a5-4c56-b827-cc5d4c04c147"
    }
  }
  ```

### ❌ Delete an item
- `DELETE /items/:id`
- **Response:**
  ```json
  {
    "message": "Item deleted"
  }
  ```

---

## 📌 Notes

- Data is stored in-memory. Changes will be lost when the server restarts.
- Use tools like **Postman** or **curl** to test the endpoints.

---

## 👩‍💻 Author

Chiamaka ✨
