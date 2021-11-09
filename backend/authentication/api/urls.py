from django.urls import path 
from authentication.api.views import *

app_name = "authentication"

urlpatterns = [

    path('register', registration_view, name="register"),
    path('login', LoginAPIView.as_view(), name="login"),

]


