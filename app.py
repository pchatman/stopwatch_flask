from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    # List of some world timezones
    world_timezones = [
        {'city': 'New York', 'timezone': 'America/New_York'},
        {'city': 'London', 'timezone': 'Europe/London'},
        {'city': 'Tokyo', 'timezone': 'Asia/Tokyo'},
        {'city': 'Monrovia', 'timezone': 'Africa/Monrovia'},
        {'city': 'Syndney', 'timezone': 'Australia/Sydney'}
    ]

    # return render_template('index.html', timezones=world_timezones)
    return render_template('index.html', world_timezones=world_timezones)

if __name__ == '__main__':
    app.run(debug=True)
