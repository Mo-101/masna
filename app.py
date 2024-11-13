from flask import Flask, jsonify  # type: ignore

app = Flask(__name__)

@app.route('/api/data')
def get_data():
    return jsonify({"message": "Hello from Mo-Ovelord, Welcome to the Abode!"})

# Required for Vercel
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)
