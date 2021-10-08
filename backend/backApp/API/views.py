from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.permissions import AllowAny
from backApp.models import Product 
from .serializers import ProductSerializer

class ProductListView(ListAPIView):

    permission_classes = (AllowAny, )
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

class ProductDetailView(RetrieveAPIView):

    permission_classes = (AllowAny,)
    serializer_class = ProductSerializer
    queryset =Product.objects.all()

    
