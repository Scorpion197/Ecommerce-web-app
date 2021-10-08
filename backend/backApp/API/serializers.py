from rest_framework import serializers 
from backApp.models import Product, Client

class ProductSerializer(serializers.ModelSerializer):

    class Meta:

        model = Product 
        fields = ['product_name', 'product_price', 'image_url']

class ClientSerializer(serializers.ModelSerializer):

    class Meta:

        model = Client 
        fields = ['first_name', 'family_name', 'email']



