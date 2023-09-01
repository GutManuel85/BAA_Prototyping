from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Lesson, Comment, Category
from .serializers import Course, CategoryListSerializer
from .serializers import CourseListSerializer, CourseDetailSerializer, LessonListSerializer


@api_view(['GET'])
def get_courses(request):
    courses = Course.objects.all()
    serializer = CourseListSerializer(courses, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_course(request, slug):
    course = Course.objects.get(slug=slug)
    course_serializer = CourseDetailSerializer(course)
    lesson_serializer = LessonListSerializer(course.lessons.all(), many=True)

    data = {
        'course': course_serializer.data,
        'lessons': lesson_serializer.data
    }

    return Response(data)


@api_view(['GET'])
def get_categories(request):
    categories = Category.objects.all()
    serializer = CategoryListSerializer(categories, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def add_comment(request, course_slug, lesson_slug):
    data = request.data
    name = data.get('name')
    content = data.get('content')

    course = Course.objects.get(slug=course_slug)
    lesson = Lesson.objects.get(slug=lesson_slug)

    comment = Comment.objects.create(course=course, lesson=lesson, name=name, content=content, created_by=request.user)

    return Response({'message': 'The comment was added!'})

