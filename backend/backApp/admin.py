from django.contrib import admin
from django.db import models
from .models import Product, Client
# Register your models here.


class AdminProduct(admin.ModelAdmin):

    list_display = ('product_name', 'product_price')
    search_fields = ('product_name',)


class AdminClient(admin.ModelAdmin):

    list_display = ('first_name', 'family_name')
    search_fields = ('first_name', 'family_name')


admin.site.register(Product, AdminProduct)
admin.site.register(Client, AdminClient)

