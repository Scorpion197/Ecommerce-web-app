from rest_framework import status 
from rest_framework.response import Response 
from rest_framework.decorators import api_view,permission_classes
from rest_framework import permissions
from authentication.api.serializers import RegistrationSerializer

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
