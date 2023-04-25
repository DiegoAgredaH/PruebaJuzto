from django.urls import path, include
from rest_framework import routers
from .views import TareasView

router = routers.DefaultRouter()
router.register(r'tarea', TareasView, 'tarea')

urlpatterns = [
    path("api/", include(router.urls))
]