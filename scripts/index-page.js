const comment = [
    {
        name: "Victor Pinto",
        timestamp: "11/02/2023",
        message: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
        name: "Christina Cabrera",
        timestamp: "10/28/2023",
        message: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        name: "Isaac Tadesse",
        timestamp: "10/20/2023",
        message: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    },
]

const commentContainer = document.querySelector(".comment-container");
const commentForm = document.getElementById("comment-form");
const nameInput = document.getElementById("name");
const commentTextInput = document.getElementById("comment-text");

const placeholderImagePath = "path_to_placeholder_image";


function displayComment(comment) {
  const commentElement = document.createElement("div");
  commentElement.classList.add("comment");

  const commentAvatarWrapper = document.createElement("div");
  commentAvatarWrapper.classList.add("comment-avatarWrapper");
 
  const commentAvatar = document.createElement("div");
  commentAvatar.classList.add("comment-avatar");
  commentAvatarWrapper.appendChild(commentAvatar);

  const commentWrapper= document.createElement("div");
  commentWrapper.classList.add("comment-wrapper");

  const commentWrapperTop = document.createElement("div");
  commentWrapperTop.classList.add("comment-wrapper__top");
  

  const commentName = document.createElement("span");
  commentName.classList.add("comment-name");
  commentName.textContent = comment.name;
  commentWrapperTop.appendChild(commentName);


  const commentTimestamp = document.createElement("span");
  commentTimestamp.classList.add("comment-timestamp");
  commentTimestamp.textContent = comment.timestamp;
  commentWrapperTop.appendChild(commentTimestamp);
  commentWrapper.appendChild(commentWrapperTop);

  const commentText = document.createElement("p");
  commentText.classList.add("comment-text");
  commentText.textContent = comment.message;
  commentWrapper.appendChild(commentText);

 
  commentElement.appendChild(commentAvatarWrapper);
  commentElement.appendChild(commentWrapper);

  commentContainer.appendChild(commentElement);
  commentElement.classList.add("comment__form--items");
}

function clearCommentForm() {
  nameInput.value = "";
  commentTextInput.value = "";
}

commentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = nameInput.value;
  const message = commentTextInput.value;

  if (name && message) {
    const timestamp = new Date().toLocaleDateString();
    const newComment = {
      name,
      timestamp,
      message,
    };

    comment.push(newComment);
    displayComment(newComment);
    clearCommentForm();
  }
});

comment.forEach(displayComment);
