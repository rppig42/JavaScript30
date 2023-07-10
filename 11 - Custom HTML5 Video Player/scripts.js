const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggleBtn = player.querySelector(".toggle");
const skipBtns = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

function togglePlay() {
  video.paused ? video.play() : video.pause();
}
video.addEventListener("click", togglePlay);
toggleBtn.addEventListener("click", togglePlay);
video.addEventListener("play", () => {
  toggleBtn.textContent = "❚ ❚";
});
video.addEventListener("pause", () => {
  toggleBtn.textContent = "►";
});

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}
skipBtns.forEach((btn) => btn.addEventListener("click", skip));

function handleRangeUpdate() {
  video[this.name] = this.value;
}
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
video.addEventListener("timeupdate", handleProgress);

let mousedown = false;
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
