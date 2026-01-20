from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

API_KEY = "08491343272f617325954723feb07384"
BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/weather')
def get_weather():
    city = request.args.get('city')
    full_url = f"{BASE_URL}?q={city}&appid={API_KEY}&units=imperial"  # Fahrenheit
    try:
        response = requests.get(full_url)
        data = response.json()
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
