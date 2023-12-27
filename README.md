# project-minerva

# CHEETA: _A website for music review and recommendation_

## Table of Contents

- [Summary](#Summary)
- [Technologies used](#technologies-used)
- [Project Directory Status](#project-directory-status)
- [How to use the website](#How-to-use-the-website)
  - [Instructions](#instructions)
- [Link to the website](#Link-to-the-website)
- [Acknowledgements](#acknowledgments)

## Summary

Cheeta is a web portal for an Internet Music Database. This website displays the top artists, their top albums and each album's best songs.

## Technologies Used

- HTML
- CSS
- JS
- Python flask
- sqlite3

## Project Directory Status

```
ISS*project/
├── ASSUMPTIONS.md
├── README.md
└── src
    ├── about2.html
    ├── about.css
    ├── albums_ag.html
    ├── albums.css
    ├── albums_id.html
    ├── albums_ldr.html
    ├── albums_pm.html
    ├── albums_r.html
    ├── albums_ts.html
    ├── audio
    │   └── what-noise-do-cheetahs-make.mp3
    ├── Cochin-Font-1
    │   └── Cochin.ttf
    ├── final_artists.html
    ├── footer.css
    ├── home.css
    ├── home.html
    ├── images
    │   ├── * (13).jpeg
    │   ├── 1.jpg
    │   ├── 2.jpg
    │   ├── 3.jpg
    │   ├── 4.jpg
    │   ├── 5.jpg
    │   ├── 6.jpg
    │   ├── 7.jpg
    │   ├── 8.jpg
    │   ├── 9.jpg
    │   ├── aaa.png
    │   ├── Album by taylor swift _ Midnights.jpeg
    │   ├── All the Old Taylors in Taylor Swift's \_Look What You Made Me Do_.jpeg
    │   ├── anti.jpg
    │   ├── Anti Rihanna.jpeg
    │   ├── aria.jpeg
    │   ├── ari.jpeg
    │   ├── ari.jpg
    │   ├── august.jpeg
    │   ├── Bad Beauty! Rihanna Album Artwork For Good Girl Gone Bad Pop Rock and Roll Music R&B Icon Celebrity CDs Photography Fashion Hair Make-Up shortlist*com.jpeg
    │   ├── 💙💙 bb lindo.jpeg
    │   ├── beerbongs.jpg
    │   ├── beeryellow.jpeg
    │   ├── Beige Brown Vintage Page Border Document A4(1).jpg
    │   ├── Birthday Cake.jpeg
    │   ├── bleeding.jpeg
    │   ├── Bleeding.png
    │   ├── blueswift.jpeg
    │   ├── borntodie.jpeg
    │   ├── cons.jpeg
    │   ├── Cosmopolitan UK, the women's magazine for fashion, beauty, sex tips and celebrity news.jpeg
    │   ├── cute-removebg-preview.png
    │   ├── dancing.png
    │   ├── dang1.jpg
    │   ├── dang2.jpg
    │   ├── dang3.jpg
    │   ├── dang4.jpg
    │   ├── dang5.jpg
    │   ├── danger.jpg
    │   ├── dang.png
    │   ├── dan reynolds.jpeg
    │   ├── darkwood.jpg
    │   ├── Day 5* A song that is often stuck in your head* Hard - Rihanna.jpeg
    │   ├── Definitive Proof That Taylor Swift Writes the Best Breakup Songs Ever - E! Online.jpeg
    │   ├── Eu.jpeg
    │   ├── ev1.jpg
    │   ├── ev3.jpg
    │   ├── ev4.jpeg
    │   ├── ev4.jpg
    │   ├── ev5.jpg
    │   ├── evermore.png
    │   ├── ev.jpeg
    │   ├── evolve.jpg
    │   ├── Fashion Week* Blake Lively and More Stars at NYFW.jpeg
    │   ├── fearless.jpeg
    │   ├── Fearless Taylor's Version Original Album Cover.jpeg
    │   ├── _ (fire).jpeg
    │   ├── gold.jpeg
    │   ├── gold rush - taylor swift.jpeg
    │   ├── Good Girl Gone Bad _ myLot.jpeg
    │   ├── Good.png
    │   ├── gorgeous.jpeg
    │   ├── _ (hi).jpeg
    │   ├── hm1.jpeg
    │   ├── hm2.jpeg
    │   ├── hm3.jpeg
    │   ├── hm4.jpeg
    │   ├── hm5.jpeg
    │   ├── hm.jpeg
    │   ├── hmm.jpeg
    │   ├── honeymoon.jpeg
    │   ├── I Knew You Were Trouble.jpeg
    │   ├── imagine-dragon (copy).jpg
    │   ├── Imagine Dragons Daily Fansite.jpeg
    │   ├── insta-removebg-preview (3rd copy).png
    │   ├── insta-removebg-preview (copy).png
    │   ├── insta-removebg-preview.png
    │   ├── lanadel.jpeg
    │   ├── Lavender haze.jpeg
    │   ├── lfl1.jpeg
    │   ├── lfl2.jpeg
    │   ├── lfl3.jpeg
    │   ├── lfl4.jpeg
    │   ├── lfl.jpeg
    │   ├── logo.jpg
    │   ├── loud.png
    │   ├── Love \_Fight Song\_\_ Here Are the Singer's Top 10 Songs to Rock Out To.jpeg
    │   ├── love.jpeg
    │   ├── lover.jpg
    │   ├── love this album!!! rihanna, talk that talk.jpeg
    │   ├── lust.jpeg
    │   ├── Man Down- Rihanna.jpeg
    │   ├── me1.jpg
    │   ├── me2.jpg
    │   ├── me3.jpg
    │   ├── me4.jpg
    │   ├── me5.jpg
    │   ├── medha.jpeg
    │   ├── merc1.jpg
    │   ├── merc2.jpg
    │   ├── merc3.jpg
    │   ├── merc4.jpg
    │   ├── merc5.jpg
    │   ├── merc.jpg
    │   ├── Mercury.webp
    │   ├── midnights.png
    │   ├── my.jpg
    │   ├── navbar_bg.jpg
    │   ├── nf1.jpeg
    │   ├── nf2.jpeg
    │   ├── nf3.jpeg
    │   ├── nf4.jpeg
    │   ├── nf5.jpeg
    │   ├── nf.jpeg
    │   ├── Nice!.png
    │   ├── night.jpeg
    │   ├── nightv.jpg
    │   ├── normanF.jpeg
    │   ├── norman.jpg
    │   ├── NR 2008 Short_Music 5m.jpeg
    │   ├── nv1.jpg
    │   ├── nv2.jpg
    │   ├── nv3.jpg
    │   ├── nv4.jpg
    │   ├── nv5.jpg
    │   ├── nv.jpg
    │   ├── old-pape.jpg
    │   ├── Only Girl in the World by ReneCampbellArt on DeviantArt.jpeg
    │   ├── Only Girl (In The World).jpeg
    │   ├── or1.jpg
    │   ├── or2.jpeg
    │   ├── or3.jpg
    │   ├── or4.jpg
    │   ├── or5.jpg
    │   ├── origins.jpg
    │   ├── Photos from Relive the Biggest Moments From Taylor Swift's Red Era - E! Online.jpeg
    │   ├── p.jpeg
    │   ├── _.png
    │   ├── postback.jpeg
    │   ├── Postblue.jpeg
    │   ├── Post (headphone).jpeg
    │   ├── post.jpg
    │   ├── Post Malone (1).jpeg
    │   ├── Post malone (2).jpeg
    │   ├── Post Malone* August 26th.jpeg
    │   ├── Post Malone \_Beerbongs & Bentleys* album campaign.jpeg
    │   ├── Post Malone _Beerbongs & Bentleys_ album campaign.png
    │   ├── Post Malone fire.jpeg
    │   ├── Post Malone.jpeg
    │   ├── postmalone.jpg
    │   ├── POST MALONE _ Post malone wallpaper, Post malone, Rap aesthetic.jpeg
    │   ├── Post Malone shirt.jpeg
    │   ├── Post Malone stripes.jpeg
    │   ├── Post Malone Wallpaper 4.jpeg
    │   ├── Postst.jpeg
    │   ├── Posty fest.jpeg
    │   ├── posty.jpeg
    │   ├── pp.jpeg
    │   ├── ppp.jpeg
    │   ├── rated.jpg
    │   ├── red.jpeg
    │   ├── red.jpg
    │   ├── rep.jpg
    │   ├── Reputation (Taylor Swift) Font.png
    │   ├── Rihanna \_Bitch Better Have My Money_ video (NSFW).jpeg
    │   ├── rihannag.webp
    │   ├── rihanna.jpeg
    │   ├── RIHANNA.jpeg
    │   ├── rihanna.jpg
    │   ├── Rihanna Just Released 'Anti' for Free* The 3 Music & Marketing Industry Disruption Lessons From It - Jay Jay Ghatt.png
    │   ├── Rihanna lanza Work, el primer single de la era Anti.jpeg
    │   ├── Rihanna - Please Don't Stop The Music.jpeg
    │   ├── Rihanna - Rated R by jonatasciccone on DeviantArt.jpeg
    │   ├── Rihanna - Rated R.jpeg
    │   ├── Rihanna \_Rockstar 101* feat* Slash.jpeg
    │   ├── Rihanna Talk That Talk.jpeg
    │   ├── Rihanna* Te Amo (MBM Single Cover) from her _RATED R_ Album*.jpeg
    │   ├── Rihanna - You Da One (single cover).jpeg
    │   ├── river.jpg
    │   ├── (r).jpeg
    │   ├── rollingstone.webp
    │   ├── Screenshot from 2023-04-06 23-05-54.png
    │   ├── sharks.jpeg
    │   ├── Sharks.jpg
    │   ├── sharks.webp
    │   ├── sm.jpg
    │   ├── smoke1.jpg
    │   ├── smoke2.jpg
    │   ├── smoke3.jpg
    │   ├── smoke4.jpg
    │   ├── smoke5.jpg
    │   ├── smoke.avif
    │   ├── smoke.jpeg
    │   ├── smoky_back.avif
    │   ├── Song Lyrics and Translations.png
    │   ├── Stoneyalbum.jpg
    │   ├── stoney.jpeg
    │   ├── summ2.jpeg
    │   ├── summ3.jpeg
    │   ├── summ4.jpeg
    │   ├── summ5.jpeg
    │   ├── summ6.jpeg
    │   ├── summ.jpeg
    │   ├── summ.jpg
    │   ├── sw1.jpg
    │   ├── sw2.jpg
    │   ├── sw3.jpg
    │   ├── sw4.jpg
    │   ├── sw5.jpg
    │   ├── sweetener.jpg
    │   ├── swe.jpg
    │   ├── swiftface.jpeg
    │   ├── talk.jpg
    │   ├── Talk That Talk .jpeg
    │   ├── Taylor love story.jpeg
    │   ├── taylor.png
    │   ├── taylorr.jpeg
    │   ├── Taylor Swift \_Champagne Problems* Lyrics Lockscreen.jpeg
    │   ├── taylor swift for bejeweled music video.jpeg
    │   ├── Taylor Swift.jpeg
    │   ├── Taylor Swift - marjorie (Official Lyric Video).jpeg
    │   ├── Taylor Swift - Midnight Rain.jpeg
    │   ├── taylor swift midnights.jpeg
    │   ├── Taylor Swift -Midnights.png
    │   ├── Taylor Swift rep Tour _ Taylor swift dress, Taylor swift outfits, Taylor swift tour outfits.jpeg
    │   ├── Taylor Swift Willow mv.jpeg
    │   ├── thank.jpg
    │   ├── Thunder.jpg
    │   ├── Toothache.png
    │   ├── truly1.jpeg
    │   ├── Tumblr.png
    │   ├── twelve.jpeg
    │   ├── ty1.jpg
    │   ├── ty2.jpg
    │   ├── ty3.jpg
    │   ├── ty4bef822174e68cb1ce807af5fe8392620.jpg
    │   ├── ty5.jpg
    │   ├── ultra.jpeg
    │   ├── ultra.jpg
    │   ├── Umbrella_ Rihanna.jpeg
    │   ├── uv1.jpeg
    │   ├── uv2.jpeg
    │   ├── uv3.jpeg
    │   ├── uv4.jpeg
    │   ├── uv5.jpeg
    │   ├── vyakhya.jpeg
    │   ├── What.png
    │   ├── WHEN I SPEAK ABSURD IT'S BECAUSE IT'S ABSURD.jpeg
    │   ├── wood.jpg
    │   ├── Work - AKQA.png
    │   ├── work.jpeg
    │   ├── yada.png
    │   ├── yours.jpg
    │   ├── yt1.jpg
    │   ├── yt2.jpg
    │   ├── yt4.jpg
    │   ├── yt5.jpg
    │   ├── yt.jpg
    │   └── yt.png
    ├── impact
    │   ├── Impacted.ttf
    │   ├── impact.ttf
    │   ├── sharefonts.net.txt
    │   └── unicode.impact.ttf
    ├── ldr.css
    ├── navbarr.css
    ├── phase1.pdf
    ├── song_bleeding.html
    ├── song_myev.html
    ├── songs_12c.html
    ├── songs_anti.html
    ├── songs_aug.html
    ├── songs_beerbongs.html
    ├── songs_born.html
    ├── songs.css
    ├── songs_daner.html
    ├── songs_evermore.html
    ├── songs_evolve.html
    ├── songs_fearless.html
    ├── songs_gggb.html
    ├── songs_honey.html
    ├── songs_loud.html
    ├── songs_lust.html
    ├── songs_mercury.html
    ├── songs_midnight.html
    ├── songs_nfr.html
    ├── songs_nv.html
    ├── songs_origins
    ├── songs_ratedr.html
    ├── songs_red.html
    ├── songs_reputation.html
    ├── songs_smoke.html
    ├── songs_stoney.html
    ├── songs_sweet.html
    ├── songs_talk.html
    ├── songs_ty.html
    ├── songs_uv.html
    └── songs_yourstruly.html
```

## How to use the website

### INSTRUCTIONS:

### **Navigation Bar:**

The navigation menu persistent at the top of the page allows easy access all of the different sections of the website. It contains links to the Home Page, the Artists Page as well as the About Page.

### **Footer:**

The footer at the bottom of each page contains quick links to the Home Page and the About Page.

**Click on the icons at the end of the footer to be redirected to the respective social media pages our serive.**

### **Home Page:**

The home page can be accessed dierctly from the navigation bar, as well as from the quick link in the footer.

The home page is designed to provide visitors with an overview of the website and its various features.

It contains the featured sections:

_Top 3 Artists_ - Click on the Artist image to be redirected to the Albums Page of the artist.

_Top 3 Albums_ - Click on the Album to be redirected to the Songs Page of the album.

_Top 3 Songs_

### **About Page:**

The About Page can be accessed dierctly from the navigation bar, as well as from the quick link in the footer.

Scroll through the page to read about the various features of the website, the purpose behind the project and details about the creators.

### **Artists Page:**

The Artists page can be accessed from the Navigation menu at the top.

It contains six artists and their images.

Click on the image to be redirected to the Albums page of the respective artist.

### **Albums Page:**

The Albums page of each artist can be accessed from clicking on the Album's artist from the Artist page, or from clicking on one of the Top 3 Artist from the Home Page.

It lists the top 5 Albums of each artist, number of songs in the album and the year of release.

Click on the Album Name or the Album image to be redirected to the Songs page of the respective album.

### **Songs Page:**

The Songs Page of each album can be accessed from clicking on the Album from the Albums Page of the artist, or from clicking on one of the Top 3 Albums from the Home Page.

It lists the top 5 songs of each Album.

User can click on the add song button next to each song to add that song to the playlist. This redirects to the playist page so that the user can view the songs the added.

### **Search Page:**

Search Page displays top 10 results when the searh button is clicked. Can be accessed through navbar.

If fewer than 10 results are returned, it should display those many results. The results include Track Name, Artist Name, Album Artwork. When filters are applied, the top 10 results according to the filter are applied.

To apply duration filter, enter an integer number of minutes in duration input, and for explicitness, user can select any option from Explicit, Not Explicit and All.

To clear all filters, click on Clear Filters and clicking on search button again would get results without the filters.

### **Artists Spotlight:**

Can be accessed through navbar.

User can review any artist they want by clicking on the down button on the artist image on the page.

User can give star ratings through radio buttons on clicking the expand button near artist image which appears on hovering over the image.

The Rating form is visible once the user has given a star rating and can be posted by clickig on "POST" button.

The table showing all reviews of a particular artist is also displayed throught the expand button.

Countdown is for the album release date 30th June 2023 00:00.

### **Playlists Page**

Can be accessed through navbar.

User can view the songs added to the playlist and remove any songs they don't want. This will remove the song from the playlists database.
