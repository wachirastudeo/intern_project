from django.shortcuts import render
from rest_framework import viewsets, generics, permissions
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Intern, Education, Training, WorkExperience, User
from .serializers import InternSerializer, EducationSerializer, TrainingSerializer, WorkExperienceSerializer, RegisterSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.decorators import permission_classes, authentication_classes
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

# Create your views here.
class InternViewSet(viewsets.ModelViewSet):
    queryset = Intern.objects.all()
    serializer_class = InternSerializer
    permission_classes = (permissions.AllowAny,) # endpoint นี้จะไม่ต้องมีการ authenticate

class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
    # permission_classes = (permissions.IsAuthenticated) # endpoint นี้จะต้องมีการ authenticate

class TrainingViewSet(viewsets.ModelViewSet):
    queryset = Training.objects.all()
    serializer_class = TrainingSerializer

class WorkExperienceViewSet(viewsets.ModelViewSet):
    queryset = WorkExperience.objects.all()
    serializer_class = WorkExperienceSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = RegisterSerializer

class LogoutView(APIView):
    permission_classes = [AllowAny]
    
    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            required=['refresh'],
            properties={
                'refresh': openapi.Schema(
                    type=openapi.TYPE_STRING,
                    description='Refresh token ที่ได้จากการ login'
                )
            }
        ),
        responses={
            204: 'Logout successful',
            400: 'Bad request - Invalid refresh token'
        },
        operation_description="Logout และเพิ่ม refresh token เข้า blacklist"
    )
    def post(self, request, *args, **kwargs):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            print(f"Logout error: {str(e)}")
            return Response(
                {"error": str(e)},
                status=status.HTTP_400_BAD_REQUEST
            )