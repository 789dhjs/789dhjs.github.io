var posts=["2024/12/14/JAVA/","2024/12/16/基础概念与常识/","2024/12/05/我的第一篇博客/","2024/12/15/操作系统/","2024/12/05/测试/","2024/12/17/设计模式/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };