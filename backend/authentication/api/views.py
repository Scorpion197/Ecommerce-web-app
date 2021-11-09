from rest_framework import status 
from rest_framework.response import Response 
from rest_framework.decorators import api_view,permission_classes
from rest_framework import permissions
from authentication.api.serializers import RegistrationSerializer, LoginSerializer
from rest_framework.authtoken.models import Token 
from rest_framework.generics import GenericAPIView 
from django.contrib.auth import authenticate 


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

        else:
            data = serializer.errors 
        
        return Response(data)


@permission_classes((permissions.AllowAny,))
class LoginAPIView(GenericAPIView):

    serializer_class = LoginSerializer

    def post(self, request):

        email = request.data.get('email', None)
        password = request.data.get('password', None)
        data = {}

        user = authenticate(username=email, password=password)

        if user is not None:

            serializer = self.serializer_class(user)
            data['email'] = serializer.data['email']
            data['token'] = serializer.data['token']
            data['response'] = {

                "action": 'login', 
                "status": 'success'
            }

            return Response(data)

        return Response({"message": "invalid creds"})




