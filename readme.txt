--Readme document for *YOUR NAME*, *YOUR_EMAIL@uci.edu*--

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

10/10
- 1/1 Communicating with the webserver
- 1/1 Populating information about the user
- 3/3 Populating the search component
- 3/3 Artist page
- 1.5/1.5 Album page
- 0.5/0.5 Track page


2. How long, in hours, did it take you to complete this assignment?
Around 5 days. The hardest part is 2 and 3. 3 is hardest and I spent most of my time there with bugs and compile errors.


3. What online resources did you consult when completing this assignment? (list specific URLs)
Lectures and demo code on Angular. The demo video helps me know what to expect. I use angular.dev a lot to search.
MDN, Paramap, TypeScript and RxJS. I also use some libraries from the assignment like bootstrap carousel and progress bar.
https://angular.dev/api/router/ActivatedRoute#paramMap
https://www.awesomescreenshot.com/video/49220355?key=6641ac78c0e515385bab88dd6c4ce51d
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
https://www.typescriptlang.org/tsconfig/#strictNullChecks
https://rxjs.dev/guide/overview
https://getbootstrap.com/docs/5.3/components/carousel/
https://getbootstrap.com/docs/5.3/components/progress/
Got help from Claude for two bugs, The carousel and the page not updating when navigating between artist, albums and tracks. I forgot to reset old results before a new search causing stuck.
Another thing is that the code reads the id with route.snapshot and it's only run once. So when I switch to another page, Angular reused the component so nothing update at all.


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
Originally, I was thinking of partnering with my friend but we ended up didn't register as a team before the deadline so we decided to work alone.


5. Did you add a bonus feature to your submission? If so, what is it and how should we see it?
No I didn't. I just polishing the css to scale when I adjust the browser.


6. Is there anything special we need to know in order to run your code?
There is a problem I notice. So basically everytime my PC or laptop is shutdown, before doing the search, it has to load the data like at first search so it takes normally some second.
What concern me is that sometimes I don't know why it takes up until 30 second or more. I only experience this few times but overall, it doesn't often take that long.

