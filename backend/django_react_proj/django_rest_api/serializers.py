from rest_framework import serializers


class ReportSerialzier(serializers.Serializer):
    report_name = serializers.CharField(max_length=128, required=False)
    format = serializers.CharField(max_length=16, required=False)
    email = serializers.EmailField()
    schedule = serializers.CharField(required=False)
    date = serializers.DateField(required=False)
    time = serializers.TimeField(required=False)
