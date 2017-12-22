# -*- coding: utf-8 -*-
from django.shortcuts import render

# Create your views here.

def index(request):
    #activate('en')
    if "xmdjusername" in request.COOKIES:
        xmdjusername = request.COOKIES["xmdjusername"]
        return render(request, "index.html",{'xmdjusername':xmdjusername})
    else :
        return render(request, "index.html")


def base(request):
    #activate('en')
    return render(request, "base.html")
