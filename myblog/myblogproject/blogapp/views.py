from django.shortcuts import get_object_or_404, render, redirect
from django.utils import timezone
from django.core.paginator import Paginator
from .models import Blog
from .forms import BlogForm
# Create your views here.

def home(request):
    # blogs = Blog.objects.all()
    blogs=Blog.objects.order_by('-pub_date') #-pub_date는 역순으로 정렬되기 떄문에 최신글들이 위로 정렬됨.
    search = request.GET.get('search')#내가 쓴 글 검색기능
    if search == 'true':
        author = request.GET.get('writer') 
        # blogs = Blog.objects.filter(writer=author) #writer가 자기 자신인 글만 보이게 해줌
        blogs = Blog.objects.exclude(writer=author).order_by('-pub_date') #writer가 자기 자신이 아닌 글만 보이게끔 해줌
        return render(request, 'home.html', {'blogs':blogs})
    paginator = Paginator(blogs, 3)
    page = request.GET.get('page')
    blogs = paginator.get_page(page)
    return render(request, 'home.html', {"blogs":blogs})

def detail(request, id):
    detail = get_object_or_404(Blog, pk=id) #Blog에서 pk값으로 id를 가져오거나 error404를 띄운다.
    return render(request, "detail.html", {'detail':detail})

def new(request):
    form = BlogForm()
    return render(request, "new.html",{'form':form})

def create(request):
    form = BlogForm(request.POST, request.FILES)
    if form.is_valid():
        new_blog = form.save(commit=False) #pub_date가 빠졌으므로 commit=False를 해주어서 임시저장만해준다.
        new_blog.pub_date = timezone.now()
        new_blog.save()
        return redirect('detail', new_blog.id)
    return render('home')
    # new_blog = Blog()
    # new_blog.title = request.POST['title']
    # new_blog.writer = request.POST['writer']
    # new_blog.body = request.POST['body']
    # new_blog.pub_date = timezone.now() #from django.utils import timezone 해줘야함
    # new_blog.image = request.FILES['image']
    # new_blog.save()
    # return redirect('detail', new_blog.id)#redirect도 import해줘야함

def edit(request, id):
    edit_blog = Blog.objects.get(id=id)
    return render(request, 'edit.html', {'edit': edit_blog})

def update(request, id):
    update_blog = Blog.objects.get(id=id) #db에서 불러와서 덮어씌우는 과정
    update_blog.title = request.POST['title']
    update_blog.writer = request.POST['writer']
    update_blog.body = request.POST['body']
    update_blog.pub_date = timezone.now()
    update_blog.save()
    return redirect('detail', update_blog.id)

def delete(request,id):
    delete_blog = Blog.objects.get(id=id)
    delete_blog.delete()
    return redirect('home')
