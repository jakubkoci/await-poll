# await-poll
Simple long polling with async/await.

## Installation 

```
yarn add await-poll
```

## Usage

```
import { poll } from "await-poll";

// This simulates call of some async function.
let counter = 0;
const fn = () => {
  console.log("calling api", counter);
  counter++;
  return counter;
};

// Condition which, if satisfied, ends the polling.
const fnCondition = result => result < 3;

// And finally the call of the poll function itself. It calls `fn` function 3 times, until counter has value equal to 3, 
// with 500 ms delay between each call. It returns result of last call of `fn` function, which in this case is number 3.
const finalResult = await poll(fn, fnCondition, 500);
```

I've written an article reasoning why and how I wrote the `poll` function: [Polling with async/await](https://dev.to/jakubkoci/polling-with-async-await-25p4).