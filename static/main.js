function playSelectedText() {
  const text = window.getSelection().toString();
  if (text) {
      fetch(`/play?text=${text}&selection=true`)
          .then(response => response.text())
          .then(text => {
              console.log(text);
          })
          .catch(error => console.error(error));
  }
}

function pauseAudio() {
  fetch('/pause')
      .then(response => response.text())
      .then(text => console.log(text))
      .catch(error => console.error(error));
}

function stopAudio() {
  fetch('/stop')
      .then(response => response.text())
      .then(text => console.log(text))
      .catch(error => console.error(error));
}

document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.createElement('button');
  playButton.id = 'play-button';
  playButton.className = 'audio-button';
  playButton.innerText = 'Play';
  playButton.style.display = 'none';
  document.body.appendChild(playButton);

  const pauseButton = document.createElement('button');
  pauseButton.id = 'pause-button';
  pauseButton.className = 'audio-button';
  pauseButton.innerText = 'Pause';
  pauseButton.style.display = 'none';
  document.body.appendChild(pauseButton);

  const stopButton = document.createElement('button');
  stopButton.id = 'stop-button';
  stopButton.className = 'audio-button';
  stopButton.innerText = 'Stop';
  stopButton.style.display = 'none';
  document.body.appendChild(stopButton);

  document.addEventListener('mouseup', () => {
      const selection = window.getSelection();
      if (selection.toString()) {
          const range = selection.getRangeAt(0);
          const rect = range.getBoundingClientRect();

          playButton.style.display = 'block';
          playButton.style.position = 'fixed';
          playButton.style.top = '3%';
          playButton.style.backgroundColor = '#008CBA';
          playButton.style.color = '#fff';
          playButton.style.border = 'none';
          playButton.style.padding = '10px 20px';
          playButton.style.fontFamily = 'Arial';
          playButton.style.fontSize = '16px';
          playButton.style.fontWeight = 'bold';
          playButton.style.cursor = 'pointer';
          playButton.style.zIndex = "9999";
          playButton.onclick = playSelectedText;

          pauseButton.style.display = 'block';
          pauseButton.style.position = 'fixed';
          pauseButton.style.top = '3%';
          pauseButton.style.backgroundColor = '#008CBA';
          pauseButton.style.color = '#fff';
          pauseButton.style.border = 'none';
          pauseButton.style.padding = '10px 20px';
          pauseButton.style.fontFamily = 'Arial';
          pauseButton.style.fontSize = '16px';
          pauseButton.style.fontWeight = 'bold';
          pauseButton.style.cursor = 'pointer';
          pauseButton.style.zIndex = "9999";
          pauseButton.onclick = pauseAudio;

          stopButton.style.display = 'block';
          stopButton.style.position = 'fixed';
          stopButton.style.top = '3%';
          stopButton.style.backgroundColor = '#008CBA';
          stopButton.style.color = "#fff";
          stopButton.style.border = "none";
          stopButton.style.padding = "10px 20px";
          stopButton.style.fontFamily = "Arial";
          stopButton.style.fontSize = "16px";
          stopButton.style.fontWeight = "bold";
          stopButton.style.cursor = "pointer";
          stopButton.style.hoverBackground = "white";
          stopButton.style.zIndex = "9999";
          stopButton.onclick = stopAudio;

          const totalWidth = playButton.offsetWidth + pauseButton.offsetWidth + stopButton.offsetWidth + 6; // Add 6 for button spacing

          playButton.style.left = `calc(50% - ${totalWidth / 2}px)`;
          pauseButton.style.left = `calc(50% - ${totalWidth / 2}px + ${playButton.offsetWidth + 2}px)`;
          stopButton.style.left = `calc(50% - ${totalWidth / 2}px + ${playButton.offsetWidth + pauseButton.offsetWidth + 4}px)`;
        } else {
          playButton.style.display = 'none';
          pauseButton.style.display = 'none';
          stopButton.style.display = 'none';
      }
    });
// Add hover and clicked CSS properties to playButton
playButton.addEventListener("mouseover", function() {
  playButton.style.backgroundColor = "#005A7D";
});

playButton.addEventListener("mouseout", function() {
  playButton.style.backgroundColor = "#008CBA";
});

playButton.addEventListener("mousedown", function() {
  playButton.style.backgroundColor = "#002E3D";
});

// playButton.addEventListener("mouseup", function() {
//   playButton.style.backgroundColor = "#008CBA";
// });

// Add hover and clicked CSS properties to pauseButton
pauseButton.addEventListener("mouseover", function() {
  pauseButton.style.backgroundColor = "#005A7D";
});

pauseButton.addEventListener("mouseout", function() {
  pauseButton.style.backgroundColor = "#008CBA";
});

pauseButton.addEventListener("mousedown", function() {
  pauseButton.style.backgroundColor = "#002E3D";
});

// pauseButton.addEventListener("mouseup", function() {
//   pauseButton.style.backgroundColor = "#008CBA";
// });

// Add hover and clicked CSS properties to stopButton
stopButton.addEventListener("mouseover", function() {
  stopButton.style.backgroundColor = "#005A7D";
});

stopButton.addEventListener("mouseout", function() {
  stopButton.style.backgroundColor = "#008CBA";
});

stopButton.addEventListener("mousedown", function() {
  stopButton.style.backgroundColor = "#002E3D";
});

// stopButton.addEventListener("mouseup", function() {
//   stopButton.style.backgroundColor = "#008CBA";
// });


});
