import { Injectable } from '@angular/core';
import {
  Theme,
  light,
  dark,
  defaultTheme,
  green,
  blue,
  red,
} from '../interfaces/ThemeInterface';
@Injectable({
  providedIn: 'root',
})
export class ThemeServiceService {
  private active: Theme;
  private availableThemes: Theme[] = [
    light,
    dark,
    defaultTheme,
    green,
    blue,
    red,
  ];

  constructor() {}

  setDefaultTheme() {
    this.setActiveTheme(defaultTheme);
  }

  setRed() {
    this.setActiveTheme(red);
  }

  setGreen() {
    this.setActiveTheme(green);
  }

  setPink() {
    this.setActiveTheme(blue);
  }

  setDarkTheme(): void {
    this.setActiveTheme(dark);
  }

  setLightTheme(): void {
    this.setActiveTheme(light);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach((property) => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
