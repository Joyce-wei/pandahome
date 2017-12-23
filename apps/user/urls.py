
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls import  include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from . import views


urlpatterns = [
               url(r'^logination', views.logination, name='logination'),
               url(r'^registration', views.registration, name='registration'),
               url(r'^logout', views.logout, name='logout'),
               url(r'^account', views.account, name='account'),
               url(r'^about_us', views.about_us, name='about_us'),
               url(r'^account_address', views.account_address, name='account_address'),
               url(r'^account_order', views.account_order, name='account_order'),
               url(r'^contact', views.contact, name='contact'),
               url(r'^myfoots', views.myfoots, name='myfoots'),


               ]