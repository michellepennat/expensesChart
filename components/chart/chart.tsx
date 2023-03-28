import data from "../../json/data.json";

export interface IDataChart {
  day?: string;
  amount?: number;
}

const Chart = ({ day, amount }: IDataChart) => {
  const columns = data.data[0];

  return (
    <section className="chart">
      <h3>Spending - Last 7 days</h3>
      {/* <ul>
        {columns.map(() => {
          <li>
            <div />
            <caption>mes</caption>
          </li>;
        })}
      </ul> */}
      <hr color="#f8e9d" />
      <div className="chart__total-month">
        <div className="total">
          <h5>Total this month</h5>
          <h1>$478.33</h1>
        </div>
        <div className="increment">
          <p>+2.4%</p>
          <h5>from last month</h5>
        </div>
      </div>
    </section>
  );
};

export default Chart;
