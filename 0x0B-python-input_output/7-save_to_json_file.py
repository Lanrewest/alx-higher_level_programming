#!/usr/bin/python3
def save_to_json_file(my_obj, filename):
    """
    save to file
    """
    import json
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(my_obj, f)
