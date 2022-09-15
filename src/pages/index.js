import Acomplishments from "../components/Acomplishments/Acomplishments";
import Hero from "../components/Hero/Hero";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Technologies from "../components/Technologies/Technologies";
import { Layout } from "../layout/Layout";
import AvatarCard from "../components/AvatarCard/AvatarCard";

const Home = () => {
    return (
        <Layout>
            <Hero />
            <ProjectCard />
            <Technologies />
            <Acomplishments />
        </Layout>
    );
};

export default Home;
