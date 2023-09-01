from rest_framework import serializers

from .models import Course, Lesson, Category


class CategoryListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'title', 'slug', 'short_description')


class CourseListSerializer(serializers.ModelSerializer):
    categories = CategoryListSerializer(many=True)

    class Meta:
        model = Course
        fields = ('id', 'title', 'slug', 'short_description', 'get_image', 'categories')


class CourseDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('id', 'title', 'slug', 'short_description', 'long_description')


class LessonListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ('id', 'title', 'slug', 'short_description', 'long_description')


