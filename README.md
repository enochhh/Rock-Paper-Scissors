# Rock Paper Scissors

## My Biggest Challenge

One of the biggest hurdles in this project was using an event listener; more specifically, the scope of the event I was listening for and where I was able to use it in my code. I initially had a function (playerChoice) for getting the player's choice and a function (playRound) for playing the actual round (checking player's choice against computer's choice and seeing which one wins). I attached playerChoice to the event listener, and I stored the value of the choice (depending on the button clicked) in a variable to use in the playRound function by using 'event.currentTarget.innerText' (which would return the name of the button, aka the choice of either rock, paper, or scissors). I was able to console log that data perfectly fine from within that function, but every time I ran the entire JavaScript code, the playRound function wouldn't trigger and I kept getting the following error: TypeError: Cannot read property 'currentTarget' of undefined. 

I got stuck on this error for 2 hours, combing Google and stackOverflow for possible solutions. I went back into the MDN documentation for using event listeners, thinking I was using them wrong. Everything seemed in place, so I was absolutely stumped as to why I couldn't access that information. It wasn't until I was neck-deep in a stackOverflow rabbit hole that I found a possible solution. Someone had mentioned that they were using the event object in another function other than the one that was tied to the event listener, even though they had stored the event object in a variable. This was exactly the challenge I was facing! I continued reading and tied the playRound function with the event listener, while also integrating the playerChoice code into the playRound function. Lo and behold, it worked! I no longer had an undefined error. 

From this little stumbling block, I was able to learn that the scope of an event object is contained only in the function that is tied to the event listener. It doesn't matter if it is stored in another variable to be used in another function; it doesn't work. 


