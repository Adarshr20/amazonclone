import { Component } from '@angular/core';
interface bookDetails{
  id:number,
  name:string,
  author:string,
  img:string,
  Price:number,
 
  desc:string
}

@Component({
  selector: 'app-body',

  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  bookArray: Array<bookDetails> =[];
  bookDetails: string = "";
  bookid: number = -1;
  ngOnInit(): void {
    this.bookArray = [
      {
        id: 1,
        name: "Manjul Publishing House Rich Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        img: "https://5.imimg.com/data5/SELLER/Default/2022/3/WZ/EL/NM/147304712/whatsapp-image-2022-02-20-at-5-05-41-pm-500x500.jpeg",
        Price: 869,
       
        desc:"April of 2022 marks a 25-year milestone for the personal finance classic Rich Dad Poor Dad that still ranks as the #1 Personal Finance book of all time. And although 25 years have passed since Rich Dad Poor Dad was first published,readers will find that very little in the book itself has changed ― and for good reason. While so much in our world is changing a high speed, the lessons about money and the principles of Rich Dad Poor Dad haven’t changed. Today, as money continues to play a key role in our daily lives, the messages in Robert Kiyosaki’s international bestseller are more timely and more important than ever."
      },
      {
        id: 2,
        name: "The Power of Your Subconscious Mind",
        author: "Joseph Murphy ",
        img: "https://m.media-amazon.com/images/I/61jBLw5Bq9L._AC_UY327_FMwebp_QL65_.jpg",
        Price: 700,
       
        desc:"This remarkable book by Dr. Joseph Murphy, one of the pioneering voices of affirmative thinking, will unlock for you the truly staggering powers of your subconscious mind. Combining time-honored spiritual wisdom with cutting edge scientific research, Dr. Murphy explains how the subconscious mind influences every single thing that you do and how, by understanding it and learning to control its incredible force, you can improve the quality of your daily life.Everything, from the promotion that you wanted and the raise you think you deserve, to overcoming phobias and bad habits and strengthening interpersonal relationships, the Power of Your Subconscious Mind will open a world of happiness, success, prosperity and peace for you. It will change your life and your world by changing your beliefs."
      },
      {
        id: 3,
        name: "Don't Believe Everything You Think (English)",
        author: "Joseph Nguyen",
        img: "https://m.media-amazon.com/images/I/715qi-cIbML._AC_UY327_FMwebp_QL65_.jpg",
        Price: 299,
       
        desc:"Discover how to conquer anxiety, self-doubt, and self-sabotage without depending on motivation or willpower. 'Don't Believe Everything You Think' uncovers the core of psychological suffering and offers insights to effortlessly shape the life you crave. Learn to detach from negativity, embrace love and joy, escape negative thought cycles, and tap into inner wisdom. The message is clear: anyone can attain peace, love, and fulfillment, irrespective of their history. It's not about rewiring your brain, but expanding your consciousness for lasting transformation. Within this book, delve into the core of emotional suffering and receive insights on effortlessly curating the life you aspire to."
      }
    ]
  }
  constructor(){}

  public getBookDetails(index:number):void{
    if(this.bookDetails){
      this.bookDetails="";
    }
    else{
      this.bookid = this.bookArray[index].id;

      this.bookDetails = this.bookArray[index].desc;
    }
  }
  

}
