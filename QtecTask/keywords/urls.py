from django.urls import path
from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static
from . import views

app_name = 'keywords'

urlpatterns = [
    path('', views.showKeyWords, name='show'),
]
