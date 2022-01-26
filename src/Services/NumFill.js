// Left 37 up 38 Right 39 Down 40
// 0-9 48-57
export const NumFill = (event) =>{
    const ele = document.activeElement.id;
    const numRows = 9;

    if (event.which >= 48 && event.which <= 57){
        var newElement = parseInt(ele.substring(1))+1;
        if (newElement === 82){
            newElement = 1;
        }

        var test = 'c' + newElement;
        console.log(test);
        document.getElementById(test).focus();
    }

    else if (event.which >= 37 && event.which <= 40){
        var start = parseInt(ele.substring(1));
        if (event.which === 37){
            var num = start - 1;
        }

        else if (event.which === 38 && start > 9){
            var num = start - numRows;
        }

        else if (event.which === 39){
            var num = start + 1;
        }

        else if (event.which === 40 && start + numRows <= 81){
            var num = start + numRows;
        }

        else{
            var num = start;
        }

        var test = 'c' + num;
        document.getElementById(test).focus();   //TODO: move this into all the if statements above
    }   
};