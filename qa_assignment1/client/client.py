import os
import requests
from utils import hash, file_controller

data_path = '/clientdata/'
data_file_name = 'text.txt'

port = os.environ['PORT']
api = os.environ['API']

response = requests.get(f'http://{api}:{port}/').json()
data = response['data']
hash_str = response['hash']

if hash_str == hash.md5(data_file_name + data):
    print('Received file verified')

file_controller.write_to_file(data_path + data_file_name, data)
