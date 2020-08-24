import helper
from flask import Flask, render_template, Response, request, flash, redirect, url_for
import json

app = Flask(__name__)

@app.route('/home')
def home_page():
    return render_template('index.html')

@app.route('/contact')
def contact_page():
    return render_template('contact.html')

@app.route('/login.html')
def login_page():
    return render_template('login.html')

#@app.route('/about.html')
#def login_page():
    #return render_template('about.html')
