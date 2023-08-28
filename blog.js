// blog.js
fetch('blog-data.json')
    .then(response => response.json())
    .then(data => {
        const blogContainer = document.querySelector('.blog-container');
        data.forEach(blog => {
            const blogCard = document.createElement('div');
            blogCard.className = 'blog-card';
            blogCard.innerHTML = `
                <h3>${blog.title}</h3>
                <p>${blog.date}</p>
                <p>${blog.content}</p>
            `;
            blogContainer.appendChild(blogCard);
        });
    });
