var season = Number(prompt("Введите значение 1,2,3,4(1-зима/2-весна/3-лето/4-осень)"));
if(0<season<=4)
{
    switch(season){
    case 1:
        alert("Зима")
    break;
    case 2:
        alert("Весна")
    break;
    case 3:
        alert("Лето")
    break;
    case 4:
        alert("Осень")
    break;
    default:
        alert("Введите только 1,2,3,4")
        break;
}
}