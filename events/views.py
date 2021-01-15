from django.shortcuts import render

def home(request):
    return render(request,'events/home.html')

def events(request):
    return render(request, 'events/events.html')

def ppt(request):
    return render(request, 'events/ppt.html')
