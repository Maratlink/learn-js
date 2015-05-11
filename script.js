var i=0;

do {
    if (prompt('Играть дальше? Если да введи 1')==='1'){
        if ((Math.random() * 6) < 1) {
            alert('финита ля комедия');
            break;
        }
        i++;
    } else {
        alert('Все!');
        break;
    }
}while(true);
alert('Раундов сыграно ' + i);
