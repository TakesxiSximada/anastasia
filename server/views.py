# -*- coding: utf-8 -*-
import django.http


def ping(request):
    return django.http.HttpResponse('pong')
