import { useEffect, useState } from "react";
import { Launch } from "../types";
import { Link, useNavigate } from "react-router-dom";

const LaunchesPage = () => {
  let navigate = useNavigate();
  let [launch, setLaunch] = useState<Launch | null>(null);
  let [launches, setLaunches] = useState<Array<Launch>>([]);
  useEffect(() => {
    fetch("https://api.spacexdata.com/v5/launches/latest")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLaunch(data);
      });
    fetch("https://api.spacexdata.com/v5/launches")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLaunches(data);
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
        {launches.length ? (
          <table className="rounded-lg border-2 border-light">
            <tr>
              <th>Name</th>
              <th>Result</th>
              <th>Launch Date</th>
              <th>Precision</th>
              <th>Video</th>
              <th></th>
            </tr>
            {launches.map((l, i) => {
              return (
                <tr className={`${i % 2 === 0 ? "bg-white" : "bg-light"}`}>
                  <td>{l.name}</td>
                  <td>
                    Result:{" "}
                    {l.upcoming
                      ? "Launch Upcoming"
                      : l.success
                      ? "Successful"
                      : "Failure"}
                  </td>
                  <td>{l.date_local}</td>
                  <td>{l.date_precision}</td>
                  <td>
                    {l.links.youtube_id ? (
                      <a
                        href={`https://www.youtube.com/watch?v=${l.links.youtube_id}`}
                        className="text-primary"
                      >
                        Watch
                      </a>
                    ) : (
                      ""
                    )}
                  </td>
                  <td>
                    <Link to={`/launches/${l.id}`} className="text-primary">
                      Details
                    </Link>
                  </td>
                </tr>
              );
            })}
          </table>
        ) : null}
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default LaunchesPage;
