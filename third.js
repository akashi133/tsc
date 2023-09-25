function createBlog() {
    var posts = [];
    var postsContainer = document.getElementById('postsContainer');
    function createPost(title, content) {
        var post = {
            title: title,
            content: content,
        };
        posts.push(post);
        displayPosts();
    }
    function displayPosts() {
        if (postsContainer) {
            postsContainer.innerHTML = '';
            if (posts.length === 0) {
                postsContainer.innerHTML = '<p>Блог пуст.</p>';
            }
            else {
                var ul_1 = document.createElement('ul');
                posts.forEach(function (post, index) {
                    var li = document.createElement('li');
                    li.innerHTML = "\n                      <h2>".concat(post.title, "</h2>\n                      <p>").concat(post.content, "</p>\n                      <hr />\n                  ");
                    ul_1.appendChild(li);
                });
                postsContainer.appendChild(ul_1);
            }
        }
    }
    return {
        posts: posts,
        createPost: createPost,
        displayPosts: displayPosts,
    };
}
var blog = createBlog();
document.addEventListener('DOMContentLoaded', function () {
    var createPostBtn = document.getElementById('createPostBtn');
    if (createPostBtn) {
        createPostBtn.addEventListener('click', function () {
            var title = prompt('Введите заголовок поста:');
            var content = prompt('Введите содержание поста:');
            if (title && content) {
                blog.createPost(title, content);
            }
        });
    }
    blog.displayPosts();
});
