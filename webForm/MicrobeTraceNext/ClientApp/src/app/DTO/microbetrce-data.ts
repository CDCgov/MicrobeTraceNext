import { UserProfile } from './user-profile';
import { Section1, Section2, Section3, Section4, Section5, Section6, Section7, Section8 } from './section';
import { Sections } from './enums';

export class MicrobeTraceData {
  public UserProfile: UserProfile;
  public SystemID: string;
  public ParentSystemID: string;

 public BlockID: string;
 public BlockName: string;
 public Section1: Section1;
 public Section2: Section2;
 public Section3: Section3;
 public Section4: Section4;
 public Section5: Section5;
 public Section6: Section6;
 public Section7: Section7;
 public Section8: Section8;
 public Expiration: number;
 public IsProcessed: boolean = false;
 public IsDuplicated: boolean = false;

  constructor(){
    this.UserProfile = new UserProfile();
  }

  ClearData(clearAll: boolean, section: Sections = undefined){
    if(clearAll){
      this.Section1 = undefined;
      this.Section2 = undefined;
      this.Section3 = undefined;
      this.Section4 = undefined;
      this.Section5 = undefined;
      this.Section6 = undefined;
      this.Section7 = undefined;
      this.Section8 = undefined;
    }
    else{

      if(section == Sections.One)
        this.Section1 = new Section1(this.UserProfile);
      else if(section == Sections.Two)
        this.Section2 = new Section2();
      else if(section == Sections.Three)
        this.Section3 = new Section3();
      else if(section == Sections.Four)
        this.Section4 = new Section4();
      else if(section == Sections.Five)
        this.Section5 = new Section5();
      else if(section == Sections.Six)
        this.Section6 = new Section6();
      else if(section == Sections.Seven)
        this.Section7 = new Section7();
      else if(section == Sections.Eight)
        this.Section8 = new Section8();

    }
  }
}

