import hashlib


def md5(data):
    hash_object = hashlib.md5(bytes(data, encoding='utf-8'))
    return hash_object.hexdigest()
