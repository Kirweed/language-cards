from django.db import models
from django.contrib.auth.models import User


class UserInfo(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user_info')
    points = models.PositiveBigIntegerField(blank=False, default=0)

    def __str__(self):
        return f"{self.user.username} ({self.points})"


class Collection(models.Model):
    owner = models.ForeignKey(UserInfo, on_delete=models.CASCADE, related_name='collection')
    native_language = models.CharField(blank=False, default='Polski', max_length=35)
    learn_language = models.CharField(blank=False, default='English', max_length=35)
    name = models.CharField(blank=False, default='Animals', max_length=50)

    def __str__(self):
        return f"{self.owner.user.username}, {self.name}"


class LanguageCard(models.Model):
    collection = models.ForeignKey(Collection, on_delete=models.CASCADE, related_name='language_card')
    native_word = models.CharField(blank=False, default='słoń', max_length=50)
    learn_word = models.CharField(blank=False, default='elephant', max_length=50)

    def __str__(self):
        return f"{self.collection}, {self.learn_word}"
