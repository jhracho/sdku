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
            // Wrap Up to Down
            if (num <= 0){ num = start + (numRows*(numRows-1)); }
            // Skipping prefills
            while (document.getElementById('c'+ num).classList.contains('prefill')){
                num -= numRows;
                if (num <= 0){ num = start + (numRows*(numRows-1)); }
            }
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
            // Skipping prefills
            while (document.getElementById('c'+ num).classList.contains('prefill')){
                num += numRows;
                console.log(num)
                if (num > 81){ num = start - (numRows*(numRows-1)); }
            }
        }

        document.getElementById('c' + num).focus();   
    }   
};