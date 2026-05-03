
const commentForm = document.getElementById('commentForm');
const commentInput = document.getElementById('commentInput');
const commentsList = document.getElementById('commentsList');

commentForm.addEventListener('submit', function (event) {

    event.preventDefault();

    const commentText = commentInput.value.trim();

    if (commentText === "") return;

    agregarComentario(commentText);

    commentInput.value = "";
});


function agregarComentario(texto) {

    const emptyMsg = document.querySelector('.empty-msg');
    if (emptyMsg) {
        emptyMsg.remove();
    }

    const ahora = new Date();
    const fechaHora = ahora.toLocaleString();

    const commentCard = document.createElement('div');
    commentCard.classList.add('comment-card');

    commentCard.innerHTML = `
        <p class="comment-text">${texto}</p>
        <div class="comment-footer">
            <span class="comment-date">Publicado el: ${fechaHora}</span>
            <button class="delete-btn">Eliminar</button>
        </div>
    `;

    const deleteBtn = commentCard.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function () {
        commentCard.remove();

        if (commentsList.children.length === 0) {
            commentsList.innerHTML = '<p class="empty-msg">No hay comentarios aún. ¡Sé el primero en comentar!</p>';
        }
    });

    commentsList.prepend(commentCard);
}
