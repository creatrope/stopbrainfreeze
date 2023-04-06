fetch('{{ site.baseurl }}/data/affirmations.json')
  .then(response => response.json())
  .then(data => {
    const index = Math.floor(Math.random() * data.affirmations.length);
    const affirmation = data.affirmations[index];
    const affirmationElement = document.getElementById('affirmation');
    affirmationElement.textContent = affirmation;
  })
  .catch(error => console.error(error));
