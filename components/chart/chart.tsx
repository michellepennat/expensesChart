import data from "../../json/data.json";

const Chart = () => {
  const columns = data.data;

  return (
    <section className="resume">
      <h3>Spending - Last 7 days</h3>
      <ul className="resume__chart">
        {columns.map((column) => (
          <li key={column.id} className="tooltip">
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
      <hr />
      <div className="resume__total-month">
        <div className="total">
          <h4>Total this month</h4>
          <h1>$478.33</h1>
        </div>
        <div className="increment">
          <p>+2.4%</p>
          <h4>from last month</h4>
        </div>
      </div>
    </section>
  );
};

export default Chart;
