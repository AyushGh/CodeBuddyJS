// level {1/2/3}
/*Re-write the below code to better code quality standards.
Hint: use modern ES6 syntax and reduce lines of code.*/

async function getUsers() {
    let doc = await Promise.all(getUser(), getProfile(), getPosts());
  
    let [user,Profile,p] = doc;

    //[doc[0], doc[1], doc[2]];

    // let user = doc[0];
    // let Profile = doc[1];
    // let p = doc[2];
  
    const userProfile = {
    //   user: user,
      user,
      profile: Profile,
      posts: p
    };
  
    return userProfile;
  }