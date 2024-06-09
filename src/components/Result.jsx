import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Result({input}) {
const investmentValue = calculateInvestmentResults(input);
const initialInvestment = investmentValue[0].valueEndOfYear - investmentValue[0].interest - investmentValue[0].annualInvestment;
console.log(investmentValue)
    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {investmentValue.map(yearData => {
                const totalInvestment = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                const totalAmountInvested = yearData.valueEndOfYear - totalInvestment;
                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInvestment)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            })}
        </tbody>
    </table>
}