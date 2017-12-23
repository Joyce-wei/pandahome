
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls import  include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from . import views


urlpatterns = [
               url(r'^listing', views.listing, name='listing'),
               url(r'^product/(?P<productid>.*)/', views.product, name='product'),
               ]