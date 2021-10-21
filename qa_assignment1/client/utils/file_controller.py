def write_to_file(file_path, data):
    f = open(file_path, 'w+')
    f.write(data)
    f.close()


def read_file(file_path):
    f = open(file_path, 'r')
    data = f.read()
    f.close()
    return data
