import requests
from django.core.management.base import BaseCommand
from django.conf import settings
from gallery.models import InstagramPost, InstagramToken


class Command(BaseCommand):

    def handle(self, *args, **kwargs):

        # Retrieve the stored access token from the database
        token_obj = InstagramToken.objects.first()
        token = token_obj.access_token

        # Instagram Graph API endpoint to fetch media from the account
        url = f"https://graph.facebook.com/v19.0/{settings.INSTAGRAM_BUSINESS_ID}/media"

        # Fields we want to retrieve from Instagram
        params = {
            "fields": "id,caption,media_url,permalink,media_type",
            "access_token": token
        }

        # Send request to Instagram API
        response = requests.get(url, params=params)

        # Convert response to JSON
        data = response.json()

        # Extract media list
        posts = data.get("data", [])

        # This list will store the IDs of current Instagram images
        instagram_ids = []

        # Loop through all returned posts
        for post in posts:

            # Skip anything that is not an image (e.g., reels or videos)
            if post.get("media_type") != "IMAGE":
                continue

            # Save the post ID to track existing posts
            instagram_ids.append(post["id"])

            # Create a new record or update existing one in the database
            InstagramPost.objects.update_or_create(
                post_id=post["id"],
                defaults={
                    "media_url": post.get("media_url"),
                    "caption": post.get("caption"),
                    "permalink": post.get("permalink"),
                }
            )

        # Remove any images that were deleted from Instagram
        InstagramPost.objects.exclude(post_id__in=instagram_ids).delete()

        message = "Instagram posts synced successfully"

        # Print success message in terminal
        self.stdout.write(self.style.SUCCESS(message))

        # Save the operation in the log file
        with open("logs/instagram.log", "a") as log:
            log.write(message + "\n")