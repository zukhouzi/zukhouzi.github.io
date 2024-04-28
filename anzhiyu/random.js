var posts=["articles/c89c.html","articles/f7f.html","articles/3eeb.html","articles/82cf.html","articles/9cfe.html","articles/2db2.html","articles/ff8a.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };