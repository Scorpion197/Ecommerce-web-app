from rest_framework import serializers 
from backApp.models import Product, Client
from django.contrib.auth.models import User

class ProductSerializer(serializers.ModelSerializer):

    class Meta:

        model = Product 
        fields = ['product_name', 'product_price', 'image_url']

class ClientSerializer(serializers.ModelSerializer):

    class Meta:

        model = Client 
        fields = ['first_name', 'family_name', 'email']

        


