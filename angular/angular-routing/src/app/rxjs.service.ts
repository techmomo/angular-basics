import { Injectable } from '@angular/core';
import { Observable, interval } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor() {
    // create an observable
    const observable = new Observable(subscriber =>{
      console.log('Hello RxJs');
      subscriber.next(10);
      subscriber.next([10,19,100]);
      setTimeout(()=>{
        subscriber.next("Call Me")
      },1000);

    });
    
   // subscribe to the observable
    // observable.subscribe((xyz)=>{
    //   console.log(xyz);
    // });

    const detailedObservable = new Observable(subscriber=>{
      try {
        subscriber.next('ONE');
        subscriber.next('TWO');
        //subscriber.error('Not Found');
        //subscriber.complete(); // i.e. subscription is done
        throw new Error(); // throw an error
      } catch (error) {
        subscriber.error('ERR ');
      }
    });

    // write clean observers
    detailedObservable.subscribe({
      next: val => console.log('TRY : '+val),
      error: err => console.error('ERROR : '+err),
      complete: () => console.log('FINALLY ')
    });
    //console.log("-- "+user);
    //observable.toPromise();

    // const val = Math.random();
    // HOT & COLD Observables
    // const _coldObservable = new Observable(subs=>{
    //   subs.next(val); // simple random function
    // });
    // // subscription 1
    // _coldObservable.subscribe(d=>{
    //   console.log("SUB 1 "+d);
    // });

    // // subscription 2
    // _coldObservable.subscribe(d=>{
    //   console.log("SUB 2 "+d);
    // });

    // COLD
    const _cold = new Observable(observer=>{
      var _interval = interval(1500);
      _interval.subscribe((val:number)=>{
        observer.next(val); // emit the value to the observer
      });
    });

    // subscriber 1
    _cold.subscribe((val)=>{
      console.log('Subscriber 1 ',val);
    });

    // subscriber 2
    setTimeout(()=>{
      _cold.subscribe((val)=>{
        console.log('Subscriber 2 ',val);
      });
    },2000);

    // end of constructor
   }
}
