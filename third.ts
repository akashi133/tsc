// Определение типов данных

// Тип Post описывает объект поста с двумя полями: title (заголовок поста) и content (содержание поста).
type Post = {
    title: string;
    content: string;
};

// Тип Blog описывает объект блога с полями:
// - posts: массив постов,
// - createPost: функция для создания нового поста,
// - displayPosts: функция для отображения постов.
type Blog = {
    posts: Post[];
    createPost: (title: string, content: string) => void;
    displayPosts: () => void;
};

// Функция createBlog создает и возвращает объект блога.
function createBlog(): Blog {
    // Инициализация массива постов.
    const posts: Post[] = [];
    // Получаем контейнер на веб-странице, в котором будут отображаться посты.
    const postsContainer = document.getElementById('postsContainer');

    // Функция createPost создает новый пост и добавляет его в массив постов.
    function createPost(title: string, content: string) {
        const post: Post = {
            title,
            content,
        };
        // Добавляем созданный пост в массив постов.
        posts.push(post);
        // После создания поста вызываем функцию displayPosts для обновления отображения.
        displayPosts();
    }

    // Функция displayPosts отображает посты на веб-странице.
    function displayPosts() {
        if (postsContainer) {
            // Очищаем содержимое контейнера (удаляем предыдущие посты).
            postsContainer.innerHTML = '';
            if (posts.length === 0) {
                // Если массив постов пуст, выводим сообщение о том, что блог пуст.
                postsContainer.innerHTML = '<p>Блог пуст.</p>';
            } else {
                // Создаем список (ul) для отображения постов.
                const ul = document.createElement('ul');
                // Для каждого поста в массиве создаем элемент списка (li) с заголовком и содержанием.
                posts.forEach((post, index) => {
                    const li = document.createElement('li');
                    li.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <hr />
          `;
                    // Добавляем элемент списка в список (ul).
                    ul.appendChild(li);
                });
                // Добавляем список (ul) в контейнер для отображения.
                postsContainer.appendChild(ul);
            }
        }
    }

    // Возвращаем объект блога, который содержит массив постов и две функции.
    return {
        posts,
        createPost,
        displayPosts,
    };
}

// Создаем объект блога с помощью функции createBlog.
const blog = createBlog();

// Добавляем обработчик события DOMContentLoaded, который выполняется при полной загрузке документа.
document.addEventListener('DOMContentLoaded', () => {
    // Получаем кнопку "createPostBtn".
    const createPostBtn = document.getElementById('createPostBtn');
    if (createPostBtn) {
        // Добавляем обработчик события на клик по кнопке.
        createPostBtn.addEventListener('click', () => {
            // Запрашиваем у пользователя заголовок и содержание нового поста.
            const title = prompt('Введите заголовок поста:');
            const content = prompt('Введите содержание поста:');
            if (title && content) {
                // Если пользователь ввел и заголовок, и содержание, создаем новый пост.
                blog.createPost(title, content);
            }
        });
    }

    // При загрузке страницы сразу отображаем существующие посты.
    blog.displayPosts();
});
