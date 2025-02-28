📚 Book Recommender System

A Flask-based Book Recommendation System using Collaborative Filtering to suggest books based on user preferences. The project leverages automated EDA (using ydata-profiling), a modern HTML/CSS UI with Particle.js, and an intuitive Flask API for generating recommendations.

🚀 Features

✅ Collaborative Filtering – Recommends books based on user interactions.

✅ Automated EDA – Uses ydata-profiling for exploratory data analysis.

✅ Flask Backend – Handles recommendation requests and data processing.

✅ Modern UI – Built using HTML, CSS, Bootstrap, and Particle.js for animations.

✅ Error Handling – Displays a red warning message if a searched book is not available.

📂 Dataset

The dataset is sourced from Kaggle.

It contains information about books, users, and ratings.

The dataset includes fields like book titles, authors, ratings, and user interactions.

🛠️ Tech Stack

🔹 Python (Flask, Pandas, NumPy)

🔹 Machine Learning (Collaborative Filtering)

🔹 ydata-profiling (for Automated EDA)

🔹 HTML, CSS, Bootstrap (Frontend)

🔹 Particle.js (for animations)

📥 Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/your-username/2_Book_Recommendation_System.git

cd 2_Book_Recommendation_System

2️⃣ Create a Virtual Environment (Optional but Recommended)

python -m venv env

source env/bin/activate # On Windows: env\Scripts\activate

3️⃣ Install Dependencies

pip install -r requirements.txt

4️⃣ Run the Flask App

python app.py

5️⃣ Open the Web App

Go to: http://127.0.0.1:5000/ in your browser.

🎯 How to Use?

Enter a book name in the search bar.

If the book exists, the system will recommend similar books.

If not, an error message (in red) will be displayed below the search button.

📸 Screenshots

🏠 Home Page (Top 50 Books)

<img width="1280" alt="Screenshot 2025-02-27 at 11 50 46 PM" src="https://github.com/user-attachments/assets/08bd7fac-1d9c-401e-89d7-672948f46b73" />

📖 Recommend Page

<img width="1280" alt="Screenshot 2025-02-27 at 11 55 55 PM" src="https://github.com/user-attachments/assets/a7b0a6d6-29a2-4c24-8b3e-d3add61d1954" />

📚 Recommended Books

<img width="1280" alt="Screenshot 2025-02-27 at 11 51 40 PM" src="https://github.com/user-attachments/assets/49c526b9-81e1-4190-b582-514c50f7ffd8" />
