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


def account(request):
    return render(request, "account.html")


def about_us(request):
    return render(request, "about_us.html")


def account_address(request):
    return render(request, "account-address.html")


def account_order(request):
    return render(request, "account-order.html")


def contact(request):
    return render(request, "contact.html")


def myfoots(request):
    return render(request, "myfoots.html")



