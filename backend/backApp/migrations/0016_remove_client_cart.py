# Generated by Django 3.2 on 2021-11-07 15:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backApp', '0015_rename_last_name_client_family_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='client',
            name='cart',
        ),
    ]
