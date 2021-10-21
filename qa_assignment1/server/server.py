import os
from utils import file_controller, text_gen, hash
from flask import Flask, abort, jsonify
app = Flask(__name__)

data_path = '/serverdata/'
data_file_name = 'text.txt'

@app.route('/')
def get_file():
    file_controller.write_to_file(data_path + data_file_name, text_gen.gen())
    data = file_controller.read_file(data_path + data_file_name)
    if not data:
        abort(500)
    hash_str = hash.md5(data_file_name + data)

    return jsonify({
        'data': data,
        "hash": hash_str,
    })


port = os.environ['PORT']
host = '0.0.0.0'
app.run(host, port)
