import { useEffect, useLayoutEffect, useRef } from "react";
import "./Calculator.scss";
import Nav from "../../Nav/Nav";

class CalculatorClass {
    display: HTMLInputElement | null = null;
    currentOperand: string = '';
    previousOperand: string = '';
    operation: string | undefined;

    constructor() {
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
        this.updateDisplay();
    }

    appendNumber(number: string) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
        this.updateDisplay();
    }

    appendOperator(operator: string) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.calculate();
        }
        this.operation = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    calculate() {
        let result: number | undefined;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = result.toString();
        this.operation = undefined;
        this.previousOperand = '';
        this.updateDisplay();
    }

    updateDisplay() {
        if (!this.display) {
            this.display = document.getElementById('display') as HTMLInputElement;
        }
        if (this.display) {
            this.display.value = this.currentOperand;
        }
    }
}


export const Calculator = () => {
    const calculatorRef = useRef(new CalculatorClass());

    const calculator = calculatorRef.current;

    return (
        <div className="calculator">
            <Nav/>
            <div className="holder-calculator">
            <input type="text" id="display" disabled />
            <div className="buttons-calculator">
                <button onClick={() => calculator.clear()} className="button-class">C</button>
                <button onClick={() => calculator.appendNumber('7')} className="button-class">7</button>
                <button onClick={() => calculator.appendNumber('8')} className="button-class">8</button>
                <button onClick={() => calculator.appendNumber('9')} className="button-class">9</button>
                <button onClick={() => calculator.appendOperator('+')} className="button-class">+</button>
                <button onClick={() => calculator.appendNumber('4')} className="button-class">4</button>
                <button onClick={() => calculator.appendNumber('5')} className="button-class">5</button>
                <button onClick={() => calculator.appendNumber('6')} className="button-class">6</button>
                <button onClick={() => calculator.appendOperator('-')} className="button-class">-</button>
                <button onClick={() => calculator.appendNumber('1')} className="button-class">1</button>
                <button onClick={() => calculator.appendNumber('2')} className="button-class">2</button>
                <button onClick={() => calculator.appendNumber('3')} className="button-class">3</button>
                <button onClick={() => calculator.appendOperator('*')} className="button-class">*</button>
                <button onClick={() => calculator.appendNumber('0')} className="button-class">0</button>
                <button onClick={() => calculator.appendNumber('.')} className="button-class">.</button>
                <button onClick={() => calculator.calculate()} className="button-class">=</button>
                <button onClick={() => calculator.appendOperator('/')} className="button-class">/</button>
            </div>
            </div>
        </div>
    );
};

export default Calculator;