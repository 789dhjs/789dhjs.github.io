var posts=["2024/12/05/hello-world/","2024/12/14/JAVA/","2024/12/05/我的第一篇博客/","2024/12/05/测试/","2024/12/15/操作系统/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };