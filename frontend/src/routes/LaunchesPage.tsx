import { useEffect, useState } from "react";
import { Launch } from "../types";

const LaunchesPage = () => {
  let [launch, setLaunch] = useState<Launch | null>(null);
  useEffect(() => {
    fetch("https://api.spacexdata.com/v5/launches/latest")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLaunch(data);
      });
  }, []);
  return launch ? (
    <div>
      <h1 className="pb-6">Launches</h1>
      <div>
        <h3>Latest Launch: {launch.name}</h3>
        <img src={launch.links.patch.small} />
        <p>
          Result:{" "}
          {launch.upcoming
            ? "Launch Upcoming"
            : launch.success
            ? "Successful"
            : "Failure"}
        </p>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default LaunchesPage;
