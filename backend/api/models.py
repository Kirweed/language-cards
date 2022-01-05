from django.db import models
from django.contrib.auth.models import User


class UserInfo(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    points = models.PositiveBigIntegerField(blank=False, default=0)


class Collection(models.Model):
    owner = models.ForeignKey(UserInfo, on_delete=models.CASCADE, related_name='collection')
    native_language = models.CharField(blank=False, default='Polski', max_length=35)
    learn_language = models.CharField(blank=False, default='English', max_length=35)
    name = models.CharField(blank=False, default='Animals', max_length=50)


class LanguageCard(models.Model):
    collection = models.ForeignKey(Collection, on_delete=models.CASCADE, related_name='language_card')
    native_world = models.CharField(blank=False, default='słoń', max_length=50)
    learn_world = models.CharField(blank=False, default='elephant', max_length=50)
