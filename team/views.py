from django.shortcuts import render,redirect , get_object_or_404
from .models import Core_committee

def teams(request):
    comittee=Core_committee.objects
    return render(request, 'teams/team.html',{'committee':comittee})
