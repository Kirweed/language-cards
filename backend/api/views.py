from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import UserSerializer, UserInfoSerializer, CollectionsSerializer, LanguageCardsSerializer
from .models import UserInfo, Collection, LanguageCard
from django.contrib.auth.models import User


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class UserInfoViewSet(viewsets.ModelViewSet):
    queryset = UserInfo.objects.all()
    serializer_class = UserInfoSerializer
    permission_classes = [IsAuthenticated]


class CollectionsViewSet(viewsets.ModelViewSet):
    queryset = Collection.objects.all()
    serializer_class = CollectionsSerializer
    permission_classes = [IsAuthenticated]


class LanguageCardsViewSet(viewsets.ModelViewSet):
    queryset = LanguageCard.objects.all()
    serializer_class = LanguageCardsSerializer
    permission_classes = [IsAuthenticated]