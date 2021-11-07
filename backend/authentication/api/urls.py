from django.urls import path 
from authentication.api.views import registration_view

app_name = "authentication"

urlpatterns = [

    path('register', registration_view, name="register"),
]

