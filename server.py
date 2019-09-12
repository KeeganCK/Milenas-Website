import json
import bottle
import os


@bottle.route('/static/MilenaTea.html')
def index():
    return bottle.static_file('MilenaTea.html', route="../MilenaTea.html")

application = bottle.default_app()

if __name__ == '__main__':
    bottle.run(
        application,
        host=os.getenv('IP', '0.0.0.0'),
        port=os.getenv('PORT', '8080'),
        debug=os.getenv('DEBUG', True)
    )
