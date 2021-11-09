from rest_framework import serializers
from backApp.models import Client 

class RegistrationSerializer(serializers.ModelSerializer):

    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:

        model = Client 
        fields = ['email', 'username', 'password', 'password2']
        extra_kwargs = {

            'password': {'write_only': True}
        }

    def save(self):

        client = Client(

            email = self.validated_data['email'],
            username = self.validated_data['username'],
        )

        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password != password2:

            raise serializers.ValidationError({'password': 'Password must match'})

        client.set_password(password)
        client.save()

        return client 


class LoginSerializer(serializers.ModelSerializer):

    password = serializers.CharField(max_length=128, min_length=6, write_only=True)

    class Meta:

        model = Client
        fields = ('username', 'email', 'password', 'token')
        read_only_fields =  ['token']
    