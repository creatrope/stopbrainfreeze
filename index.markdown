---
layout: page
title: Welcome to The Affirmatron
---

## Welcome to The Affirmatron
#### _The World's First Fully Automated Affirmation Machine_

We believe that positive affirmations can have a powerful impact on our lives. By consistently repeating positive thoughts and beliefs, we can cultivate a more optimistic and confident mindset. You tell us your affirmation and we repeat it thousands of times to help make it come true! We believe that everyone deserves to feel confident, empowered, and inspired to live their best life.

### Today's Featured Affirmation v8

<p id="affirmation"></p>

<script>
  // Load the affirmations JSON data
  document.addEventListener('DOMContentLoaded', () => {
  fetch('{{ site.baseurl }}/_data/affirmations.json')
    .then(response => response.json())
    .then(data => {
      // Pick a random affirmation
      const index = Math.floor(Math.random() * data.affirmations.length);
      const affirmation = data.affirmations[index];

      // Display the affirmation
      const affirmationElement = document.getElementById('affirmation');
      affirmationElement.textContent = affirmation;
    })
    .catch(error => console.error(error));
  });
</script>

### Submit An Affirmation for Processing
#### _Your affirmation will be submitted to our servers and repeated to the universe, 1000x within a week!_ 

{% include contact-form.html %}

## Resources

Check out our resources page for more information about the power of affirmations and how to incorporate them into your daily routine.

Thank you for visiting our site! We hope that our affirmations help you cultivate a positive mindset and live your best life.
