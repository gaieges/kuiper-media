# Kuiper Media

> The intention here is to create a distributed, fully-accessible db of media data and references on the interweb

# Design

Kuiper media uses a decentralized db to store, search and obtain metadata, links, and ratings about any type of media that may exist out in the internet. It's intended to be a fully user-contributed and maintained db with protections against dubious intent.

The idea is to have an unconstrained record of every piece of media that exists, with a general sort of structure of:

- Media meta information: who made it, when it came out, how long it is
   - References / Links to that media, in any form: youtube/vimeo video, http URI, newsgroup, torrent
   - Reviews of the media itself: reddit-style upvotes/downvotes, comments,

At the top level, we have a piece of media, anything you can imagine, that has information about the media itself.  As an example, content from IMdb:

```json
{
    "title": "It's Always Sunny in Philadelphia",
    "actors": "Charlie Day, Glenn Howerton, Rob McElhenney, Kaitlin Olson",
    "rated": "TV-MA",
    "released": "04 Aug 2005",
    "runtime": "22 min",
    "imdbID": "tt0472954",
    "imdbRating": "8.8",
    "imdbVotes": "141,148",
    "totalSeasons": "14",
    "links": [{
        "type": "http",
        "url": "http://mysite.com/video.mp4",
        "format": "trailer",
        "description": "series trailer"
    }],
    "perception": [{
        "who": "userid",
        "when": "Fri Mar 31 18:06:29 CDT 2017",
        "score": "up",
        "comment": "awesome show"
    }]
}
```

With that basic design, we want everyone to have the ability to go in and correct / update / delete material that isn't accurate, and have a form of verifying that is true.  

This would need to happen through an interface of some sort, and have a level of protection against random people who want to go in and trash the db.  Perhaps a rate limiter of some sort with a exponential decay.

All of this would be stored in generally available database on top of a distributed store like IPFS.  See the links below for ideas on how to do that.


# References

- [ipdb](https://ipdb.foundation/)
- [orbit-db](https://github.com/orbitdb/orbit-db)
