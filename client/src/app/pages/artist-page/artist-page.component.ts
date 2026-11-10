import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-artist-page',
    templateUrl: './artist-page.component.html',
    styleUrls: ['./artist-page.component.css'],
    standalone: false
})
export class ArtistPageComponent implements OnInit {
	artistId:string = '';
	artist:ArtistData | null = null;
	topTracks:TrackData[] = [];
	albums:AlbumData[] = [];

  constructor(private route: ActivatedRoute, private spotifyService:SpotifyService) { }

  ngOnInit() {
    //this.artistId = this.route.snapshot.paramMap.get('id');
    //TODO: Inject the spotifyService and use it to get the artist data, top tracks for the artist, and the artist's albums
    this.route.paramMap.subscribe((params) => {
      this.artistId = params.get('id') ?? '';
      this.loadArtist(this.artistId);
    });
  }

  loadArtist(id:string) {
    this.artist = null;
    this.topTracks = [];
    this.albums = [];

    this.spotifyService.getArtist(id).then((artist) => {
      this.artist = artist;
    });

    this.spotifyService.getTopTracksForArtist(id).then((tracks) => {
      this.topTracks = tracks;
    });

    this.spotifyService.getAlbumsForArtist(id).then((albums) => {
      this.albums = albums;
    });

  }
}