<div align="center">
 <h1> <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" width="80px"><br/>Get Tweet ID</h1>
 <a href="https://itsvg.in" target="_blank"><img src="https://img.shields.io/badge/Creator-Vishwa%20Gaurav-blue?style=plastic"/></a> 
 <img src="https://img.shields.io/npm/v/get-tweet-id?label=%20&style=plastic"/>
 <img src="https://img.shields.io/npm/dt/get-tweet-id?style=plastic">
 <img src="https://img.shields.io/snyk/vulnerabilities/github/VishwaGauravIn/get-tweet-id?style=plastic"/>
 <img src="https://img.shields.io/badge/License-GPL%20v3-brightgreen?style=plastic"/>
 <img src="https://img.shields.io/github/languages/code-size/VishwaGauravIn/get-tweet-id?logo=github&style=plastic">
</div>

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
- **Step 3:** Pass Tweet url like ```getTweetId("https://twitter.com/VishwaGauravIn/status/1472126167167627265")```
- **Result:** You will get the Tweet Id in return like ```1472126167167627265```

## Example Code :

```jsx
import getTweetId from "get-tweet-id";

export default function Test() {
    let url = "https://twitter.com/VishwaGauravIn/status/1472126167167627265"
    let id = getTweetId(url)
    console.log(id) // 1472126167167627265
    return (
        <div>
        
        </div>
    )
}
```
