from django.db import models

class Event(models.Model):
    image=models.ImageField(upload_to='images/events')
    title=models.CharField(max_length=255)
    description=models.TextField()
    slug = models.SlugField(max_length=100, unique=True)
    date=models.DateTimeField()

    def __str__(self):
        return self.title

    def summary(self):
        return self.description[:100]

    def pub_date_pretty(self):
        return self.date.strftime('%b %e %Y')

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Event, self).save(*args, **kwargs)
