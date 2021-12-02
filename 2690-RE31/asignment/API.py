# Referencing 

# Import framework
from flask import Flask
from flask_restful import Resource, Api

# Instantiate the app
app = Flask(__name__)
api = Api(app)

class Asignment(Resource):
    def get(self):
        return {
            'hello': ['word', '2690', 
            'Bian']
        }

# Create routes
api.add_resource(Asignment, '/')

# Run the application
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True)