from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views_v2 import CuisineViewSet, login, register, OrderViewSet

router = DefaultRouter()
router.register(r'cuisines', CuisineViewSet, basename='cuisine')
router.register(r'orders', OrderViewSet, basename='order')

urlpatterns = [
    path('', include(router.urls)),
    path('register/', register, name='register_v2'),
    path('login/', login, name='login_v2'),
]
