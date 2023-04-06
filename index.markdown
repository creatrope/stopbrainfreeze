---
layout: page
title: Welcome to The Affirmatron
---

## Welcome to The Affirmatron
#### _The World's First Fully Automated Affirmation Machine_

We believe that positive affirmations can have a powerful impact on our lives. By consistently repeating positive thoughts and beliefs, we can cultivate a more optimistic and confident mindset. You tell us your affirmation and we repeat it thousands of times to help make it come true! We believe that everyone deserves to feel confident, empowered, and inspired to live their best life.

## Today's Featured Affirmation

<div id="quote"></div>

### Submit An Affirmation for Processing
##### _Your affirmation will be submitted to our servers and repeated to the universe, 1000x within a week!_

{% include contact-form.html %}

## Resources

Check out our resources page for more information about the power of affirmations and how to incorporate them into your daily routine.

Thank you for visiting our site! We hope that our affirmations help you cultivate a positive mindset and live your best life.

<script>
  /** Load a daily quote to show on the home page */
document.addEventListener('DOMContentLoaded', () => {
    let response = fetch('/assets/quotes.json')
    .then(res => res.text())
    .then(data => {
        let json = JSON.parse(data);
        let date = new Date(); 
        let doy = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
        let idx = doy % json.length;
        let quote = json[idx];
        document.getElementById('quote').innerHTML = '<blockquote class="not-prose"><p>' + quote.text + '</p><p><em>- ' + quote.author + '</em></p></blockquote>';
    })
    .catch(res => {
        console.error('Could not fetch quotes.json'); 
        console.error(res); 
    });
});
</script>
