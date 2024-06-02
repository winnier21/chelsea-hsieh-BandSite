import runApi from "./band-site-api.js";

async function newGetComments (){
  try{
    const newGet = await runApi.getComments();
    console.log(newGet);
    renderAllComments(newGet);
  } catch (error){
    console.log(error);
  
  }
}

newGetComments();


const commentContainer = document.querySelector(".comment-container");
const commentForm = document.getElementById("comment-form");
const nameInput = document.getElementById("name");
const commentTextInput = document.getElementById("comment-text");

const commentList = document.createElement("div");
function renderAllComments(comment) {
  commentList.innerHTML = "";
  comment.forEach(displayComment);
}

function displayComment(comment) {
  const commentElement = document.createElement("div");
  commentElement.classList.add("comment");

  const commentAvatarWrapper = document.createElement("div");
  commentAvatarWrapper.classList.add("comment-avatarWrapper");

  const commentAvatar = document.createElement("div");
  commentAvatar.classList.add("comment-avatar");
  commentAvatarWrapper.appendChild(commentAvatar);

  const commentWrapper = document.createElement("div");
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
  commentText.textContent = comment.comment;
  commentWrapper.appendChild(commentText);

  commentElement.appendChild(commentAvatarWrapper);
  commentElement.appendChild(commentWrapper);

  commentList.appendChild(commentElement);
  commentContainer.appendChild(commentList);

  commentElement.classList.add("comment__form--items");
}

function clearCommentForm() {
  nameInput.value = "";
  commentTextInput.value = "";
}

commentForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  const name = nameInput.value;
  const comment = commentTextInput.value;
try{
  await runApi.postComments(name,comment);
  clearCommentForm();
  newGetComments();
} catch(error){
  console.error(error);
}
});
