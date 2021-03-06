from django.urls import path 
from authentication.api.views import *

app_name = "authentication"

urlpatterns = [

    path('register', registration_view, name="register"),
    path('login', login_view, name="login"),
    path('carts', CartListView.as_view(), name="carts"),
    path('add-to-cart', add_to_cart, name="add_to_cart"), 

]


