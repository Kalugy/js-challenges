import ChallengeComponent from "../components/challenge/challenge";
import { useParams, useSearchParams } from "react-router-dom";

export default function ChallengePage() {
  const { id } = useParams(); // Get the ":id" parameter if available.
  const [searchParams] = useSearchParams(); // Parse query parameters.

  const type = searchParams.get("type"); // Get the "type" query parameter.
  const difficulty = searchParams.get("difficulty"); // Get the "difficulty" query parameter.

  if (id) {
    return <div>Challenge ID: {id}</div>;
  }

  if (type && difficulty) {
    return (
      <div>
        Type: {type}, Difficulty: {difficulty}
      </div>
    );
  }

  if (type) {
    return <div>Type: {type}</div>;
  }

  return <div><ChallengeComponent /></div>;

}
