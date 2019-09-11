import json
import bottle
import os


@bottle.route('/')
def index():
    return Bottle.static_file('MilenaTea.html', root="../static/")

application = bottle.default_app()

if __name__ == '__main__':
    bottle.run(
        application,
        host=os.getenv('IP', '0.0.0.0'),
        port=os.getenv('PORT', '8080'),
        debug=os.getenv('DEBUG', True)
    )
