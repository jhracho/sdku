// Left 37 up 38 Right 39 Down 40
// 0-9 48-57
export const NumFill = (event) =>{
    const ele = document.activeElement.id;
    const numRows = 9;

    // Event for when user enters a number 1-9
    if (event.which > 48 && event.which <= 57){
        var num = parseInt(ele.substring(1))+1;
        if (num === 82){
            num = 1;
        }
        while (document.getElementById('c'+ num).classList.contains('prefill')){
            num += 1;
            if (num === 82){
                num = 1;
            }
        }
        
        var test = 'c' + num;
        
        document.getElementById(test).focus();
    }

    // Event for when user presses arrow key
    else if (event.which >= 37 && event.which <= 40){
        var start = parseInt(ele.substring(1));

        // Left arrow
        if (event.which === 37){
            var num = start - 1;
            // Top Left to Bottom Right Wrapping
            if (num === 0){ num = 81; }
            // Skipping prefills
            while (document.getElementById('c'+ num).classList.contains('prefill')){
                num -= 1;
                if (num === 0) { num = 81; }
            }
        }

        // Up arrow
        else if (event.which === 38){
            var num = start - numRows;
            console.log('Curr: '+num);
            // Wrap Up to Down
            if (num <= 0){ num = start + (numRows*(numRows-1)); }
        }

        // Right arrow
        else if (event.which === 39){
            var num = start + 1;
            // Bottom Right to Top Left Wrapping
            if (num === 82) { num = 1; }
            // Skipping prefills
            while (document.getElementById('c'+ num).classList.contains('prefill')){
                num += 1;
                if (num === 82) { num = 1; }
            }
        }

        // Down arrow
        else if (event.which === 40){
            var num = start + numRows;
            // Wrap Down to Up
            if (num > 81){ num = start - (numRows*(numRows-1)); }
        }

        document.getElementById('c' + num).focus();   
    }  

    //TODO: char input
    else{
        alert('invalid input');
    }
};