from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import PermissionsMixin

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
import jwt 
from datetime import datetime, timedelta

# Create your models here.
class Product(models.Model):

    product_name = models.CharField(max_length=50, default='')
    product_price = models.IntegerField(default=0)
    image_url = models.CharField(max_length=200, default='')

    def __str__(self):

        return self.product_name


class MyClientManager(BaseUserManager):

    def create_user(self, email, username, password=None):

        if not email:
            raise ValueError('Users must have an email address')
        
        if not username:

            raise ValueError("Users must have a username")

        user = self.model(

            email = self.normalize_email(email), 
            username =username, 
        )

        user.set_password(password)
        user.save(using=self._db)

        return user

    

    def create_superuser(self, email, username, password):

        user = self.create_user(

            email = self.normalize_email(email), 
            password = password, 
            username = username,
        )

        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user


class Client(AbstractBaseUser):

    username = models.CharField(max_length=50, default="", unique=True)
    email = models.EmailField(default='', unique=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    first_name = models.CharField(max_length=50, default="")
    family_name = models.CharField(max_length=50, default="")

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = MyClientManager()

    #@property
    #def token(self):
#
    #    token = jwt.encode({'username':self.username, 'email':self.email, 'exp': datetime.utcnow() + timedelta(hours=24)},
    #        
    #        settings.SECRET_KEY, algorithm='HS256'
    #    )
#
    #    return token 


    def __str__(self):

        return ( self.first_name + self.family_name )

    def has_perm(self, perm, obj=None):

        return self.is_admin

    def has_module_perms(self, app_label):

        return True


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

    
