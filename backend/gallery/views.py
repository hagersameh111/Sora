from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import InstagramPost

@api_view(["GET"])
def gallery_view(request):

    posts = InstagramPost.objects.all().order_by("-created_at")[:6]

    data = [
        {
            "media_url": post.media_url,
            "caption": post.caption,
            "permalink": post.permalink
        }
        for post in posts
    ]

    return Response(data)

