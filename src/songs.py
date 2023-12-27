import requests
from flask import Flask, render_template, request, redirect, Response
from bs4 import BeautifulSoup
import sqlite3
import json
app = Flask(__name__)




@app.route('/home.html')
@app.route('/', methods =["GET", "POST"])
def home():
    return render_template('home.html')

@app.route('/song_bleeding', methods=['GET','POST'])
def song_bleeding():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('song_bleeding.html')

@app.route('/song_myev', methods=['GET','POST'])
def song_myev():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('song_myev.html')

@app.route('/songs_12c', methods=['GET','POST'])
def songs_12c():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_12c.html')

@app.route('/songs_anti', methods=['GET','POST'])
def songs_anti():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_anti.html')

@app.route('/songs_aug', methods=['GET','POST'])
def songs_aug():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_aug.html')

@app.route('/songs_beerbongs', methods=['GET','POST'])
def songs_beerbongs():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_beerbongs.html')

@app.route('/songs_born', methods=['GET','POST'])
def songs_born():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_born.html')

@app.route('/songs_daner', methods=['GET','POST'])
def songs_daner():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_daner.html')

@app.route('/songs_evermore', methods=['GET','POST'])
def songs_evermore():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_evermore.html')

@app.route('/songs_evolve', methods=['GET','POST'])
def songs_evolve():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_evolve.html')

@app.route('/songs_fearless', methods=['GET','POST'])
def songs_fearless():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_fearless.html')

@app.route('/songs_gggb', methods=['GET','POST'])
def songs_gggb():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_gggb.html')

@app.route('/songs_honey', methods=['GET','POST'])
def songs_honey():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_honey.html')

@app.route('/songs_loud', methods=['GET','POST'])
def songs_loud():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_loud.html')

@app.route('/songs_lust', methods=['GET','POST'])
def songs_lust():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_lust.html')

@app.route('/songs_mercury', methods=['GET','POST'])
def songs_mercury():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_mercury.html')

@app.route('/songs_midnight', methods=['GET','POST'])
def songs_midnight():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_midnight.html')

@app.route('/songs_nfr', methods=['GET','POST'])
def songs_nfr():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_nfr.html')

@app.route('/songs_nv', methods=['GET','POST'])
def songs_nv():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_nv.html')

@app.route('/songs_origins', methods=['GET','POST'])
def songs_origins():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_origins.html')

@app.route('/songs_ratedr', methods=['GET','POST'])
def songs_ratedr():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_ratedr.html')

@app.route('/songs_red', methods=['GET','POST'])
def songs_red():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_red.html')

@app.route('/songs_reputation', methods=['GET','POST'])
def songs_reputation():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_reputation.html')

@app.route('/songs_smoke', methods=['GET','POST'])
def songs_smoke():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_smoke.html')

@app.route('/songs_stoney', methods=['GET','POST'])
def songs_stoney():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_stoney.html')

@app.route('/songs_sweet', methods=['GET','POST'])
def songs_sweet():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_sweet.html')

@app.route('/songs_talk', methods=['GET','POST'])
def songs_talk():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_talk.html')

@app.route('/songs_ty', methods=['GET','POST'])
def songs_ty():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_ty.html')

@app.route('/songs_uv', methods=['GET','POST'])
def songs_uv():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_uv.html')

@app.route('/songs_yourstruly', methods=['GET','POST'])
def songs_yourstruly():
    # your code to fetch song_id, song_name, and artist_name from the database
    return render_template('songs_yourstruly.html')

@app.route('/add-to-playlist', methods=['POST'])
def add_to_playlist():
    if request.method == "POST":
        song_id = request.form['song_id']
        song_name=request.form['song_name']
        artist_name=request.form['artist_name']
        conn = sqlite3.connect('./playlist.db')
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM playlists WHERE song_id = ?', (song_id,))
        if cursor.fetchone() is None:
            cursor.execute('INSERT INTO playlists (song_id,song_name,artist_name) VALUES (?,?,?)', (song_id,song_name,artist_name))
            conn.commit()
            message = 'Song added to playlist!'
        else:
            message = 'Song already in playlist'
        conn.close()
        # return Response(status=204)
        return render_template('playlists.html',message=message)



    
@app.route('/playlist', methods=['GET'])
def playlist():
    # Retrieve songs from database
    conn = sqlite3.connect('playlist.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM playlists")
    songs = cursor.fetchall()
    conn.close()
    
    # Render playlists.html template with songs variable
    return render_template('playlists.html', songs=songs)

@app.route('/delete', methods=['POST'])
def delete_song():
    conn = sqlite3.connect('playlist.db')
    cursor = conn.cursor()
    cursor.execute('delete from playlists where song_id = ?', [request.form['song_to_delete']])
    conn.commit()
    conn.close()
    return redirect('/playlist')

@app.route('/search.html')
def search():
    return render_template('search.html')

@app.route('/about2.html')
def about2():
    return render_template('about2.html')

@app.route('/final_artists.html')
def final_artists():
    return render_template('final_artists.html')

@app.route('/albums_ag.html')
def albums_ag():
    return render_template('albums_ag.html')


@app.route('/albums_id.html')
def albums_id():
    return render_template('albums_id.html')


@app.route('/albums_ldr.html')
def albums_ldr():
    return render_template('albums_ldr.html')

@app.route('/albums_pm.html')
def albums_pm():
    return render_template('albums_pm.html')

@app.route('/albums_r.html')
def albums_r():
    return render_template('albums_r.html')

@app.route('/albums_ts.html')
def albums_ts():
    return render_template('albums_ts.html')

@app.route('/spotlight.html')
def spotlight():
    return render_template('spotlight.html')


if __name__ == '__main__':
    app.run(debug=True)