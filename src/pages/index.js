import Acomplishments from "../components/Acomplishments/Acomplishments";
import Hero from "../components/Hero/Hero";
import Gradient1 from "../styles/GlobalComponents/Gradient1";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Technologies from "../components/Technologies/Technologies";
import { Layout } from "../layout/Layout";
import Resume from "../components/Resume/Resume";
const Home = () => {
    return (
        <Layout>
            <Hero />
            <Gradient1 />
            <ProjectCard />
            <Technologies />
            <Acomplishments />
            <Resume />
        </Layout>
    );
};

export default Home;
