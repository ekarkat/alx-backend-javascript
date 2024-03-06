import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => {
      const userStatus = result[0].status;
      const userValue = userStatus === 'fulfilled' ? result[0].value : result[0].reason.toString();

      const photoStatus = result[1].status;
      const photoValue = photoStatus === 'fulfilled' ? result[1].value : result[1].reason.toString();

      return [
        { status: userStatus, value: userValue },
        { status: photoStatus, value: photoValue },
      ];
    });
}
