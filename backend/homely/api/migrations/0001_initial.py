# Generated by Django 5.1.1 on 2024-11-03 11:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cuisine',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('rating', models.DecimalField(decimal_places=1, max_digits=3)),
                ('deliverable', models.BooleanField(default=False)),
                ('description', models.TextField()),
                ('average_amount', models.DecimalField(decimal_places=2, max_digits=6)),
                ('dietary_type', models.CharField(max_length=50)),
                ('image', models.URLField(max_length=300)),
            ],
        ),
    ]