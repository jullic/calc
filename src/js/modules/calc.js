const calc = () => {
    let expression = '';
    let currentValue = '';
    let resultValue = 0;
    let isEqually = false;
    let operator = '';


    const calculator = document.querySelector('.calculator');
    const input = document.querySelector('.input__text');
    
    calculator.addEventListener('click', (e) => {
        if (e.target.getAttribute('data-num')) {
            if (currentValue === '0') {
                currentValue = '';
            }
            if (isEqually) {
                isEqually = false;
                return;
            }
            let chars = currentValue.split('');
            if (e.target.getAttribute('data-num') === '.') {
                for (let i = 0; i < chars.length; i++) {
                    if (chars[i] === '.') {
                        return;
                    }
                }
            }
            if (e.target.getAttribute('data-num') === '.' && chars.length === 0) {
                currentValue += '0';
            }
            if (chars.length === 0 && (e.target.getAttribute('data-num') === '0')) {
                return;
            }
            if (chars.length >= 14) {
                return;
            }
            currentValue += e.target.getAttribute('data-num');
            input.textContent = currentValue;
            console.log(currentValue);
            
        }


        if (e.target.getAttribute('data-oper')) {
            console.log(resultValue, currentValue, expression);

            if (isEqually && e.target.getAttribute('data-oper') === '=') {
                return;
            }
            isEqually = false;
            if (currentValue) {
                expression += currentValue;
            }
            expression = expression + '';
            let chars = expression.split('');

            
            if ((chars[chars.length - 1] === '+' || chars[chars.length - 1] === '-' || chars[chars.length - 1] === '*' || chars[chars.length - 1] === '/')) {
                chars.pop();
                expression = chars.join('');
            }

            if (e.target.getAttribute('data-oper') === '=') {
                resultValue = eval(expression);
                expression = resultValue;
                currentValue = '';
                console.log(resultValue, currentValue, expression);
                input.textContent = resultValue;
                isEqually = true;
                maxLength();
                return;
            }
            let resCont;
            let curCont;
            try {
                resCont = resultValue.toString().split('.')[1].split('');
                curCont = currentValue.split('.')[1].split('');
            }
            catch(e) {}
            console.log(expression.replace(/[\.\d]/g, ''));

            let checkSign = expression.replace(/[\.\d]/g, '').split('');
            if (checkSign.length >= 2) {
                checkSign.shift();
            }
            checkSign = checkSign.join();
            

            function checkOperator() {
                if (checkSign === '+' || resultValue === 0) {
                    if (resultValue && currentValue !== '') {
                        let degree = 1;
                        if (resCont && curCont) {
                            currentValue = parseFloat(currentValue);
                            console.log(currentValue);
                            let length = resCont.length <= curCont.length ? resCont.length : curCont.length;
                            
                            for (let i = 0; i < length; i++) {
                                degree *= 10;
                                resultValue = resultValue * 10;
                            }
                            
                            for (let i = 0; i < length; i++) {
                                currentValue = currentValue * 10;
                            }
                            console.log(degree);
                            console.log(resultValue, currentValue);
                            
                        }
                        resultValue = (resultValue + parseFloat(currentValue)) / degree;
                    }
                    else if (currentValue !== '') {
                        resultValue = parseFloat(currentValue);
                    }
                    else {
                        resultValue = resultValue;
                    }
                }
                if (checkSign === '-' || resultValue === 0) {
                    if (resultValue && currentValue !== '') {
                        let degree = 1;
                        if (resCont && curCont) {
                            currentValue = parseFloat(currentValue);
                            console.log(currentValue);
                            let length = resCont.length <= curCont.length ? resCont.length : curCont.length;
                            
                            for (let i = 0; i < length; i++) {
                                degree *= 10;
                                resultValue = resultValue * 10;
                            }
                            
                            for (let i = 0; i < length; i++) {
                                currentValue = currentValue * 10;
                            }
                            console.log(degree);
                            console.log(resultValue, currentValue);
                            
                        }
                        resultValue = (resultValue - parseFloat(currentValue)) / degree;
                    }
                    else if (currentValue !== '') {
                        resultValue = parseFloat(currentValue);
                    }
                    else {
                        resultValue = resultValue;
                    }
                }
                if (checkSign === '*' || resultValue === 0) {
                    if (resultValue && currentValue !== '') {
                        let degree = 1;
                        if (resCont && curCont) {
                            currentValue = parseFloat(currentValue);
                            console.log(currentValue);
                            let length = resCont.length <= curCont.length ? resCont.length : curCont.length;
                            
                            for (let i = 0; i < length; i++) {
                                degree *= 10;
                                resultValue = resultValue * 10;
                            }
                            
                            for (let i = 0; i < length; i++) {
                                currentValue = currentValue * 10;
                            }
                            console.log(degree);
                            console.log(resultValue, currentValue);
                            
                        }
                        resultValue = (resultValue * parseFloat(currentValue)) / degree;
                    }
                    else if (currentValue !== '') {
                        resultValue = parseFloat(currentValue);
                    }
                    else {
                        resultValue = resultValue;
                    }
                }
                if (checkSign === '/' || resultValue === 0) {
                    if (resultValue && currentValue !== '') {
                        let degree = 1;
                        if (resCont && curCont) {
                            currentValue = parseFloat(currentValue);
                            console.log(currentValue);
                            let length = resCont.length <= curCont.length ? resCont.length : curCont.length;
                            
                            for (let i = 0; i < length; i++) {
                                degree *= 10;
                                resultValue = resultValue * 10;
                            }
                            
                            for (let i = 0; i < length; i++) {
                                currentValue = currentValue * 10;
                            }
                            console.log(degree);
                            console.log(resultValue, currentValue);
                            
                        }
                        resultValue = (resultValue / parseFloat(currentValue));
                    }
                    else if (currentValue !== '') {
                        resultValue = parseFloat(currentValue);
                    }
                    else {
                        resultValue = resultValue;
                    }
                }
            }
            
            checkOperator();
            
            // resultValue = eval(expression);
            expression = resultValue;
            expression += e.target.getAttribute('data-oper');
            operator = e.target.getAttribute('data-oper');
            input.textContent = resultValue;

            currentValue = '';

            console.log(resultValue, currentValue, expression);
        }


        if (e.target.getAttribute('data-fn')) {
            if (e.target.getAttribute('data-fn') === 'clear') {
                resultValue = 0;
                currentValue = '0';
                expression = '';
                input.textContent = '0';
                isEqually = false;
            }
            if (e.target.getAttribute('data-fn') === 'minus') {
                console.log(resultValue, currentValue, expression);
                
                if (resultValue === 0) {
                    resultValue = +currentValue;
                    currentValue = 0;
                }
                resultValue = resultValue * (-1);
                expression = resultValue + operator;
                input.textContent = resultValue;

                console.log(resultValue, currentValue, expression);

            }
            if (e.target.getAttribute('data-fn') === 'procent') {
                if (resultValue === 0) {
                    resultValue = +currentValue;
                }
                currentValue = '';
                resultValue = resultValue / 100;
                expression = resultValue + operator;
                input.textContent = resultValue;
                console.log(resultValue);
                
            }
        }

        function maxLength() {
            if ((resultValue + '').length > 16) {
                let resArr = (resultValue + '').split('');
                for (let i = resArr.length - 1; i > 15; i--) {
                    resArr.pop();
                }
                resultValue = parseFloat(resArr.join(''));
                input.textContent = resultValue;
            }
            if (resultValue.length >= 16) {
                // TODO 
            }
        }
        maxLength(); 
    });
};

export default calc;