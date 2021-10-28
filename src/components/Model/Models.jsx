import styles from "./Models.module.scss";

const Models = () => {

 

  return (
    <div>
      <h2>Best Sellers in Models</h2>
      <div className={styles.Models}>
        <img className={styles.Models__img} src="https://www.herocollector.com/uploads/media/Build-Ent-D-below.jpg"></img>
        <img className={styles.Models__img}  src="https://blog.trekcore.com/wp-content/uploads/2018/07/defiant5.jpg"></img>
        <img className={styles.Models__img} src="https://hips.hearstapps.com/pop.h-cdn.co/assets/16/26/4000x2000/landscape-1467144815-starshipenterprise.jpg?resize=1200:*"></img>
        <img className={styles.Models__img}  src="https://toyworldmag.co.uk/wp-content/uploads/2021/08/playmobil-enterprise-full.jpg"></img>
        <img className={styles.Models__img} src="https://trekmovie.com/wp-content/uploads/2020/09/eagle-agtfutureentd-head-777x437.jpg"></img>
      </div>
    </div>
  );
};

export default Models;