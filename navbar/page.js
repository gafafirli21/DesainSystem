import Layout from '../componen/layout'
import styles from '../componen/stylemodule/container.module.css';
import Navbar_1 from './componen/Navbar_with_Dropdown';
import Navbar_2 from './componen/Navbar_with_Search';
import Navbar_3 from './componen/Solid_Background';

const Page = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.nametag}>Navbar Component</h1>
                <div className={styles.box}>
                <Navbar_1 />
                </div>
                <div className={styles.box}>
                <Navbar_2 />
                </div>
                <div className={styles.box}>
                <Navbar_3 />
                </div>
            </div>
        </Layout>
    );
}
export default Page;