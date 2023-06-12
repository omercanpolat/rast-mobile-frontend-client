1. Projeden ne anladığınızı ve hangi adımları izleyerek ilerlediğinizi bir doküman olarak yazıp proje içerisine ekleyiniz?

a. Öncelikle Backend kısmını Django ile yazdım ve Github Repoma yükledim. "main" adlı projeme "link" adlı app ekleyerek gerekli models.py, serializers.py vs. dosyalarımı üretip, kullanacağım "end point"ler için urls.py'da gerekli düzenlemeleri yaptım. 

b. Devamında frontend kısmı için gönderilen Figma dizaynına uygun olarak gerekli düzenlemeleri React üzerinden yaptım. Backend ile bağlantılarını sağladım ve çalıştırdım. CRUD işlemeleri için Auth.Token ve kullanıcı şifresi gereksinimleri istenmediği için o bölümleri backend ve frontend tarafında yapmadım/ama yapılabilir.

c.  Projede 3 sütündan oluşan bir tablo verilmiş. Kullanıcının her satıra gerekli bilgileri girebileceği, yeni kayıt ekleyebileceği, listeleme, filtreleme, sayfalama ve arama yapabileceği bir DataGrid web tasarımı yapılması istenmiş.

2. Uygulamanın çalıştıralbilmesi için gerekli yönergeler şöyledir:
 
 A. Backend kısmı için:
      1. VsCode (IDE) içerisinde yeni boş bir klasör açılarak, repodan clone ile "backend api" lokal bilgisayara indirilmelidir. Bunun için açılan terminalde aşağıdaki komutlar yazılarak, çalıştırılır.

            $ git clone https://github.com/omercanpolat/rast-mobile-backend_api.git
            $ cd rast-mobile-backend_api

      2. Aynı klasörde backend server çalıştırmak için sırasıyla:

            $ python -m venv env
            $ source env/Scripts/activate 
            $ pip install -r requirements.txt
            $ python manage.py makemigrations
            $ python manage.py migrate
            $ python manage.py runserver
  
  B. Frontend kısmının end pointlerden gelecek verilerle birlikte çalışması için backend server aynı lokal bilgisayarda, aynı anda çalışıyor olmalıdır:

      1. VsCode (IDE) içerisine yeni boş bir klasör açılarak, repodan clone ile "frontend client" lokal bilgisayara indirilmelidir. Bunun için açılan terminalde aşağıdaki komutlar yazılarak, çalıştırılır.

          $ git clone https://github.com/omercanpolat/rast-mobile-frontend-client.git
          $ cd rast-mobile-frontend-client

      2. Aynı klasörde frontend kısmını çalıştırmak için sırasıyla:

            $ yarn install
            $ yarn start

       3. Web sitesi çalışınca açılan ilk olarak veriler boş gelecektir. Arayüzde "Yeni Hesap Ekle" butonuna tıklayarak açılan popup menüye gerekli alanları doldurarak kaydederiz. Kayıt eklendikçe backend tarafına kayıtlar lokalde devamlı kalacak şekilde kaydedilecektir.