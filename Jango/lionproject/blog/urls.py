from django.urls import path
from .views import *
urlpatterns = [
    path('<str:id>', detail, name="detail"),
    path('new/', new, name="new"),
    path('create/', create, name="create"),
    path('edit/<str:id>', edit, name="edit"),
    path('update/<str:id>', update, name="update"),
    path('delete/<str:id>', delete, name="delete"), #name은 html에서 접근가능하도록 정의한것이다.
]
