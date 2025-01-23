var posts=["2025/01/16/cloudflare R2/","2025/01/16/tiktok android/","2025/01/16/uspto00/","2025/01/16/usview/","2025/01/08/openclash/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };