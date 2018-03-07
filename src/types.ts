export type SchoolData = {
  name: string;
  id: string;
  racialMakeup: RacialPercentage[];
  freeReducedLunch: number;
};

export enum Race {
  White = 'White',
  AfricanAmerican = 'African American',
  NativeAmericanAlaskan = 'Native American/Alaskan',
  Hispanic = 'Hispanic',
  MultiRacial = 'Multi-Racial',
  Asian = 'Asian',
  HawaiianPacificIslander = 'Hawaiian/Pacific Islander',
  NotAvailable = 'Not Available',
}

export type RacialPercentage = {
  race: Race;
  percentage: number;
};
