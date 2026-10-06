# Recipe Finder Backend

This is the backend server for the Recipe Finder app. It connects to MySQL and provides data to frontend.

## How to Run Backend

Follow these steps in terminal inside `backend` folder:

### 1. Create Virtual Environment

```
python -m venv venv
```

### 2. Activate Virtual Environment

Windows:
```
.\venv\Scripts\Activate
```
Mac/Linux:
```
source venv/bin/activate
```

Make sure `(venv)` appears at start of terminal line.

### 3. Install Packages

```
pip install flask flask-cors mysql-connector-python python-dotenv
```

### 4. Create .env File

Create file named `.env` inside `backend` folder with the following:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password_here
DB_NAME=recipe_finder
DB_PORT=3306
```
Replace `your_mysql_password_here` with your local MySQL password

### 5. Start Backend Server

```
python app.py
```

## API Endpoints

Once server is running on http://localhost:5000, test these URLs in browser:
- **Get All Recipes (Limit of 50):** `GET http://localhost:5000/api/recipes`
- **Search Recipes by Keyword:** `GET http://localhost:5000/api/recipes?search=<keyword>`
- **Get Recipe Information by ID:** `GET http://localhost:5000/api/recipes/<id>`