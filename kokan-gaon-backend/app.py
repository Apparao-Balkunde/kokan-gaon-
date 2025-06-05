# app.py (backend)
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/data")
def get_data():
    return jsonify({
        "name": "Ramrao Gavkar",
        "task": "Farming"
    })