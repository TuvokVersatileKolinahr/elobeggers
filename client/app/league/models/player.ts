
export interface Player {
  name: String;
  elo: Number;
  joinDate: Date;
  lastPlayed: [Date];
  retired: Boolean;
  retiredDate: Date;
  belongsTo: String;
}
