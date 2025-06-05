from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend access

@app.route('/')
def home():
    return jsonify({'message': 'Welcome to Kokan Gaon Backend!'})

if __name__ == 'main':
    app.run(debug=True)
