var likeCount = 0;

function likePost() {
    likeCount++;
    document.getElementById("likeCount").innerText = likeCount;
}

function submitComment(event) {
    event.preventDefault();
    
    var comment = document.getElementById("comment").value;
    if (comment.trim() !== "") {
        var commentsList = document.getElementById("commentsList");
        var commentItem = document.createElement("div");
        commentItem.classList.add("comment-item");
        commentItem.innerHTML = "<p>" + comment + "</p>";
        commentsList.appendChild(commentItem);

        
        document.getElementById("comment").value = "";
    }
}

function toggleDayNight() {
    var body = document.body;
    var header = document.querySelector('header');
    var article = document.querySelector('article');

    body.classList.toggle('day-mode');
    header.classList.toggle('day-mode');
    article.classList.toggle('day-mode');

    if (body.classList.contains('day-mode')) {
        body.classList.remove('night-mode');
        header.classList.remove('night-mode');
        article.classList.remove('night-mode');
    } else {
        body.classList.add('night-mode');
        header.classList.add('night-mode');
        article.classList.add('night-mode');
    }
}
