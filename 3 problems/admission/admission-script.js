function getStatusOfAdmission(mark)
{
    mark = Number(mark);
    let status = document.getElementById("status");
    if(mark < 50)
    {
        status.innerHTML = 'Admission Application Rejected';
        status.style.color = 'red';
    }
    else if(mark >= 50 && mark < 70)
    {
        status.innerHTML = 'Acceptable to admit';
        status.style.color = 'wheat';
    }
    else if(mark > 70 && mark <= 90)
    {
        status.innerHTML = 'Good to admin';
        status.style.color = 'green';
    }
    else
    {
        status.innerHTML = 'Outstanding to admit';
        status.style.color = 'green';
    }
}