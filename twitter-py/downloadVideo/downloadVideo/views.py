from django.shortcuts import render
import requests 


def output(request):

    data=requests.get("")
    data= data.text