from django.urls import path 
from authentication.api.views import *

app_name = "authentication"

urlpatterns = [

    path('register', registration_view, name="register"),
    path('login', login_view, name="login"),
    path('test', test_perm, name="test_perm"),
    path('carts', CartListView.as_view(), name="carts"),
]


