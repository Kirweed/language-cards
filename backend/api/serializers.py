from rest_framework import serializers
from .models import UserInfo, Collection, LanguageCard
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        models = User
        fields = ['username',]


class UserInfoSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False)

    class Meta:
        models = UserInfo
        fields = ['user', 'points']


class CollectionsSerializer(serializers.ModelSerializer):
    owner = UserInfoSerializer(many=False)

    class Meta:
        models = Collection
        fields = ['owner', 'native_language', 'learn_language', 'name']


class LanguageCardsSerializer(serializers.ModelSerializer):
    collection = CollectionsSerializer(many=False)

    class Meta:
        models = LanguageCard
        fields = ['collection', 'native_word', 'learn_word']
