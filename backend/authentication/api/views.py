from rest_framework import status 
from rest_framework.response import Response 
from rest_framework.decorators import api_view,permission_classes, authentication_classes 
from rest_framework import permissions
from authentication.api.serializers import *
from rest_framework.authtoken.models import Token 
from django.contrib.auth import authenticate 
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from backApp.models import *
from rest_framework.generics import ListAPIView

@api_view(['POST',])
@permission_classes((permissions.AllowAny,))
def registration_view(request):

    if request.method == "POST":
        
        serializer = RegistrationSerializer(data=request.data)
        data = {}

        if serializer.is_valid():

            client = serializer.save()

            data['response'] = {

                'action': 'registration', 
                'status': 'success',
            }

            data['email'] = client.email
            data['username'] = client.username
            token = Token.objects.get(user=client).key
            data['token'] = token

        else:
            data = serializer.errors 
            data['response'] = {
                'action': 'registration', 
                'status': 'failed',
            }
        
        return Response(data)


@api_view(['POST',])
@permission_classes((permissions.AllowAny,))
def login_view(request):

    if request.method == "POST":

        serializer_class = LoginSerializer
        data = {}

        email = request.data.get('email', None)
        password = request.data.get('password', None)
        user = authenticate(username=email, password=password)
        if user is not None:
            
            serializer = LoginSerializer(user)
            data['email'] = serializer.data['email']
            data['username'] = serializer.data['username']
            token = Token.objects.get(user=user).key
            data['token'] = token 

            data['response'] = {

                'action': 'login', 
                'status': 'success'
            }

            return Response(data)
            
        else: 

            data['response'] = {
                'action': 'login', 
                'status': 'failed'
            }

        return Response(data)

    

@api_view(['POST',])
@permission_classes((permissions.AllowAny,))
def add_to_cart(request):
    
    data = {}
    products = [] 

    if request.method == "POST":

        try:

            owner_email = request.data.get('email', None)
            item_count = request.data.get('count', None)
            products = request.data.get('payload', None)

            client = Client.objects.get(email=owner_email)
            cart = Cart(owner_email=owner_email)
            cart.save()

            for i in range(len(products)):

                prod = Product.objects.get(product_name=products[i]['ProductName'])
                cart.product_set.add(prod)

            cart.save()
            client.cart = cart
            client.save()

            data['status'] = 'SUCCESS'

            return Response(data)

        except:

            data['status'] = 'FAILED'
            return Response(data) 

    
    else:

        data['status'] = 'FAILED'

        return Response(data)


class CartListView(ListAPIView):

    permission_classes = (permissions.AllowAny, )   
    serializer_class = CartSerializer
    queryset = Cart.objects.all()



