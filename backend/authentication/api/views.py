from rest_framework import status 
from rest_framework.response import Response 
from rest_framework.decorators import api_view,permission_classes, authentication_classes 
from rest_framework import permissions
from authentication.api.serializers import RegistrationSerializer, LoginSerializer
from rest_framework.authtoken.models import Token 
from django.contrib.auth import authenticate 
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication

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

    


@api_view(['GET', ])
@permission_classes((permissions.IsAuthenticated,))
@authentication_classes([TokenAuthentication])
def test_perm(request):

    if request.method == "GET":

        data = {

            'action': "GET", 
            'status': "SUCCESS"
        }


        return Response(data)


