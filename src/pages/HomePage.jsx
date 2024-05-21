import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobsList from "../components/JobsList"
import ViewAllJobs from "../components/ViewAllJobs"

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobsList isHome={true}/>
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
