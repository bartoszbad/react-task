from django.core.mail import EmailMessage
from rest_framework import views, status
from rest_framework.response import Response

from django_react_proj.local_settings import message_subject, message_content


class EmailView(views.APIView):
    def post(self, request):
        try:
            mail_subject = message_subject
            message = message_content
            report_email = EmailMessage(
                mail_subject, message, to=[request.data['email']]
            )
            report_email.send()
            return Response(status=status.HTTP_200_OK)
        except Exception:
            return Response(status=status.HTTP_400_BAD_REQUEST)
