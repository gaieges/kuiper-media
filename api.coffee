# Try coffee script under 'Try CoffeeScript' tab - http://coffeescript.org/#language
# Public domain movies: https://en.wikipedia.org/wiki/List_of_films_in_the_public_domain_in_the_United_States

retreiveMetaData = 'accesshttp://www.omdbapi.com/'

# Schemas
schema1 = 
  title: "It's Always Sunny in Philadelphia"
  actors: "Charlie Day, Glenn Howerton, Rob McElhenney, Kaitlin Olson"
  rated: "TV-MA"
  released: "04 Aug 2005"
  runtime: "22 min"
  imdbID: "tt0472954"
  imdbRating: "8.8"
  imdbVotes: "141,148"
  totalSeasons: "14"
  links: [{
    type: "http"
    url: "http://mysite.com/video.mp4"
    format: "trailer"
    description: "series trailer"
    }]
  perception: [{
    who: "userid"
    when: "Fri Mar 31 18:06:29 CDT 2017"
    score: "up"
    comment: "awesome show"
    }]


schema2 =
  # Key
  title: 'Night of the Living Dead'
  # Value
  metaDataSites:
    imbd: 'tt0063350'
    rottenTomatoe: 'blah'
  links: [{
    type: 'http'
    source: 'youtube'
    url: 'https://www.youtube.com/watch?v=-_f2Enn8x5s' } 
    {
    type: 'torrent'
    source: 'thepiratebay'
    url: 'magnet:?xt=urn:btih:ac3ba6437ab682e12f8ac02d4005b50a1d81b2b9&dn=Night.Of.The.Living.Dead.1968.VOST.FRENCH.DVDRip.XViD-DVDFR&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969'
    }]

