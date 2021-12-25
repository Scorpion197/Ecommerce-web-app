from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import generics
from rest_framework import permissions
from backApp.models import Product, Client, Cart
from rest_framework.response import Response
from .serializers import *
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import authenticate 
from rest_framework.authentication import TokenAuthentication 

class ProductListView(ListAPIView):

    permission_classes = (permissions.AllowAny, )
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

class ProductDetailView(RetrieveAPIView):

    permission_classes = (permissions.AllowAny,)
    serializer_class = ProductSerializer
    queryset =Product.objects.all()


