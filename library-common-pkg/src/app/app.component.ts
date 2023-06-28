import { AfterViewInit, NgZone, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-root-login',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'Codingvila Login With Google';
  auth2: any;
  fullnameks: string='rte';
  @ViewChild('loginRef', { static: true }) loginElement!: ElementRef;
  constructor(private ngZone: NgZone) { }
  ngAfterViewInit(): void {
    (<any>window)['gapi'].load('auth2', () => {
      this.auth2 = (<any>window)['gapi'].auth2.init({
        client_id: '149855498576-7j0dhrutr0htmdt4pasb2e0orsgpq8bg.apps.googleusercontent.com',
      });

      this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
        (googleUser: any) => {
          this.ngZone.run(() => {
            const profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId());
            console.log('Full Name: ' + profile.getName());
            console.log('Given Name: ' + profile.getGivenName());
            console.log('Family Name: ' + profile.getFamilyName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
            this.fullnameks = profile.getEmail();
        console.log('Email1121: ' + this.fullnameks);
          });
      }, (error: any) => {
        console.log(JSON.stringify(error, undefined, 2));
      });
    });
  }
  ngOnInit() {

    
  }

  callLogin() {

    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleAuthUser: any) => {

        //Print profile details in the console logs

        let profile = googleAuthUser.getBasicProfile();
        console.log('Token232323 || ' + googleAuthUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        this.fullnameks = profile.getEmail();
        console.log('Email1121: ' + this.fullnameks);

      }, (error: any) => {
        alert(JSON.stringify(error, undefined, 2));
        this.fullnameks = 'profile.getEmail();;'
      });

  }

  googleAuthSDK() {

      (<any>window)['gapi'].load('auth2', () => {
        this.auth2 = (<any>window)['gapi'].auth2.init({
          client_id: '149855498576-7j0dhrutr0htmdt4pasb2e0orsgpq8bg.apps.googleusercontent.com',
        });
        this.callLogin();
      });

    // (function (d, s, id) {
    //   var js, fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) { return; }
    //   js = d.createElement('script');
    //   js.id = id;
    //   js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
    //   fjs?.parentNode?.insertBefore(js, fjs);
    // }(document, 'script', 'google-jssdk'));
  }
}

