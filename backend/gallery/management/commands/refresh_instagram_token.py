import requests
from django.core.management.base import BaseCommand
from django.conf import settings
from gallery.models import InstagramToken


class Command(BaseCommand):

    def handle(self, *args, **kwargs):

        # Get the current access token stored in the database
        token_obj = InstagramToken.objects.first()

        # Instagram Graph API endpoint used to exchange the token
        # This endpoint returns a new long-lived token
        url = "https://graph.facebook.com/v19.0/oauth/access_token"

        # Parameters required for token exchange
        params = {
            "grant_type": "fb_exchange_token",  # tells Instagram we want to exchange the token
            "client_id": settings.INSTAGRAM_APP_ID,  # Meta App ID
            "client_secret": settings.INSTAGRAM_APP_SECRET,  # Meta App Secret
            "fb_exchange_token": token_obj.access_token  # current stored token
        }

        # Send request to Instagram API
        response = requests.get(url, params=params)

        # Convert response to JSON
        data = response.json()

        # Extract the new token from the response
        new_token = data.get("access_token")

        # If token refresh succeeded
        if new_token:
            # Update the token in the database
            token_obj.access_token = new_token
            token_obj.save()

            message = "Token refreshed successfully"

        else:
            # If something failed, log the API response
            message = f"Token refresh failed: {data}"

        # Print result in terminal
        print(message)

        # Write the result into a log file
        with open("logs/instagram.log", "a") as log:
            log.write(message + "\n")