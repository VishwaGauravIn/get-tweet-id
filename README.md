<div align="center">
 <h1> <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" width="80px"><br/>Get Tweet ID</h1>
 <a href="https://itsvg.in" target="_blank"><img src="https://img.shields.io/badge/Creator-Vishwa%20Gaurav-blue?style=plastic"/></a> 
 <img src="https://img.shields.io/badge/Release-v.1.0.2-brightgreen?style=plastic"/>
 <img src="https://img.shields.io/npm/v/npm?style=plastic">
 <img src="https://img.shields.io/snyk/vulnerabilities/github/VishwaGauravIn/get-tweet-id?style=plastic"/>
 <img src="https://img.shields.io/badge/License-GPL%20v3-brightgreen?style=plastic"/>
 <img src="https://img.shields.io/github/languages/code-size/VishwaGauravIn/get-tweet-id?logo=github&style=plastic">
 <img src="https://img.shields.io/bundlephobia/min/get-tweet-id?style=plastic&logo=npm"/>
<!--  <img src="https://img.shields.io/npm/dy/get-tweet-id?style=plastic"/> -->
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
