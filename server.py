import json
from bottle import HTTPResponse
from flask import Flask, render_template

@app.route("/")
def main():
    return render_template('MilenaTea.html')

if __name__=="__main__":
    app.run(debug=True, host="0.0.0.0", port=80)
