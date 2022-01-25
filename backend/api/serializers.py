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


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'password', 'email']



class UserInfoSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False)

    class Meta:
        model = UserInfo
        fields = ['user', 'points']


class CollectionsSerializer(serializers.ModelSerializer):
    owner = UserInfoSerializer(many=False)

    class Meta:
        model = Collection
        fields = ['owner', 'native_language', 'learn_language', 'name']


class LanguageCardsSerializer(serializers.ModelSerializer):
    collection = CollectionsSerializer(many=False)

    class Meta:
        model = LanguageCard
        fields = ['collection', 'native_word', 'learn_word']
