from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializer import TareasSerializer
from .models import Tareas

class TareasView(viewsets.ModelViewSet):
    serializer_class = TareasSerializer
    queryset = Tareas.objects.all()
    permission_classes = [permissions.AllowAny]

# Create your views here.
