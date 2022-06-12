
var story = {
    currentScene: "start",
    start:{
        title: "Chapter 1",
        story: "<p>Your alarm rings. It is 7:00 am. You need to be up and out of the house before 8:15. What do you do?</p>",
        choices: [
            {
                choice: "Hit snooze. You can't be bothered today. You can definitely wait until at least 7:30 if you skip making coffee.",
                destination: 'twoa'
            },
            {
                choice:"Wake up. If you get up now you can have some alone time before starting work.",
                destination: 'twob'
            }
        ]
    },
    twoa:{
        title: "Too bad..",
        story: "As you try to fall back asleep, a thought creeps into your head, &#34;Why is there so much suffering in the world?&#34;",
        defaultDestination: "start",
        buttonText: "Try again."
    },
    twob:{
        title: "Chapter 2",
        story: "You slowly wake up as you sip your coffee. The room is completely quiet, and you're alone with your thoughts. What do you do?",
        choices: [
            {
                choice: "Watch a cat video.",
                destination: 'threea'
            },
            {
                choice:"Think about that time five years ago when you were really awkward.",
                destination: 'threeb'
            }
        ]
    },
        threeb:{
        title: "Too bad..",
        story: "As you reassure yourself that no one else remembered that it happened at all, you start wondering if anyone remembers anything you&#39;ve ever done.",
        defaultDestination: "start",
        buttonText: "Try again."
    },
    threea:{
        title: "Chapter 3",
        story: "Nice. You drink your coffee and don't think about the point of existence . As you wash your cup, you look at your dish soap. What do you do?",
        choices: [
            {
                choice: "Think about those commercials with animals getting cleaned up after an oil spill.",
                destination: 'foura'
            },
            {
                choice:"Turn on some music.",
                destination: 'fourb'
            }
        ]
    },
    foura:{
        title: "Too bad..",
        story: "You remember that the donations are likely a portion of their marketing budget and the soap is petroleum based.",
        defaultDestination: "start",
        buttonText: "Try again."
    },
    fourb:{
        title: "Chapter 4",
        story: "You're getting into your car to go to work. What do you do?",
        choices: [
            {
                choice: "Turn on your favorite song, and try to get pumped for the day.",
                destination: 'five'
            },
            {
                choice:"Turn on an audio book you&#39;ve been saving for your daily commute.",
                destination: 'five'
            }
        ]
    },
    five:{
        title: "Too bad..",
        story: "Against your best efforts the commute confirms your worst fears that there is no hope for society.",
        defaultDestination: "start",
        buttonText: "Try again."
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('#start-button')
    var input = document.querySelector('#name-input')
    var content = document.querySelector('#content')
    button.addEventListener('click', renderScene)
})  

function renderScene() {
    var text = "Continue"
    if (story[story.currentScene].buttonText) {
        text = story[story.currentScene].buttonText
    }
     content.innerHTML = `
    <h1>${story[story.currentScene].title}</h1>
    <p>${story[story.currentScene].story}</p>
    <br>
    ${getInputs()}
    <br>
    <button id = "submit-button">${text}</button>
    `
   var button = document.querySelector("#submit-button")
   button.addEventListener('click', function (){
    getInputValue()
   })
}

function getInputValue() {
    var inputs = document.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs [i].checked) {
            story.currentScene = inputs[i].getAttribute('data-destination')
            renderScene();
            return;
        }
    }
    story.currentScene = story[story.currentScene].defaultDestination
    renderScene()
}

function getInputs() {
var input = ""
if (!story[story.currentScene].choices) {
    return ""
}
    for(var i = 0; i < story[story.currentScene].choices.length; i++) {
        input += `
        <div id = "choices">
            <input data-destination = ${story[story.currentScene].choices[i].destination} id = "radio${i}" type = "radio" name = "choices" />
            <label for "radio${i}">${story[story.currentScene].choices[i].choice}</label>
        </div>`
    }
    return input;
}