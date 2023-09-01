from django.urls import path

from . import views

urlpatterns = [
    path('', views.get_courses),
    path('categories/', views.get_categories),
    path('<slug:slug>/', views.get_course),
    path('<slug:course_slug>/<slug:lesson_slug>/', views.add_comment)
]
