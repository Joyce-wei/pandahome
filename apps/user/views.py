from django.shortcuts import render

# Create your views here.


def registration(request):
    #activate('en')
    return render(request, "registration.html")


def logination(request):
    #activate('en')
    return render(request, "logination.html")

def logout(request):
    return render(request, "index.html")

def usercenter(request):
    return render(request, "index.html")