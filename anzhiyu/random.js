var posts=["articles/c89c.html","articles/f7f.html","articles/3eeb.html","articles/82cf.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };