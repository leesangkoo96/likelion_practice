from django.shortcuts import render, redirect, get_object_or_404 #get_object_or_404 : 찾을 수 없을경우 404를 띄어준다.
from django.utils import timezone # pub_date를 표현하기위하여
from .models import Blog
from .forms import BlogForm


# Create your views here.

def home(request):
    blogs = Blog.objects.all()
    return render(request, 'home.html',{'blogs':blogs})

def detail(request,id):
    blog = get_object_or_404(Blog, pk = id)
    return render(request, 'detail.html',{'blog': blog})

def new(request):
    form = BlogForm()
    return render(request, 'new.html', {'form':form})

def create(request):
    form = BlogForm(request.POST, request.FILES)
    if form.is_valid():
        new_blog = form.save(commit=False)
        new_blog.pub_date = timezone.now()
        new_blog.save()
        return redirect('detail', new_blog.id)#원래 있던 페이지로 돌아가야하기 때문에, pk가 id이기 떄문에 인자로 new_blog.id를 해줌
    return redirect('home') 
    # Blog.title = request.POST['title']
    # Blog.writer = request.POST['writer']
    # Blog.body = request.POST['body']
    # Blog.pub_date = timezone.now()
    # Blog.save() # 객체를 만들어서 사용해줘야하기 때문에 이 방법은 X


def edit(request, id):
    edit_blog = Blog.objects.get(id=id)
    return render(request, 'edit.html', {'blog':edit_blog})
    
   
def update(request, id):
    update_blog = Blog.objects.get(id = id)
    update_blog.title = request.POST['title'] 
    update_blog.writer = request.POST['writer']
    update_blog.body = request.POST['body']
    update_blog.pub_date = timezone.now()
    update_blog.save()#안하면 DB에 적용이 안됨
    return redirect('detail', update_blog.id)

def delete(request, id):
    delete_blog = Blog.objects.get(id = id)
    delete_blog.delete()
    return redirect('home')