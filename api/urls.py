from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from .views import InternViewSet, EducationViewSet, TrainingViewSet, WorkExperienceViewSet, RegisterView, LogoutView

router = DefaultRouter()
router.register(r'interns', InternViewSet)
router.register(r'educations', EducationViewSet)
router.register(r'trainings', TrainingViewSet)
router.register(r'work-experiences', WorkExperienceViewSet)

urlpatterns = [
    path('auth/register/', RegisterView.as_view(), name='auth_register'),
    path('auth/login/', TokenObtainPairView.as_view(), name='auth_login'),
    path('auth/refresh/', TokenRefreshView.as_view(), name='auth_refresh'),
    path('auth/logout/', LogoutView.as_view(), name='auth_logout'),
    path('', include(router.urls)),
]