export class Message {
    constructor(public avatar: string, public displayName: string, public text: string, public date: number,
      public isRead: boolean, public tripId: string) {
      this.avatar = avatar;
      this.displayName = displayName;
      this.text = text;
      this.date = date;
      this.isRead = isRead;
      this.tripId = tripId;
  }
}