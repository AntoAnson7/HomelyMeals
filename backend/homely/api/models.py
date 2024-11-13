from django.db import models
from django.contrib.auth.models import User

class Cuisine(models.Model):
    name = models.CharField(max_length=100)
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    deliverable = models.BooleanField(default=False)
    description = models.TextField()
    average_amount = models.DecimalField(max_digits=6, decimal_places=2)
    dietary_type = models.CharField(max_length=50)
    image = models.CharField(max_length=300,blank=True,null=True)

    def __str__(self):
        return self.name

class Order(models.Model):
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Completed', 'Completed'),
        ('Cancelled', 'Cancelled'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="orders")
    food_name = models.CharField(max_length=100)
    order_date = models.DateTimeField(auto_now_add=True)
    quantity = models.PositiveIntegerField()
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='Pending')

    def __str__(self):
        return f"{self.food_name} - {self.user.username}"