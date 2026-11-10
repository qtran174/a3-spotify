import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-album-page',
    templateUrl: './album-page.component.html',
    styleUrls: ['./album-page.component.css'],
    standalone: false
})
export class AlbumPageComponent implements OnInit {
	albumId:string = '';
	album:AlbumData | null = null;
	tracks:TrackData[] = [];


  constructor(private route: ActivatedRoute, private spotifyService:SpotifyService) { }

  ngOnInit() {
    //this.albumId = this.route.snapshot.paramMap.get('id');
    //TODO: inject spotifyService and use it to get the album data and the tracks for the album
    this.route.paramMap.subscribe((params) => {
      this.albumId = params.get('id') ?? '';
      this.loadAlbum(this.albumId);
    });
  }

  loadAlbum(id:string) {
    this.album = null;
    this.tracks = [];
    
    this.spotifyService.getAlbum(id).then((album) => {
      this.album = album;
    });
    
    this.spotifyService.getTracksForAlbum(id).then((tracks) => {
      this.tracks = tracks;
    });
  }

}
