import data from "../../json/data.json";

const Chart = () => {
  const columns = data.data;

  return (
    <section className="resume">
      <h3>Spending - Last 7 days</h3>
      <ul className="resume__chart">
        {columns.map((column) => (
          <li className="tooltip">
            <span
              className="tooltiptext"
              style={{ bottom: `${column.height + 28}px` }}
            >
              {column.amount}
            </span>
            <div
              className={`column column--${column.amount > 50 && "major"}`}
              style={{
                height: `${column.height}px`,
              }}
            />
            <p>{column.day}</p>
          </li>
        ))}
      </ul>
      <hr color="#f8e9d" />
      <div className="resume__total-month">
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
