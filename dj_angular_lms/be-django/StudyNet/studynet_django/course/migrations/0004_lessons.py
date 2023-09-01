# Generated by Django 4.1.7 on 2023-03-16 15:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0003_course_title'),
    ]

    operations = [
        migrations.CreateModel(
            name='Lessons',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('slug', models.SlugField()),
                ('short_description', models.TextField(blank=True, null=True)),
                ('long_description', models.TextField(blank=True, null=True)),
                ('status', models.CharField(choices=[('draft', 'draft'), ('published', 'Published')], default='published', max_length=30)),
                ('lesson_type', models.CharField(choices=[('article', 'Article'), ('quiz', 'Quiz')], default='article', max_length=30)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='lessons', to='course.course')),
            ],
        ),
    ]