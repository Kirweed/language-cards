from django.contrib import admin
from .models import UserInfo, Collection, LanguageCard

# Register your models here.

admin.site.register(UserInfo)
admin.site.register(Collection)
admin.site.register(LanguageCard)
