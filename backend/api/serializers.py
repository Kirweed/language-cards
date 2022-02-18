from rest_framework import serializers
from .models import UserInfo, Collection, LanguageCard
from django.contrib.auth.models import User

class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data['email'],
        )
        return user

    class Meta:
        model = User
        fields = ['username', 'password', 'email']


class LanguageCardsSerializer(serializers.ModelSerializer):
    class Meta:
        model = LanguageCard
        fields = ['native_word', 'learn_word']


class CollectionsSerializer(serializers.ModelSerializer):
    language_card = LanguageCardsSerializer(many=True)

    class Meta:
        model = Collection
        fields = ['id', 'native_language', 'learn_language', 'name', 'language_card']


class UserInfoSerializer(serializers.ModelSerializer):
    collection = CollectionsSerializer(many=True)  

    class Meta:
        model = UserInfo
        fields = ['points', 'collection']


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    user_info = UserInfoSerializer(many=False)

    class Meta:
        model = User
        fields = ['username', 'password', 'email', 'user_info']


class CollectionManagingSerializer(serializers.ModelSerializer):
    language_card = LanguageCardsSerializer(many=True)

    class Meta:
        model = Collection
        fields = ['id', 'native_language', 'learn_language', 'name', 'language_card', 'owner']
        depth = 2
