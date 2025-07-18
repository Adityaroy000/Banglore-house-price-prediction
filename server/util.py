import json
import pickle
import numpy as np
import pandas as pd
__locations = None
__model = None
__data_columns = None

def get_estimated_price(location,sqft,bhk,bath):
    try:
        loc_index = __data_columns.index(location)
    except:
        loc_index = -1
    
    x = np.zeros(len(__data_columns))
    x[0] = sqft
    x[1] = bath
    x[2] = bhk

    if loc_index >= 0:
        x[loc_index] = 1
    
    x_df = pd.DataFrame([x], columns=__data_columns)
    return round(__model.predict(x_df)[0],2)


def get_location_names():
    return __locations


def load_saved_artifacts():
    print("Loading saved artifacts...start")
    global __data_columns
    global __locations
    global __model
    with open("./artifacts/columns.json",'r') as f:
        __data_columns = json.load(f)['data_columns']
        __locations = __data_columns[3:]

    with open("./artifacts/banglore_home_prices_model.pickle",'rb') as f:
        __model = pickle.load(f)
    
    print("Loading saved artifacts...Done")


if __name__ == "__main__":
    load_saved_artifacts()
    print(get_location_names)
    print(get_estimated_price('1st phase jp nagar',1000, 3, 3))
    print(get_estimated_price('1st phase jp nagar', 1000, 2, 2))
    print(get_estimated_price('kasturi nagar', 1000, 2, 2)) # other location
    print(get_estimated_price('kothanur', 1000, 2, 2))  # other location