from flask import Flask, render_template, request
from gtts import gTTS
import os
import pygame
from langdetect import detect

app = Flask(__name__)

paused = False
paused_pos = 0

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/first")
def first():
    return render_template("1.html")

@app.route("/second")
def second():
    return render_template("2.html")

"""
@app.route("/fast_forward")
def fast_forward():
    paused_pos = pygame.mixer.music.set_pos(0.2)

@app.route("/backwards")
def backwrds():
    return render_template("2.html")
"""

@app.route("/play")
def play():
    global paused, paused_pos
    
    text = request.args.get("text")
    language = detect(text)
    
    if text:
        tts = gTTS(text=text, lang=language)
        tts.save("audio.mp3")
        pygame.init()
        pygame.mixer.music.load("audio.mp3")
        
        if paused:
            pygame.mixer.music.play(start=paused_pos / 1000.0)
            paused = False
        else:
            pygame.mixer.music.play()
            
        while pygame.mixer.music.get_busy():
            continue
            
        pygame.mixer.quit()
        os.remove("audio.mp3")
        
        # Deselect text after playing
        selection = request.args.get("selection")
        if selection:
            js = f"window.getSelection().empty();"
            return f"<script>{js}</script>Played successfully!"
        else:
            return "Played successfully!"
    else:
        return "No text input found."

@app.route("/pause")
def pause():
    global paused, paused_pos
    
    pygame.mixer.music.pause()
    paused = True
    paused_pos = pygame.mixer.music.get_pos()
    return "Audio paused successfully!"

@app.route("/stop")
def stop():
    global paused, paused_pos
    
    pygame.mixer.music.stop()
    paused = False
    paused_pos = 0
    return "Audio stopped successfully!"

if __name__ == "__main__":
    app.run(debug=False)

