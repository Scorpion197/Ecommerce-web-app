from django.db import models

# Create your models here.
class Product(models.Model):

    product_name = models.CharField(max_length=50, default='')
    product_price = models.IntegerField(default=0)

    def __str__(self):

        return self.product_name


class Client(models.Model):

    first_name = models.CharField(max_length=50, default='')
    family_name = models.CharField(max_length=50, default='')
    email = models.EmailField(default='')

    def __str__(self):

        return ( self.first_name + self.family_name )


