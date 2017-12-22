
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls import  include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from . import views


urlpatterns = [
               url(r'^index', views.index, name='index'),
               url(r'^base', views.base, name='base'),
               ]