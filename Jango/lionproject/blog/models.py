from django.db import models

class Blog(models.Model):      #import한 models의 ModeL을 상속받음

        title = models.CharField(max_length=200) #modles라는 클래스의 CharField라는 필드타입을 사용 -> 필드타입의 종류는 다양하기 때문에 필요한 상황에 맞춰 검색해서 사용하는것이 유용
        writer = models.CharField(max_length=100) #()안에 있는 필드옵션 또한 종류가 많기 때문에 검색하여 필요한것들을 찾아 사용
        pub_date = models.DateTimeField() #속성은 안줌 
        body = models.TextField() #TextField는 CharField와 달리 글자수에 대한 제한이 없음 -> 사용자의 편의를 위해 사용
        image = models.ImageField(upload_to = "blog/", blank = True, null= True) #테이블에 빈 값이 있게하기 위하여 blank = True, 와 null=True를 해준다.
        #기존에 있던 모델의 변경사항이 생긴다면 기존에 있던 데이터들을 삭제하고 넘어가는게 편하다.

        
#models.py에 클래스를 하나 만들었다고 해서 table이 바로 생성되지 않는다

    #이 클래스를 만듦으로서 테이블을 만들것이라는 명령어를 작성해주어야한다. => python manage.py makemigrations
            # makemigrate -> 앱 내의 migration 폴더를 만들어서 models.py의 변경사항을 저장

    # 그 다음 python manage.py migrate
            # migrate -> Migration폴더를 실행시켜 데이터베이스에 적용

    #id columns 값은 정의 하지 않는 이유
            # 상속받은 Model에 이미 id값이 포함되어 있기 떄문

        def __str__(self):
                return self.title   #작성한 title이 글의 제목이 되도록 하는 함수

        def summary(self):
                return self.body[:100]

