from django.conf.urls import url
from django.urls import path
from rest import views

urlpatterns = [
    path('getall/', views.index),
    path('posting/', views.posting),


  ]