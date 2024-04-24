/* 
* Question 138: Describe how to use breakpoints in browser developer tools to debug JavaScript code.

* Explain & TIP: Breakpoints are a powerful feature in browser developer tools that allow you to 
* pause the execution of your JavaScript code at a specific line. This gives you an opportunity to 
* inspect variables, step through code one line at a time, and understand how your code executes in real-time.
*/

// Sample code snippet for setting a breakpoint
console.log("Before breakpoint");
// Set a breakpoint on the following line using your browser's developer tools
console.log(
  "This line has a breakpoint set on it in the browser's developer tools"
);
console.log("After breakpoint");
// To use breakpoints, open this code in your browser, open the developer tools, navigate to the Source tab, 
// find this script, and click on the line number where you want to pause execution. 
// When you reload or run your page, execution will pause at the breakpoint.