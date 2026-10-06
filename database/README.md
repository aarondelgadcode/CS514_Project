# Recipe Finder Database

This contains the files needed to set up the MySQL database with MySQL Workbench.

## How to Set Up Database

### Step 1. Create Database

1. Open **MySQL Workbench** and connect to your local MySQL server instance.
2. Go to **File** -> **Open SQL Script...**.
3. Select the `schema.sql` file located inside the `database/` folder for this project (CS514_Project).
4. Click the **Lightning Bolt** icon to run the script.
5. Refresh **Schemas** panel and verify the `recipe_finder` database and `recipes` table appear.

### Step 2. Import Data

1. Right-click on the `recipes` table and select **Table Data Import Wizard**.
2. Click **Browse** and select the `recipes_sample.csv` file located inside the `database/` folder for this project (CS514_Project).
3. Click **Next**, choose **Use existing table: `recipe_finder.recipes`**, and select **Truncate table before import**.
4. Click **Next** -> **Next** -> **Next** to run the import process.

### Step 3. Verify Data Import

Execute a query in MySQL Workbench and confirm the `recipes_sample.csv` data was imported into the `recipes` table.  
**Example:**
```
USE recipe_finder;

SELECT * FROM recipes;
```
This will display all the data in the `recipes` table.