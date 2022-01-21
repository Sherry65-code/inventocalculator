function addNumber(numbername)
{
    if (numbername != "C" && numbername != "=")
    {
        document.getElementById('screen').value += numbername;
    }
    else if (numbername == "C")
    {
        document.getElementById('screen').value = "";
    }
    else if (numbername == "=")
    {
        var calans = eval(document.getElementById('screen').value);
        document.getElementById('screen').value = calans;
    }
}