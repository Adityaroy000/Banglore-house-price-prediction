# 🏡 Bangalore House Price Prediction - ML Project

This project is a Machine Learning model that predicts house prices in Bangalore based on various features like location, square footage, number of bedrooms, and bathrooms. The model is trained using a cleaned dataset and employs a **Linear Regression** algorithm for price prediction.

---

## 📌 Project Overview

The goal of this project is to:
- Understand the factors affecting house prices in Bangalore.
- Clean and preprocess real-world housing data.
- Train a machine learning model to make accurate price predictions.
- Save the model and column metadata for future deployment.

---

## 🧠 Technologies Used

- **Python**
- **Pandas**, **NumPy**, **Matplotlib**, **Seaborn** (Data Analysis & Visualization)
- **Scikit-learn** (Model Training)
- **Jupyter Notebook** (Development Environment)
- **Pickle** & **JSON** (Model Persistence)

---

## 📁 Project Structure
📦 Bangalore-House-Price-Prediction
│
├── bhp.ipynb # Main Jupyter notebook with all steps
├── Bengaluru_House_Data.csv # Original dataset
├── banglore_home_prices_model.pickle # Trained Linear Regression model
├── columns.json # Metadata with feature names used by the model


---

## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Bangalore-House-Price-Prediction.git
   cd Bangalore-House-Price-Prediction
2. Install dependencies: 
      pip install pandas numpy matplotlib seaborn scikit-learn
3. Run the Jupyter Notebook:
      jupyter notebook bhp.ipynb

---

## 🎯 Model Details
- **Algorithm Used**: Linear Regression
- Target Variable: price (per square foot)

**Features:**
- Location
- Total Square Feet
- Number of Bathrooms
- Number of BHKs

**Final Model:**
- Trained and saved using pickle
- Feature columns saved in columns.json

## 📌 Future Scope
- Add a Flask web interface for real-time prediction
- Deploy using Streamlit or on Heroku
- Try other models like Random Forest or XGBoost for better accuracy

## 📬 Contact
- Developed by Aditya Roy
  [GitHub](https://github.com/Adityaroy000) | [LinkedIn](https://www.linkedin.com/in/aditya-roy-5a39b429a/)

  **⭐ Give it a Star!**
- If you like this project, consider giving it a ⭐ on GitHub!
