var length;

document.getElementById("lengthdisp").innerHTML = document.getElementById("length").value;

document.getElementById("length").oninput = function() 
{
    var length = document.getElementById("length").value;

    document.getElementById("lengthdisp").innerHTML = this.value;

    if(length<=10)
    {
        document.getElementById("lengthdisp").style.color = "red";
    }
    else if(length<=15)
    {
        document.getElementById("lengthdisp").style.color = "#CEC100";   
    }
    else
    {
        document.getElementById("lengthdisp").style.color = "green";
    }
};

document.getElementById("btn").onclick = function() 
{
    document.getElementById("copy").innerHTML = "Copy";

    var length = document.getElementById("length").value;


    var num = '0123456789';
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var specialchar = '!@#$%&*-_' ;

    var characters = num + alphabet + specialchar;

    var password = [];
    for (var i = 0; i < length; i++) 
    {
        var randomIndex = Math.floor(Math.random() * characters.length);
        password.push(characters.charAt(randomIndex));
    }

    document.getElementById("display").value = password.join('');
};

document.getElementById("copy").onclick = function()
{
    document.getElementById("display").select();
    document.execCommand('copy');
    document.getElementById("copy").innerHTML = "Copied!";
}