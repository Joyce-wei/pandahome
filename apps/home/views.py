# -*- coding: utf-8 -*-
from django.shortcuts import render

# Create your views here.

def index(request):
    #activate('en')
    return render(request, "index.html")


def base(request):
    #activate('en')
    return render(request, "base.html")


def sitemap(request):
    #activate('en')
    return render(request, "sitemap.html")