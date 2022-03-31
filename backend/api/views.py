from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import UserRegisterSerializer, UserInfoSerializer, CollectionsSerializer, LanguageCardsSerializer, UserSerializer, CollectionManagingSerializer, LanguageCardsManagingSerializer
from .models import UserInfo, Collection, LanguageCard
from django.contrib.auth.models import User
from django.db.models import Prefetch
from rest_framework.response import Response
from rest_framework import status


def username_exists(username):
    return User.objects.filter(username=username).exists()


def email_exists(email):
    return User.objects.filter(email=email).exists()


class UserRegisterViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer
    permission_classes = [AllowAny]
    http_method_names = ['post']

    def create(self, request):
        post_data = request.data
        if not username_exists(post_data["username"]):
            if not email_exists(post_data["email"]):
                user = User.objects.create_user(
                    password=post_data["password"], email=post_data["email"], username=post_data["username"])
                userInfo = UserInfo.objects.create(user=user, points=0)
                collection = Collection.objects.create(
                    owner=userInfo, native_language=post_data['nativeLanguage'], learn_language=post_data['learnLanguage'], name=post_data['collectionName'])
                for card in post_data["languageCards"]:
                    LanguageCard.objects.create(
                        collection=collection, learn_word=card["learnWord"], native_word=card["nativeWord"])
                return Response('User has been sucesfully created')

            return Response('There is already acount with this email!', status=status.HTTP_409_CONFLICT)
        return Response('User already exist!', status=status.HTTP_409_CONFLICT)


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
    http_method_names = ['patch', 'post', 'delete']

    def get_queryset(self):
        queryset = Collection.objects.filter(
            owner__user__id=self.request.user.id)
        return queryset

    def create(self, request):
        post_data = request.data
        user = UserInfo.objects.filter(user__id=request.user.id)[0]
        response = Collection.objects.create(
            owner=user, native_language=post_data['native_language'], learn_language=post_data['learn_language'], name=post_data['name'])
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
