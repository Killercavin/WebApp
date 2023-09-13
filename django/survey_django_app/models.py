from django.db import models

# Create your models here.

class Topic(models.Model):
    """ A topic that the user is learning about. """
    text = models.CharField(max_length=200)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        """ Return a string presentation of the model. """
        return self.text
    
    
class Entry(models.Model):
    """ Somethin specific learned about a topic"""
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    text = models.TextField()
    date_added = models.DateTimeField(auto_now_add=True)


class Meta:
    verborse_name_plural = 'entries'

    def __str__(self):
        """ Return a simple string representing the entry"""
        return f"{str.text[:50]}..."


