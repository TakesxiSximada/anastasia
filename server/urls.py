# -*- coding: utf-8 -*-
from django.conf import settings
from django.conf.urls import url, static
from django.contrib import admin

import sximada.djangoutils.debugserve

urlpatterns = [
    url(r'^admin/', admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += static.static(
        '/', view=sximada.djangoutils.debugserve.serve,
        document_root=settings.FRONTEND_DIR, show_indexes=True,
        directory_index_allows=['index.html'],
        )
