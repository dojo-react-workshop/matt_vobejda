'use strict';

var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

randomize.addEventListener('click', result);

function result() {

  let weight = 300;
  let temperature = 94;  
  let temp_desc = "";
  let weight_desc = "";
  let name = "";

  const character = [
      'Willy the Goblin',
      'Big Daddy',
      'Father Christmas'
  ];
  
  const location = [
      'the soup kitchen',
      'Disneyland',
      'the White House'
  ];

  const action = [
      'spontaneously combusted',
      'melted into a puddle on the sidewalk',
      'turned into a slug and crawled away'
  ];

  if(customName.value != '') {
    name = customName.value;
  } else {
    name = 'bob';
  }

  if(document.getElementById("uk").checked) {
    weight = Math.round(300/14);
    temperature = Math.round((94-32)/1.8);
    temp_desc = "celcius";
    weight_desc = "stone";
  } else {
    temp_desc = "farenheit";
    weight_desc = "pounds";
  }

  story.textContent = `It was ${temperature} ${temp_desc} outside, so ${randomValueFromArray(character)} went for a walk. When they got to ${randomValueFromArray(location)}, they stared in horror for a few moments, then ${randomValueFromArray(action)}. ${name} saw the whole thing, but he was not surprised — ${randomValueFromArray(character)} weighs ${weight} ${weight_desc}, and it was a hot day.`;
  story.style.visibility = 'visible';
}