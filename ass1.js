var x=document.getElementById("conv")

// ------- celcius to ferunheit convertor----
function ctf()
{
    x.value=Number((x.value*9/5)+32)

}

// ------- ferunheit to celcius convertor----
function ftc()
{
    x.value=Number((x.value-32)*5/9)
}

//-------- foot to meter convert --------- 
function ftm()
{
    x.value=Number((x.value*0.3048))
}

// --------- meter to foot convert
function mtf()
{
    x.value=Number(x.value*3.28084)
}

// ---------- inches to centimeter convert -----
function itc()
{
    x.value=Number(x.value*2.54)
}

// ------------ centimeter to inches convert-----
function cti()
{
    x.value=Number(x.value/2.54)
}

// ----------- pound to  kilogram ------
function ptk()
{
    x.value=Number(x.value/2.205)
}

// ----------- kilogram to pound ------
function ktp()
{
    x.value=Number(x.value*2.205)
}
// -----REset button----
function reset()
{
    x.value=""
}