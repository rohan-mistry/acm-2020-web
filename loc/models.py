from django.db import models

class ProblemStatements(models.Model):
    title=models.CharField(max_length=255)
    description=models.TextField()
    soln_type=models.CharField(max_length=255)
    company=models.CharField(max_length=255)
    slug = models.SlugField(max_length=100, unique=True)
    company_logo=models.ImageField(upload_to='images/loc/statements')

    def __str__(self):
        return self.title

    def summary(self):
        return self.description[:100]

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(ProblemStatements, self).save(*args, **kwargs)

class Sponsors(models.Model):
    logo=models.ImageField(upload_to='images/loc/sponsors')
    name=models.CharField(max_length=255)
    slug = models.SlugField(max_length=100, unique=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Sponsor, self).save(*args, **kwargs)
