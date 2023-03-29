import Image from "next/image";
import balanceSVG from "../../public/img/balanceSVG.svg";

const Balance = () => {
  return (
    <section className="balance">
      <div>
        <h4>My balance</h4>
        <h3>$921.48</h3>
      </div>
      <Image src={balanceSVG} alt="Balance" />
    </section>
  );
};

export default Balance;
