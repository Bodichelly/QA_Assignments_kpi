import random
import string
from utils import config


def gen():
    dictionary = string.ascii_letters + string.digits + string.punctuation
    text_data = ''.join(random.choice(dictionary) for _ in range(config.size))
    return text_data
