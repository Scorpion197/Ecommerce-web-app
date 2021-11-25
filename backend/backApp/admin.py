from django.contrib import admin
from django.db import models
from .models import Product, Client, Cart
from django.contrib.auth.admin import UserAdmin
# Register your models here.


class AdminProduct(admin.ModelAdmin):

    list_display = ('product_name', 'product_price')
    search_fields = ('product_name',)


class AdminClient(admin.ModelAdmin):

    list_display = ('username', 'email')
    search_fields = ('username',)

class CartAdmin(admin.ModelAdmin):

    list_display = ()

admin.site.register(Product, AdminProduct)
admin.site.register(Client, AdminClient)
admin.site.register(Cart, CartAdmin)


