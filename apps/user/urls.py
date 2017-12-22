
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
               url(r'^usercenter', views.usercenter, name='usercenter'),
               ]