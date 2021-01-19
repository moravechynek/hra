const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
const padding = 30;

// https://en.wikipedia.org/wiki/Alexander_II_Zabinas
const text = "With the death of Demetrius II, Alexander II became the master of the kingdom, controlling the realm except for a small pocket around Ptolemais where Cleopatra Thea ruled. Alexander II was a beloved king, known for his kindness and forgiving nature. He maintained friendly relations with John I Hyrcanus of Judea, who acknowledged the Syrian king as his suzerain. Alexander II's successes were not welcomed by Egypt's Ptolemy VIII, who did not want a strong king on the Syrian throne. Thus, in 124 BC an alliance was established between Egypt and Cleopatra Thea, now ruling jointly with Antiochus VIII, her son by Demetrius II. Alexander II was defeated, and he escaped to Antioch, where he pillaged the temple of Zeus to pay his soldiers; the population turned against him, and he fled and was eventually captured. Alexander II was probably executed by Antiochus VIII in 123 BC, ending the line of Antiochus IV.";
let temp = 0;
let textValueU = 35;
let newColU = 60;

ctx.beginPath();
ctx.rect(padding, padding, canvas.width - 2 * padding, canvas.height - 2 * padding);
ctx.stroke();

function write(){
    let textValue = 35;
    let newCol = 60;
    for(let i = 0; i < text.length; i++){
        ctx.font = "30px Arial";
        ctx.strokeText(text[i], textValue, newCol);
        textValue += ctx.measureText(text[i]).width;
            if(textValue > canvas.width - padding * 2){
                newCol += 60;
                textValue = 30;
            }
    }
    return;
}

function active(index, color){
    ctx.font = "30px Arial";
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(textValueU, newColU + 3);
    ctx.lineTo(textValueU + ctx.measureText(text[index]).width, newColU + 3);
    ctx.stroke();
    ctx.strokeStyle = "#000000";
    return;
}

window.addEventListener('keydown',this.input);

function input(e){
    if(e.key == text[temp]){
        ctx.font = "30px Arial";
        ctx.fillText(text[temp], textValueU, newColU);
        textValueU += ctx.measureText(text[temp]).width;
        for(let j = 0; j < 5; j++){
            active(temp, "#FFFFFF"); // Nechápu proč to nepřebarví
        }
        temp++;
        active(temp + 1, "#000000");
    }
    if(textValueU > canvas.width - padding * 2){
        newColU += 60;
        textValueU = 30;
    }
    return;
}

active(0, "#000000");
write();