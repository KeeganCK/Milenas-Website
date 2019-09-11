import json
from bottle import route, run, template


@route('/')
def index():
    return Bottle.static_file('MilenaTea.html', root="../static/")

if __name__ == '__main__':
    bottle.run(
        application,
        host=os.getenv('IP', '0.0.0.0'),
        port=os.getenv('PORT', '8080'),
        debug=os.getenv('DEBUG', True)
    )
