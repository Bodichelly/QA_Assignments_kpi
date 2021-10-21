import random
import string
import config as cnf


def gen():
    dictionary = string.ascii_letters + string.digits + string.punctuation
    text_data = ''.join(random.choice(dictionary) for _ in range(cnf.size))
    return text_data
