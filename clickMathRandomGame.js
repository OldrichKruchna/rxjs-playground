const click = Rx.Observable.fromEvent(document, 'click');
const rndVal = Rx.Observable.create(observer => {  
    setInterval(() => observer.next(Math.random()), 1000);
}).share();

rndVal.takeUntil(click).subscribe(value => console.log(value));

click.withLatestFrom(rndVal).subscribe((values) => {
    const lastVal = values[1];

    if (lastVal > 0.5) { 
        console.log(`%cWin with value ${lastVal}`, 'color: green; font-size:15px;');
    } else {
        console.log(`%cLose with value ${lastVal}`, 'color: red; font-size:15px;');
    }
});