from flask import Flask, render_template


app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")

# @app.route('/checkWin')
# def check_win(moves):
#     for row in moves:
#         if row[0] == '_':
#           continue;
        
#         if row[0] == row[1] and row[0] == row[2]:
#           winner = row[0]

#     for col in range(3):
#         if moves[0][col] == '_':
#           continue;

#         if moves[0][col] == moves[1][col] and moves[0][col] == moves[2][col]:
#           winner = moves[0][col]

#     if (moves[0][0] != '_' 
#         and moves[0][0] == moves[1][1] 
#         and moves[0][0] == moves[2][2]):
#         winner = moves[0][0]

#     if (moves[0][2] != '_' 
#         and moves[0][2] == moves[1][1] 
#         and moves[0][2] == moves[2][0]):
#         winner = moves[0][2]

#     return jsonify(winner)

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
