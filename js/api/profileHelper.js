import { database } from "./firebase";
import { goToScene } from "../navigation/NavigationHelper";
export function writeProfileToDatabase({
  userID,
  bio,
  experience,
  education,
  global,
  name,
  projects,
  quote,
  references,
  image,
  title
}) {
  database
    .collection("users")
    .doc(userID)
    .set(
      {
        bio: bio,
        experience: experience,
        education: education,
        global: global,
        name: name,
        projects: projects,
        quote: quote,
        references: references,
        image: image,
        title: title
      },
      {
        merge: true
      }
    )
    .then(goToScene("userProfile", "userProfileConfirm"));
}
