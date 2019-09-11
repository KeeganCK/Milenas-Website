import json
from bottle import route, run, template


@route('/')
def index():
    return template('MilenaTea.html')

run(host='localhost', port=8080)
