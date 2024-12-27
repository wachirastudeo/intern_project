from rest_framework import serializers
from .models import Intern, Education, Training, WorkExperience


class InternSerializer(serializers.ModelSerializer):
    class Meta:
        model = Intern
        fields = '__all__'

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

class TrainingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Training
        fields = '__all__'

class WorkExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkExperience
        fields = '__all__'