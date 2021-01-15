from django.shortcuts import render

def loc(request):
    return render(request, 'loc/loc.html')
