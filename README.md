#  Weather App

A beginner-friendly **Flask-based weather application** that helps users **check the current temperature, humidity, and feels-like temperature** for any city in real time with a clean, responsive UI.

---

##  Problem Statement

Many users want a **simple and quick way** to check the current weather without getting distracted by too many details. Complex apps show too much information, making it hard to see just the essentials like **current temperature and humidity**.

This app aims to **display key weather info clearly and intuitively**.

---

##  Solution Overview

**Weather App** allows users to:

* Search for any city
* See **current temperature** prominently
* View **humidity** and **feels-like temperature**
* Get a **color-coded temperature** for quick hot/cold perception
* Use a **clean and responsive UI** on both mobile and desktop

The app is **lightweight, fast, and easy to use**.

---

##  Features

*  Search any city for current weather
*  Large display of current temperature
*  Shows humidity and feels-like temperature
*  Temperature text changes color based on hot/cold
*  Fully responsive design (mobile + desktop)
*  Fast and lightweight Flask backend

---

##  Tech Stack

### **Frontend**

* HTML & CSS
* JavaScript (Fetch API)
* Google Fonts (Poppins)

### **Backend & API**

* Python 3 & Flask
* OpenWeatherMap API

### **Tools**

* VS Code
* Git & GitHub
* Browser for testing

---

##  Architecture Overview

```
User Browser
      |
HTML/CSS/JS Frontend
      |
Flask Backend
      |
OpenWeatherMap API (current weather)
```

---

##  Setup Instructions

Follow these steps to run the project locally:

### **1. Clone the Repository**

```bash
git clone https://github.com/keshavarthini-143/weather_app.git
cd weather_app
```

### **2. Install Dependencies**

```bash
pip install flask requests
```

### **3. Configure API Key**

* Sign up on [OpenWeatherMap](https://openweathermap.org/) to get an API key.
* Replace the `API_KEY` variable in `app.py`:

```python
API_KEY = "YOUR_API_KEY_HERE"
```

### **4. Run the Project**

```bash
python app.py
```

The app will run at:

```
http://127.0.0.1:5000/
```

---

##  Project Structure

```
weather_app/
│
├── app.py
├── templates/
│   └── index.html
├── static/
│   ├── style.css
│   ├── script.js
│   └── cloud.png
└── README.md
```

---

##  Challenges Faced

* Handling API errors and invalid city input
* Displaying only the most **important weather info**
* Making the UI **responsive and visually appealing**
* Dynamically changing **temperature text color**

---

##  Future Improvements

* Add **forecast for next few days**
* Include **wind speed, pressure, and visibility**
* Dark mode support
* Animate weather icons for rain, sun, snow, etc.
* Save favorite cities for quick access

---

##  Color-Coded Temperature Logic

```
Cold (≤ 50°F)      → Blue
Moderate (51–75°F) → Orange
Hot (> 75°F)       → Red
```

This helps users **quickly gauge temperature visually**.

---

##  Impact

* Makes checking weather **simple and intuitive**
* Reduces cognitive load by showing **only essential info**
* Provides a **lightweight and responsive tool** for students and casual users

---

## 📹 Demo & Submission

* 🎥 Demo Video: https://vimeo.com/1156355655?share=copy&fl=sv&fe=ci
* 🏆 Built for **CircuitBreak 2025**

---

## 👨‍💻 Author

**Keshavarthini B**
Aspiring Full Stack Developer | Exploring UI/UX

---
