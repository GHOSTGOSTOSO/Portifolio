import { storage } from "./firebase.js";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

window.uploadVideo = function () {
  const file = document.getElementById("videoInput").files[0];
  if (!file) return alert("Seleciona o vídeo, animal.");

  const storageRef = ref(storage, "videos/" + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on("state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      document.getElementById("progress").value = progress;
    },
    (error) => alert("Erro no upload"),
    () => loadVideos()
  );
};

function loadVideos() {
  const listRef = ref(storage, "videos/");
  const container = document.getElementById("videoList");
  container.innerHTML = "";

  listAll(listRef).then((res) => {
    res.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        const video = document.createElement("video");
        video.src = url;
        video.controls = true;
        container.appendChild(video);
      });
    });
  });
}

loadVideos();