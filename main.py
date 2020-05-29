
from flask import *
from pymongo import MongoClient
import re 
from bson import ObjectId

app=Flask(__name__)

@app.route('/getMedicines',methods=['GET','POST'])
def getMedicines():
    client = MongoClient('localhost',27017)  ## Put here connection URI
    db = client["MedicineIn"]
    data_merged = db["data_merged"]
    print(data_merged)

    resp = data_merged.find({"medName": "Acnesol Gel"}, { "_id": 0, "medName": 1, "pageURL": 1 , "manufacturer": 1, "pharmeasy_price":1,"onemg_price":1,"netmeds_price":1,'salt':1})
    resp = list(resp)
    print(resp)
    return jsonify(resp)

if __name__=='__main__':
    app.run()    
