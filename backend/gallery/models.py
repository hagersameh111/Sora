from django.db import models


class InstagramPost(models.Model):
    post_id = models.CharField(max_length=100, unique=True)
    media_url = models.URLField()
    caption = models.TextField(blank=True, null=True)
    permalink = models.URLField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.post_id
    
class InstagramToken(models.Model):
    access_token = models.TextField()
    updated_at = models.DateTimeField(auto_now=True)