import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegexPatternsService {

  public Alpha = /^[a-zA-Z]+$/;
  public Numeric = /^[0-9]+$/;
  public AlphaWithCharacter = /^[ A-Za-z-' ]*$/;
  public Date = /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/;
  //public PhoneNumber = /^[0-9]{10}/;
  public PhoneNumber = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
  public Email = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  public AlphaNumricWithCharacter = /^[ A-Za-z0-9-' ]*$/;
  public Zipcode = /^[0-9]{5}(?:-[0-9]{4})?$/;
  public CoVId = /^[a-zA-Z_]{2,50}[0-9]{6,16}$/;
  public nCoV = /^[0-9]{6,16}$/;
  public Password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/;
  public Text = /^[^"]*$/;
  constructor() { }
}
