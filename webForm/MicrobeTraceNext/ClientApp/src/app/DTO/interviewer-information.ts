import { UserProfile } from './user-profile';
import { Sections } from './enums';

export class InterviewerInformation{
  public UserProfile: UserProfile;
  public Section: Sections = Sections.One;
  constructor(userProfile: UserProfile){
    this.UserProfile = userProfile;
  }

}
