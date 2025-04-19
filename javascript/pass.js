function generate()
{
    var x = 'abcdefghijklmnopqrstuvwxyz';
    var y = '12345678901234567890';
    var z = '!@#$%^&*()_+';
    var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(containcap.checked == true)
    {
        x+=a;
    }
    if(containnum.checked == true)
    {
        x+=y;
    }
    if (containspe.checked ==true)
    {
        x+=z;
    }

    var p = document.getElementById("passwordlenght").value;
    document.getElementById("passwordbox1").value = random(p,x);
}   
function random(n,ar)
{
    var res ='';
    for(var i=0; i<n; i++)
    {
        res += ar[Math.floor(Math.random() * ar.length)];

    }
    return res;
}
function copyPass()
{
    var copy = document.getElementById("passwordbox1");
    copy.select();
    copy.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the password to clipboard : " + copy.value);


}