from django.db import models #새로운 클래스를 만들고 migrate까지 해주었으면 admin.py에 등록하러 가기

# Create your models here.

class Blog(models.Model):
    title = models.CharField(max_length = 200) #charField는 최대글자 제한이 있는 필드임.
    writer = models.CharField(max_length= 100) #장고 필드타입 검색 해보면 다양한 필드타입들이 있음. 필드옵션들 또한 그만큼 많기 때문에 검색 ㄱㄱ
    pub_date = models.DateTimeField()
    body = models.TextField() #models.py 를 수정하였으면 최소의 경우에는 migrations를 만들어주고 그 후에는 migrate로 꼭 적용해주기
    image = models.ImageField(upload_to = "blogapp/", blank = True, null = True,) #upload_to는 업로드할 폴더를 지정해주는것임. #이미지를 안올릴 수 도 있기 때문에 blanck랑 null True를 해줌.
    
    def __str__(self):
        return self.title #title을 보여주게하기 위함
    
    def summary(self):
        return self.body[:100] #body가 100글자 아래로 보이게끔 하는 기능 


