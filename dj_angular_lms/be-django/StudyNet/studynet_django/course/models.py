from django.conf import settings
from django.contrib.auth.models import User
from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField()  # string that can only include characters, numbers, dashes, and underscores for URL
    short_description = models.TextField(blank=True, null=True)  # null = True: can be empty
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):  # method for representing string of an object
        return self.title


class Course(models.Model):
    categories = models.ManyToManyField(Category)
    title = models.CharField(max_length=255, null=False)
    slug = models.SlugField()
    short_description = models.TextField(blank=True, null=True)
    long_description = models.TextField(blank=True, null=True)
    created_at = models.DateField(auto_now_add=True)
    image = models.ImageField(upload_to='uploads', blank=True, null=True)

    def __str__(self):  # method for representing string of an object
        return self.title

    def get_image(self):
        if self.image:
            url = settings.WEBSITE_URL + self.image.url
            return url
        return settings.WEBSITE_URL + "/media/static_files/Placeholder.svg"


class Lesson(models.Model):
    DRAFT = 'draft'
    PUBLISHED = 'published'

    CHOICES_STATUS = (  # nested tuples
        (DRAFT, 'draft'),
        (PUBLISHED, 'Published')
    )

    ARTICLE = 'article'
    QUIZ = 'quiz'

    CHOICES_LESSON_TYPE = (
        (ARTICLE, 'Article'),
        (QUIZ, 'Quiz')
    )

    course = models.ForeignKey(Course, related_name='lessons', on_delete=models.CASCADE)
    title = models.CharField(max_length=255, null=False)
    slug = models.SlugField()
    short_description = models.TextField(blank=True, null=True)
    long_description = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=30, choices=CHOICES_STATUS, default=PUBLISHED)
    lesson_type = models.CharField(max_length=30, choices=CHOICES_LESSON_TYPE, default=ARTICLE)

    def __str__(self):  # method for representing string of an object
        return self.title


class Comment(models.Model):
    course = models.ForeignKey(Course, related_name='comments', on_delete=models.CASCADE)
    lesson = models.ForeignKey(Lesson, related_name='comments', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, related_name='comments', on_delete=models.CASCADE)


