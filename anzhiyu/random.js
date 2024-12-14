var posts=["2024/12/14/JAVA/","2024/12/05/hello-world/","2024/12/05/我的第一篇博客/","2024/12/05/测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };