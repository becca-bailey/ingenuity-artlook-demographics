import { SchoolData, Race, RacialPercentage } from './types';

class School implements SchoolData {
  name: string = '';
  id: string = '';
  racialMakeup: RacialPercentage[] = [];
  freeReducedLunch: number = 0;

  constructor(data?: SchoolData) {
    if (data) {
      this.name = data.name;
      this.id = data.id;
      this.racialMakeup = data.racialMakeup;
      this.freeReducedLunch = data.freeReducedLunch;
    }
  }
}
