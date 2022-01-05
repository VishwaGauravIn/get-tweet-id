# get-tweet-id
The **FIRST** and the **ONLY** module to get tweet id from url !

## How to Install ?
Use npm or yarn to install this npm package
```
npm i get-tweet-id
```

## Features
- Fast
- Minimal
- Lightweight
- No Dependencies 
- Support all Frameworks

## How to use ?
- **Step 1:** Install the npm package
- **Step 2:** Import ```getTweetId``` in your app
- **Step 3:** Pass Tweet url like ```getTweetId("https://mobile.twitter.com/VishwaGauravIn/status/1459411583617040386")```
- **Result:** You will get the Tweet Id in return like ```1459411583617040386```

## Example Code :

```jsx
import getTweetId from "get-tweet-id";

export default function Test() {
    let url = "https://mobile.twitter.com/VishwaGauravIn/status/1459411583617040386"
    let id = getTweetId(url)
    console.log(id) // 1459411583617040386
    return (
        <div>
        
        </div>
    )
}
```
