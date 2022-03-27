from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import UserRegisterSerializer, UserInfoSerializer, CollectionsSerializer, LanguageCardsSerializer, UserSerializer, CollectionManagingSerializer, LanguageCardsManagingSerializer
from .models import UserInfo, Collection, LanguageCard
from django.contrib.auth.models import User
from django.db.models import Prefetch
from rest_framework.response import Response


class UserRegisterViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer
    permission_classes = [AllowAny]
    http_method_names = ['post']


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = User.objects.filter(username=self.request.user.username)
        return queryset


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


class CollectionManagingViewSet(viewsets.ModelViewSet):
    queryset = Collection.objects.all()
    serializer_class = CollectionManagingSerializer
    permission_classes = [IsAuthenticated]
    http_method_names = ['patch', 'post']

    def get_queryset(self):
        queryset = Collection.objects.filter(owner__user__id=self.request.user.id)
        return queryset

    def create(self, request): 
        post_data = request.data
        user = UserInfo.objects.filter(user__id=request.user.id)[0]
        response = Collection.objects.create(owner=user, native_language=post_data['native_language'], learn_language=post_data['learn_language'], name=post_data['name'])
        responseText = {
            'id': response.id,
            'name': response.name,
            'learn_language': response.learn_language,
            'native_language': response.native_language,
        }
        return Response(responseText)


class LanguageCardsManagingViewSet(viewsets.ModelViewSet):
    queryset = LanguageCard.objects.all()
    serializer_class = LanguageCardsManagingSerializer
    permission_classes = [IsAuthenticated]
    http_method_names = ['patch', 'delete', 'post']