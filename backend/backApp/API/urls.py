from django.urls import path 

from .views import *

app_name = "backApp"

urlpatterns = [

    path('', ProductListView.as_view(), name='all_products'),
    path('<pk>', ProductDetailView.as_view(), name='product_detail'),
    
]