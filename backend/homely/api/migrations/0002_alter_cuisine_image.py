# Generated by Django 5.1.1 on 2024-11-03 11:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cuisine',
            name='image',
            field=models.CharField(blank=True, max_length=300, null=True),
        ),
    ]
