from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import InternViewSet, EducationViewSet, TrainingViewSet, WorkExperienceViewSet

router = DefaultRouter()
router.register(r'interns', InternViewSet)
router.register(r'educations', EducationViewSet)
router.register(r'trainings', TrainingViewSet)
router.register(r'work-experiences', WorkExperienceViewSet)

urlpatterns = [

    path('', include(router.urls)),
]