
from django.http import HttpResponse
from django.shortcuts import render, redirect, get_object_or_404

from .models import SearchDate, KewWordsMD


def showKeyWords(request):

    words = KewWordsMD.objects.all()
    dates = SearchDate.objects.all()

    users = []
    for i in words:
        users.append(i.last_search_by)
    user = set(users)

    dict = {'words': words, 'dates': dates, 'user': user}
    return render(request, 'keyword/show.html', context=dict)
