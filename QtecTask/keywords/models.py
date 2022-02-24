from django.db import models

# Create your models here.
from django.utils import timezone


class KewWordsMD(models.Model):

    key_word = models.CharField(max_length=100)
    last_search_by = models.CharField(max_length=100)
    last_search_date = models.DateField()
    count = models.IntegerField(default=0)
    result_showed = models.CharField(max_length=200)

    def __str__(self):  # function to_string
        return self.key_word


class SearchDate(models.Model):

    key_word = models.ForeignKey(
        KewWordsMD, related_name='KewWords_tb', on_delete=models.CASCADE)
    user_name = models.CharField(max_length=100)
    search_date = models.DateField()

    def __str__(self):  # function to_string
        return self.user_name
