# Setup

## Project URL:
https://gitlab.enterpriselab.ch/baa_manuelgut/prototyping/django_vue_lms.git


## Django

### Open a CMD

### Install virtual environment, create and activate
mkdir django_vue_lms
cd django_vue_lms
mkdir StudyNet
cd StudyNet
pip install virtualenv
virtualenv virt_env
virt_env\Scripts\activate.bat

### Install Django
pip install django

### Install django-restframework
pip install django-restframework

### Install django-cors-headers
pip install django-cors-headers

### Install djoser
pip install djoser

### Create django project
django-admin startproject studynet_django

### Configure the project

### Add Djoser to the urls

### Initialize sqlite3 database
cd studynet_django
python manage.py makemigrations
python manage.py migrate


## Vue 

### Open a new CMD and go to directory StudyNet

### Install Vue-CLI
npm install -g @vue/cli

### Create vue project
vue create studynet_vue
 
### Select Manually select features and select those: Choose Vue version, Babel, Router, Vuex, CSS Pre-processors, Unit Testing

### Choose version 3.x

### Use history mode for router: Yes

### Pick a CSS pre-processor: Sass/SCSS (with dart-sass)

### Pick a unit testing solution: Jest

### Where do you prefer placing config for Babel, ESLint, etc.: In dedicated config files

### Save as preset: No

### Go to studynet_vue
cd studynet_vue

### Install Bulma-CSS-Framework
npm install bulma
npm install bulma-toast

### Install Axios for handling AJAX
npm install axios

### Set up the libraries

## Run the servers

### In CMD for django:
python manage.py runserver

### In CMD for vue:
npm run serve
