from django.contrib import admin
from .models import Blog

# Register your models here.

admin.site.register(Blog) #models에서 Blog를 import 해주고 해당 클래스를 등록하려면 명시해줘야함.