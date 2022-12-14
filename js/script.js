
let jobsValue = 2

setTimeout(() => {
    if(jobsValue > 0){
        document.getElementById("jobs--value").style.cssText += 'opacity: 1;'
    } 
    if (jobsValue >= 10) {
        document.getElementById("jobs--value").innerHTML = '9'
    } else {
        document.getElementById("jobs--value").innerHTML = jobsValue
    }
} , 1000)

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('main-element-trigger-show');
      } 
      // else {
      //   change.target.classList.remove('main-element-trigger-show')
      // }
    });
  }
  
  let options = {
    threshold: [0.1] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.main-element-trigger');
  
  for (let elm of elements) {
    observer.observe(elm);
  }


