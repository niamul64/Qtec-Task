
from django.http import HttpResponse
from django.shortcuts import render, redirect, get_object_or_404

from .models import SearchDate, KewWordsMD


def showKeyWords(request):

    words = KewWordsMD.objects.all()
    dates = SearchDate.objects.all()
    dict = {'words': words, 'dates': dates}
    return render(request, 'keyword/show.html', context=dict)
