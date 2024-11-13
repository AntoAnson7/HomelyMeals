from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework.routers import DefaultRouter
from .views import CuisineViewSet,login,register,OrderViewSet

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

router = DefaultRouter()
router.register(r'cuisines', CuisineViewSet, basename='cuisine')
router.register(r'orders', OrderViewSet, basename='order')

urlpatterns += [
    path('', include(router.urls)),    
    path('register/', register, name='register'),
    path('login/', login, name='login'),
]